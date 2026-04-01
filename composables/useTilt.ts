export function useTilt() {
  const onMouseMove = (e: MouseEvent) => {
    const card = (e.currentTarget as HTMLElement)
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`
    // Glow follow cursor
    card.style.setProperty('--glow-x', `${(x + 0.5) * 100}%`)
    card.style.setProperty('--glow-y', `${(y + 0.5) * 100}%`)
  }

  const onMouseLeave = (e: MouseEvent) => {
    const card = (e.currentTarget as HTMLElement)
    card.style.transform = ''
  }

  return { onMouseMove, onMouseLeave }
}
