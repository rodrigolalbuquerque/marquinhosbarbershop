// Screenshot de página inteira via Playwright.
// Uso: node tools/shot.mjs [url] [saida.png] [largura]
// Ex.:  node tools/shot.mjs                          -> localhost:3000, screenshots/home.png, 1440
//       node tools/shot.mjs http://localhost:3000 screenshots/home-mobile.png 390
import { chromium } from 'playwright'

const url = process.argv[2] || 'http://localhost:3000'
const out = process.argv[3] || 'screenshots/home.png'
const width = Number(process.argv[4] || 1440)

const browser = await chromium.launch()
const context = await browser.newContext({ viewport: { width, height: 900 } })
const page = await context.newPage()

// Espera o dev server responder (tolera compilação/boot do Next).
const deadline = Date.now() + 90000
let ok = false
while (Date.now() < deadline) {
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 30000 })
    ok = true
    break
  } catch {
    await page.waitForTimeout(2000)
  }
}
if (!ok) {
  console.error(`Não consegui abrir ${url} — o dev server está rodando? (pnpm dev)`)
  await browser.close()
  process.exit(1)
}

// Rola a página inteira para disparar as imagens com loading="lazy", depois volta ao topo.
await page.evaluate(async () => {
  const step = window.innerHeight
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y)
    await new Promise((r) => setTimeout(r, 120))
  }
  window.scrollTo(0, 0)
})
// Espera todas as imagens terminarem (evita capturar quadro vazio de lazy image).
await page
  .waitForFunction(() => [...document.images].every((i) => i.complete), null, { timeout: 20000 })
  .catch(() => {})
await page.waitForTimeout(1200) // respiro para fontes/decode
// 5º arg "header" captura só o topo (viewport recortado) em alta resolução.
if (process.argv[5] === 'header') {
  await page.screenshot({ path: out, clip: { x: 0, y: 0, width, height: 140 } })
} else {
  await page.screenshot({ path: out, fullPage: true })
}
await browser.close()
console.log(`Screenshot salvo em ${out}`)
