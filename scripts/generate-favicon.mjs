import sharp from 'sharp'
import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const sourcePath = resolve(__dirname, '../public/logo-symbole.png')
const faviconPngPath = resolve(__dirname, '../public/favicon.png')
const faviconIcoPath = resolve(__dirname, '../public/favicon.ico')
const appleTouchPath = resolve(__dirname, '../public/apple-touch-icon.png')

// 32x32 PNG favicon
const pngBuffer = await sharp(sourcePath).resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer()
writeFileSync(faviconPngPath, pngBuffer)

// 180x180 apple-touch-icon
const appleBuffer = await sharp(sourcePath).resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer()
writeFileSync(appleTouchPath, appleBuffer)

// ICO wrapping the 32x32 PNG
const header = Buffer.alloc(6)
header.writeUInt16LE(0, 0)
header.writeUInt16LE(1, 2)
header.writeUInt16LE(1, 4)

const entry = Buffer.alloc(16)
entry.writeUInt8(32, 0)
entry.writeUInt8(32, 1)
entry.writeUInt8(0, 2)
entry.writeUInt8(0, 3)
entry.writeUInt16LE(1, 4)
entry.writeUInt16LE(32, 6)
entry.writeUInt32LE(pngBuffer.length, 8)
entry.writeUInt32LE(22, 12)

const ico = Buffer.concat([header, entry, pngBuffer])
writeFileSync(faviconIcoPath, ico)

console.log(`favicon.png  ${pngBuffer.length} bytes`)
console.log(`favicon.ico  ${ico.length} bytes`)
console.log(`apple-touch-icon.png  ${appleBuffer.length} bytes`)
