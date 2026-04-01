import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const svgPath = resolve(__dirname, '../public/favicon.svg')
const icoPath = resolve(__dirname, '../public/favicon.ico')

const svgBuffer = readFileSync(svgPath)

// Generate 32x32 PNG from SVG
const pngBuffer = await sharp(svgBuffer)
  .resize(32, 32)
  .png()
  .toBuffer()

// ICO format: header + directory entry + PNG data
const header = Buffer.alloc(6)
header.writeUInt16LE(0, 0)      // Reserved
header.writeUInt16LE(1, 2)      // ICO type
header.writeUInt16LE(1, 4)      // 1 image

const entry = Buffer.alloc(16)
entry.writeUInt8(32, 0)         // Width
entry.writeUInt8(32, 1)         // Height
entry.writeUInt8(0, 2)          // Color palette
entry.writeUInt8(0, 3)          // Reserved
entry.writeUInt16LE(1, 4)       // Color planes
entry.writeUInt16LE(32, 6)      // Bits per pixel
entry.writeUInt32LE(pngBuffer.length, 8)  // Size of PNG data
entry.writeUInt32LE(22, 12)     // Offset (6 header + 16 entry = 22)

const ico = Buffer.concat([header, entry, pngBuffer])
writeFileSync(icoPath, ico)

console.log(`favicon.ico generated (${ico.length} bytes)`)
