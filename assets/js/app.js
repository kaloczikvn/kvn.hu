class App {
    constructor() {
        this.scrollElement = document.documentElement;
        this.nav = document.querySelector('nav');
    
        window.addEventListener('scroll', this.scroll.bind(this), false);
        this.scroll();
    }

    scroll() {
        if (this.scrollElement.scrollTop >= 1) {
            this.nav.classList.add('scrolled');
        } else {
            this.nav.classList.remove('scrolled');
        }
    }
}

window.onload = () => {
    new App();
};
