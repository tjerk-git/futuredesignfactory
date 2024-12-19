function toggleMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  
  // Prevent body scrolling when menu is open
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}
