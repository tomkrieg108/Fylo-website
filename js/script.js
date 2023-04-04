
const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');


if(document.documentElement.classList.contains('dark')) {
  lightIcon.classList.remove('hidden');
  localStorage.setItem('color-theme', 'dark');
} else {
  darkIcon.classList.remove('hidden');
  localStorage.setItem('color-theme', 'light');
}

themeToggleBtn.addEventListener('click', () => {
  darkIcon.classList.toggle('hidden');
  lightIcon.classList.toggle('hidden');
  document.documentElement.classList.toggle('dark');
  if(document.documentElement.classList.contains('dark')) {
    localStorage.setItem('color-theme', 'dark');
  } else {
    localStorage.setItem('color-theme', 'light');
  }
})