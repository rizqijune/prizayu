const drawerToggle = document.getElementById('my-drawer');
const bottomNav = document.getElementById('bottom-nav');

drawerToggle.addEventListener('change', function() {
  if (this.checked) {
    bottomNav.classList.add('hidden');
  } else {
    bottomNav.classList.remove('hidden');
  }
});