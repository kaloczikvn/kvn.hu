window.onload = () => {
    const scrollElement = document.documentElement;
    const nav = document.querySelector('nav');

    function checkScroll() {
        if (scrollElement.scrollTop >= 1) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    checkScroll();
    window.onscroll = () => {
        checkScroll();
    };
};
