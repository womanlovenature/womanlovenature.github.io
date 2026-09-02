function toggleSideMenu() {
  document.getElementById('sideMenu').classList.toggle('open');
}

// Zavře menu při kliknutí kamkoliv mimo něj
document.addEventListener('click', function (event) {
  const trigger = document.getElementById('sideMenuTrigger');
  const menu = document.getElementById('sideMenu');
  if (trigger && !trigger.contains(event.target)) {
    menu.classList.remove('open');
  }
});
