export function useParallax() {
  const mouseX = ref(0)
  const mouseY = ref(0)

  const init = () => {
    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('mousemove', (e) => {
        mouseX.value = (e.clientX / window.innerWidth - 0.5) * 2
        mouseY.value = (e.clientY / window.innerHeight - 0.5) * 2
      })
    }
  }

  const parallaxStyle = (strength: number = 20) => computed(() => ({
    transform: `translate(${mouseX.value * strength}px, ${mouseY.value * strength}px)`,
    transition: 'transform 0.3s ease-out',
  }))

  return { mouseX, mouseY, init, parallaxStyle }
}
