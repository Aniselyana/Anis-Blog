// 1. Dapatkan rujukan elemen
const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// 2. Semak tema yang disimpan dalam localStorage
const savedTheme = localStorage.getItem('theme') || 'dark'; // Default kepada dark
document.documentElement.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

// 3. Fungsi untuk tukar tema
toggleButton.addEventListener('click', () => {
  let currentTheme = document.documentElement.getAttribute('data-theme');
  let newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  updateIcon(newTheme);
});

// 4. Fungsi pembantu untuk tukar ikon
function updateIcon(theme) {
  if (theme === 'dark') {
    themeIcon.textContent = '🌙'; // Ikon bulan untuk mode gelap
  } else {
    themeIcon.textContent = '☀️'; // Ikon matahari untuk mode cerah
  }
}