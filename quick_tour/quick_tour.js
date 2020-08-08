let tabs, switches;
let current = 0;
function quick_tour() {
    tabs = document.getElementsByClassName('block_tab');
    switches = document.getElementsByClassName('tb_switch');
}
function switch_tab(index) {
    console.log('crrent: ' + current + " target: " + index);
    tabs[current].classList.remove('active');
    switches[current].classList.remove('active');
    tabs[index].classList.add('active');
    switches[index].classList.add('active');
    current = index;
}