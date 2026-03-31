<template>
  <div>
    <div id="cursor-dot" ref="dot" aria-hidden="true" />
    <div id="cursor-ring" ref="ring" aria-hidden="true" />
  </div>
</template>

<script setup lang="ts">
const dot = ref<HTMLElement | null>(null)
const ring = ref<HTMLElement | null>(null)

let mouseX = 0, mouseY = 0
let ringX = 0, ringY = 0
let animId: number

const lerp = (a: number, b: number, t: number) => a + (b - a) * t

function animate() {
  ringX = lerp(ringX, mouseX, 0.12)
  ringY = lerp(ringY, mouseY, 0.12)

  if (dot.value) {
    dot.value.style.left = `${mouseX}px`
    dot.value.style.top = `${mouseY}px`
  }
  if (ring.value) {
    ring.value.style.left = `${ringX}px`
    ring.value.style.top = `${ringY}px`
  }
  animId = requestAnimationFrame(animate)
}

onMounted(() => {
  if (typeof window === 'undefined') return

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  })

  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement
    if (target.matches('a, button, [role="button"], input, textarea, label, .card-lift')) {
      ring.value?.classList.add('hover')
    }
  })
  document.addEventListener('mouseout', () => {
    ring.value?.classList.remove('hover')
  })

  animate()
})

onUnmounted(() => cancelAnimationFrame(animId))
</script>
