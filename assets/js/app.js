window.onload = () => {
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  var macy = Macy({
    container: ".projects",
    trueOrder: false,
    waitForImages: false,
    margin: 0,
    columns: 2,
    breakAt: {
      1200: 2,
      940: 2,
      520: 1,
      400: 1,
    },
  });
  macy.on(macy.constants.EVENT_IMAGE_COMPLETE, function (ctx) {
    setTimeout(() => {
      document.querySelector("#loader").classList.add("hidden");
    }, 1000);
  });
};
