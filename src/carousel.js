const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(preferes-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach(scroller => {
    scroller.setAttribute("data-animated", true);
  })
}
