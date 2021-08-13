const navItems = document.querySelectorAll('.nav__item');

for (let i = 0; i < navItems.length; i++) {
    const el = navItems[i];
    el.addEventListener('click', () => {
        removeActive();
        addActive(el);
    });
}

function addActive(item) {
    item.classList.add('active');
}

function removeActive() {
    for (let i = 0; i < navItems.length; i++) {
        const el = navItems[i];
        el.classList.remove('active');
    }    
}

// bxslider
$(document).ready(function(){
    $('.bxslider').bxSlider({
        touchEnabled: true,
        pager: true,
        nextText:'',
        prevText:''
    });
});