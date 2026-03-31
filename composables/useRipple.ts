export function useRipple() {
  const createRipple = (event: MouseEvent) => {
    const button = event.currentTarget as HTMLElement
    const ripple = document.createElement('span')
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2

    ripple.classList.add('ripple-effect')
    ripple.style.width = ripple.style.height = `${size}px`
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`

    button.appendChild(ripple)
    setTimeout(() => ripple.remove(), 700)
  }

  return { createRipple }
}
