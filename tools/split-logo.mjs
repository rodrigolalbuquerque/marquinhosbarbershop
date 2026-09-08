// Divide o SVG horizontal (logo + texto) em dois arquivos justos,
// medindo a caixa de cada grupo (#g1 = rosto, #g2 = texto) no navegador.
import { chromium } from 'playwright'
import { readFileSync, writeFileSync } from 'fs'

const src = 'public/logo-rosto-texto-horizontal.svg'
const url = 'http://localhost:3000/logo-rosto-texto-horizontal.svg'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1400, height: 400 } })
await page.goto(url, { waitUntil: 'load' })
await page.waitForTimeout(300)
const boxes = await page.evaluate(() => {
  const svg = document.querySelector('svg')
  const vb = svg.viewBox.baseVal
  const svgR = svg.getBoundingClientRect()
  const box = (id) => {
    const r = document.getElementById(id).getBoundingClientRect()
    return {
      x: vb.x + ((r.left - svgR.left) / svgR.width) * vb.width,
      y: vb.y + ((r.top - svgR.top) / svgR.height) * vb.height,
      w: (r.width / svgR.width) * vb.width,
      h: (r.height / svgR.height) * vb.height,
    }
  }
  return { g1: box('g1'), g2: box('g2') }
})
await browser.close()

const raw = readFileSync(src, 'utf8')
const pad = 1
const make = (b) => {
  const x = b.x - pad, y = b.y - pad, w = b.w + pad * 2, h = b.h + pad * 2
  return raw
    .replace(/width="[^"]*mm"/, `width="${w.toFixed(3)}mm"`)
    .replace(/height="[^"]*mm"/, `height="${h.toFixed(3)}mm"`)
    .replace(/viewBox="[^"]*"/, `viewBox="${x.toFixed(3)} ${y.toFixed(3)} ${w.toFixed(3)} ${h.toFixed(3)}"`)
}
writeFileSync('public/logo-face.svg', make(boxes.g1))
writeFileSync('public/logo-texto.svg', make(boxes.g2))
console.log('g1 (rosto):', JSON.stringify(boxes.g1))
console.log('g2 (texto):', JSON.stringify(boxes.g2))
console.log('Gerados: public/logo-face.svg e public/logo-texto.svg')
