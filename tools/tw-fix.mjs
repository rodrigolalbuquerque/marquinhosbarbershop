// Converte valores arbitrários do Tailwind para a forma canônica sugerida pelo plugin.
// - Espaçamento/tamanho [Npx] -> escala n/4 (aceita .25/.5/.75). Ímpares incluídos.
// - Propriedades arbitrárias [prop:valor] -> utilitário (filter-[…], bg-[…], etc.).
// NÃO toca em font-size (text-[..]) porque as classes nomeadas embutem line-height.
import { readFileSync, writeFileSync } from 'fs'

const file = 'app/page.tsx'
let s = readFileSync(file, 'utf8')
let count = 0

const spRe =
  /(?<![\w-])(-?)(p[trblxy]?|m[trblxy]?|gap(?:-[xy])?|space-[xy]|min-[wh]|max-[wh]|size|w|h|top|right|bottom|left|inset(?:-[xy])?)-\[(\d+)px\]/g
s = s.replace(spRe, (m, neg, pre, num) => {
  count++
  return `${neg}${pre}-${String(Number(num) / 4)}`
})

s = s.replace(/\[filter:([^\]]+)\]/g, (m, v) => (count++, `filter-[${v}]`))
s = s.replace(/\[background:([^\]]+)\]/g, (m, v) => (count++, `bg-[${v}]`))
s = s.replace(/\[text-shadow:([^\]]+)\]/g, (m, v) => (count++, `text-shadow-[${v}]`))
s = s.replace(/\[mix-blend-mode:(\w+)\]/g, (m, v) => (count++, `mix-blend-${v}`))

writeFileSync(file, s)
console.log('conversões:', count)
