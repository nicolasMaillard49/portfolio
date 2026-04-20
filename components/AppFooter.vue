<template>
  <footer class="dark:bg-[rgba(6,6,12,0.6)] bg-white dark:border-[rgba(255,255,255,0.06)] border-gray-100 border-t py-10 backdrop-blur-xl">
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Logo + copyright -->
      <div class="flex items-center gap-3">
        <img src="/logo-symbole.png" alt="NMF Agence" width="28" height="28" class="w-7 h-7 object-contain" />
        <p class="dark:text-gray-400 text-gray-500 text-sm">
          © {{ new Date().getFullYear() }} NMF Agence · Agence Web Full-Stack Bordeaux
        </p>
      </div>

      <!-- Links -->
      <div class="flex items-center gap-5">
        <a href="https://www.instagram.com/nmfagence/" target="_blank" rel="noopener"
          class="group flex items-center gap-1.5 dark:text-gray-400 text-gray-500 dark:hover:text-white hover:text-navy-900 text-sm transition-colors"
          aria-label="Instagram @nmfagence">
          <svg class="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849 0 3.204-.012 3.584-.07 4.849-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.849.07-3.204 0-3.584-.012-4.849-.07-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.142 0-3.511.011-4.75.068-1.03.047-1.59.217-1.96.361-.494.192-.846.421-1.216.791-.37.37-.599.722-.791 1.216-.144.37-.314.93-.361 1.96C2.85 8.489 2.838 8.858 2.838 12c0 3.142.011 3.511.068 4.75.047 1.03.217 1.59.361 1.96.192.494.421.846.791 1.216.37.37.722.599 1.216.791.37.144.93.314 1.96.361 1.239.057 1.608.068 4.75.068s3.511-.011 4.75-.068c1.03-.047 1.59-.217 1.96-.361.494-.192.846-.421 1.216-.791.37-.37.599-.722.791-1.216.144-.37.314-.93.361-1.96.057-1.239.068-1.608.068-4.75s-.011-3.511-.068-4.75c-.047-1.03-.217-1.59-.361-1.96-.192-.494-.421-.846-.791-1.216-.37-.37-.722-.599-1.216-.791-.37-.144-.93-.314-1.96-.361C15.511 4.012 15.142 4.001 12 4.001zm0 3.131a4.868 4.868 0 1 1 0 9.736 4.868 4.868 0 0 1 0-9.736zm0 8.03a3.162 3.162 0 1 0 0-6.324 3.162 3.162 0 0 0 0 6.324zm6.188-8.248a1.137 1.137 0 1 1-2.274 0 1.137 1.137 0 0 1 2.274 0z"/>
          </svg>
          Instagram
        </a>
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
        <a href="#contact"
          class="dark:text-gray-400 text-gray-500 dark:hover:text-white hover:text-navy-900 text-sm transition-colors">
          Contact
        </a>
      </div>
    </div>
  </footer>
</template>
