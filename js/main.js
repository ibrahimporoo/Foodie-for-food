window.onload = () => {
	setTimeout(() => {
		document.getElementById('preloader').style.display = 'none';
	}, 2500);
}
// Header On Scroll
window.onscroll = () => {
	if(window.scrollY > 0) {
		document.querySelector('header').classList.add('active');
	} else {
		document.querySelector('header').classList.remove('active');
	}
	// Hide Navbar When Scroll
	document.querySelector('header .navbar').classList.remove('on')
};

document.getElementById('menu-icon').addEventListener('click', () => {
	document.querySelector('header .navbar').classList.toggle('on')
});

// Prevent Submit
document.querySelector('#user-msg').addEventListener('submit', (e) => {
	e.preventDefault();
});
