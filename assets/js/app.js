window.onload = () => {
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const cards = document.querySelectorAll(".card .card-image");
  if (cards.length > 0) {
    cards.forEach((card) => {
      const fullImage = card.querySelector(".full-img");


      card.addEventListener("mousemove", (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const height = card.offsetHeight;
        const percentage = 100 / height * y;
        const oneToHundred = percentage / 100;
        
        const fullImage_height = fullImage.offsetHeight - height;
        const px = oneToHundred * fullImage_height;
        fullImage.style.transform = "translateY(-" + px + "px)";
      });
      card.addEventListener("mouseleave", (e) => {
        fullImage.style.transform = "translateY(0)";
      });
    });
  }
};


