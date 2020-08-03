
/*
 * The delay between typing letters (in milliseconds).
 * The less the duration the ast the typing ,
 *  and the mre the duration the slow the typing.
*/
let speed = 120;
/*
 * The delay between typing each sentence inside <li> (in milliseconds).
 * The less the duration the less the time user have time to read the typed text ,
 *  and the mre the duration the more the user have time to read the typed text.
*/
let end_duration = 1000;
function typewriter() {
	let writings = document.querySelectorAll('#TypeWriter .text');
	let board = document.querySelector('#TypeWriter .board');
	let kth = 0
	function type(elem, nth = 0) {
		board.textContent = "";
		function repeat() {
			board.textContent += elem.textContent[nth];
			nth++;
			if (nth >= elem.textContent.length) {
				kth = (kth >= writings.length - 1) ? 0 : kth + 1;
				setTimeout(type, end_duration, writings[kth]);
			} else {
				setTimeout(repeat, speed);
			}
		}
		repeat();
	}
	type(writings[kth]), 300;
}