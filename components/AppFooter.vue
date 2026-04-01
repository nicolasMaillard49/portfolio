<template>
  <footer class="dark:bg-dark-bg bg-white dark:border-dark-border border-gray-100 border-t py-10">
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Logo + copyright -->
      <div class="flex items-center gap-3">
        <div class="w-7 h-7 rounded-lg bg-electric-500 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" stroke-width="2.2" stroke-linejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="white" stroke-width="2.2" stroke-linejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="white" stroke-width="2.2" stroke-linejoin="round"/>
          </svg>
        </div>
        <p class="dark:text-gray-400 text-gray-500 text-sm">
          © {{ new Date().getFullYear() }} Nicolas Maillard · Développeur Web Full-Stack
        </p>
      </div>

      <!-- Links -->
      <div class="flex items-center gap-6">
        <a href="https://github.com/nicolasMaillard49" target="_blank" rel="noopener"
          class="dark:text-gray-400 text-gray-500 dark:hover:text-white hover:text-navy-900 text-sm transition-colors"
          aria-label="GitHub">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/nicolas-maillard-dev/" target="_blank" rel="noopener"
          class="dark:text-gray-400 text-gray-500 dark:hover:text-white hover:text-navy-900 text-sm transition-colors"
          aria-label="LinkedIn">
          LinkedIn
        </a>
        <a href="mailto:nico39320@gmail.com"
          class="dark:text-gray-400 text-gray-500 dark:hover:text-white hover:text-navy-900 text-sm transition-colors">
          Email
        </a>
      </div>
    </div>
  </footer>
</template>
