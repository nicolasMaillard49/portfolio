export function useSkillBars() {
  const animate = () => {
    const bars = document.querySelectorAll('.skill-bar-fill') as NodeListOf<HTMLElement>
    bars.forEach((bar) => {
      const target = bar.getAttribute('data-width') || '0'
      bar.style.width = `${target}%`
    })
  }

  const init = () => {
    const section = document.getElementById('about')
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(animate, 200)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(section)
  }

  return { init }
}
