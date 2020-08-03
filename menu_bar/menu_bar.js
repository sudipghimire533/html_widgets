function toggle_menu(toggler) {
	let prev = toggler.previousElementSibling;
	prev.classList.contains('show') ?
		prev.classList.remove('show') :
		prev.classList.add('show');
	toggler.textContent = (toggler.textContent == 'x') ? '=' : 'x';
}


let hided_on;
function resized() {
	let menubar = document.getElementById('MenuBar');
	console.log(menubar.offsetWidth);
	if (menubar.classList.contains('hide')) {
		if (menubar.offsetWidth > hided_on) {
			menubar.classList.remove('hide');
		}
	}
	/* We are not sure if removing .hide is safe so check it again
	   This is the case where very initial width was small and the again resized to smaller width
	*/
	let space = document.getElementsByClassName('navigation')[0].offsetLeft
		- document.getElementsByClassName('logo')[0].offsetLeft;
	if (space < 100) {
		if (!menubar.classList.contains('hide')) {
			hided_on = menubar.offsetWidth;
			menubar.classList.add('hide');
		}
	}
}