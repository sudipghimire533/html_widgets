function counter(){
	let elems = document.querySelectorAll('#Counter .count');
	function count(from, to, tm, el, i = 0){
		el.textContent = from;
		if(from < to)
			setTimeout(count, 100,from+1, to, tm, el, i+1);
	}
	elems.forEach(el => {
		count(
			parseInt(el.getAttribute('from')),
			parseInt(el.getAttribute('to')),
			parseInt(el.getAttribute('in'))*100,
			el
		);
	});
}