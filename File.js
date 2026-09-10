const body = document.body;
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.querySelector('.theme-toggle');

menuToggle.addEventListener('click', () => {
	const isOpen = navMenu.classList.toggle('open');
	menuToggle.setAttribute('aria-expanded', String(isOpen));
});