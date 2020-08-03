function home_cover() {
    let covers = document.querySelectorAll('#HomeCover1 .cover');
    let indicators = document.querySelectorAll('#HomeCover1 .indicate');
    active = 0;
        /* Copy the indicator to match the countof .cover */
    for(i = 1; i < covers.length; i++){
        indicators[0].parentElement.appendChild(indicators[0].cloneNode());
    }
    indicators = document.querySelectorAll('#HomeCover1 .indicate');

    function change_active() {
        covers[active].classList.remove('active');
        indicators[active].classList.remove('active');
        active = (active < covers.length - 1)? active + 1 : 0;
        covers[active].classList.add('active');
        indicators[active].classList.add('active');
        setTimeout(change_active, 7 * 1000);
    }
    setTimeout(change_active, 7 * 100);
}