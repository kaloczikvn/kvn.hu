import { GlowParticle } from "./glowparticle.js";

const COLORS = [
    {r: 45, g: 74, b: 277},
    {r: 250, g: 255, b: 89},
    {r: 255, g: 104, b: 248},
    {r: 44, g: 209, b: 252},
    {r: 54, g: 233, b: 84},
];

class App {
    constructor() {
        if (window.innerWidth <= 1024) {
            return;
        }
        
        this.canvas = document.createElement('canvas');
        this.parent = document.querySelector("#gradient_bg");

        this.parent.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

        this.totalParticles = 10;
        this.particles = [];
        this.maxRadius = 1500;
        this.minRadius = 800;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
        this.createParticles();

        window.requestAnimationFrame(this.animate.bind(this));

        this.scrollElement = document.documentElement;
        this.nav = document.querySelector('nav');
    
        window.addEventListener('scroll', this.scroll.bind(this), false);
        this.scroll();
    }

    resize() {
        this.stageWidth = 1920;
        this.stageHeight = 1080;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.ctx.globalCompositeOperation = 'saturation';
    }

    createParticles() {
        let curColor = 0;
        this.particles = [];

        for (let i = 0; i < this.totalParticles; i++) {
            const item = new GlowParticle(
                Math.random() * this.stageWidth,
                Math.random() * this.stageHeight,
                Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
                COLORS[curColor]
            );
            
            if (++curColor >= COLORS.length) {
                curColor = 0;
            }

            this.particles[i] = item;
        }
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        for (let i = 0; i < this.totalParticles; i++) {
            const item = this.particles[i];
            item.animate(this.ctx, this.stageWidth, this.stageHeight);
        }
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
