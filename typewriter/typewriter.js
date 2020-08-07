
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
	let kth = 0;
	let er_th;
	function type(elem, nth = 0) {
		board.textContent = "";
		function erase() {
			board.textContent = board.textContent.substring(0, nth);
			if (nth <= 0) {
				/*
					We don't have to wait to type after erasing last text
					setTimeout(type, end_duration, writings[kth]);
				*/
				type(writings[kth]);
			}
			else {
				nth = nth - 1;
				setTimeout(erase, speed / 2);
			}
		}
		function repeat() {
			board.textContent += elem.textContent[nth];
			nth++;
			if (nth >= elem.textContent.length) {
				kth = (kth >= writings.length - 1) ? 0 : kth + 1;
				setTimeout(erase, end_duration);
			} else {
				setTimeout(repeat, speed);
			}
		}
		repeat();
	}
	type(writings[kth]), 300;
}