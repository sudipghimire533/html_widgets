async function count(target){
	let from  = parseInt(target.getAttribute('from'));
    let to  = parseInt(target.getAttribute('to'));
    let step = ((to-from)/(parseInt(target.getAttribute('in'))*10));
    function count(){
        target.textContent = Math.ceil(from);
        if(from >= to){
            target.textContent = to;
        } else {
            from += step;
            setTimeout(count, 100);
        }
    }
    count();
}

function counter(){
	let counts = document.getElementsByClassName('count');
	for(let i = 0; i < counts.length; i++){
		count(counts[i]);
	}
}