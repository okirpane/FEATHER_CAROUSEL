const load = function () {
  const slide = document.querySelector(".carousel-slide");
  const images = document.querySelectorAll(".carousel-slide img");

  const prev = document.querySelector("#carousel-prev");
  const next = document.querySelector("#carousel-next");

  let counter = 1;
  let trans;
  let timeout;
  let size = images[0].clientWidth;

  let resize = function () {
    size = images[0].clientWidth;
    slide.style.transform = `translateX(${-size * counter}px)`;
  };
  window.addEventListener(
    "resize",
    function (event) {
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }
      timeout = window.requestAnimationFrame(function () {
        // Run our functions
        resize();
      });
    },
    false
  );

  slide.style.transform = `translateX(${-size * counter}px)`;

  next.addEventListener("click", function () {
    if (counter >= images.length - 1) return;
    slide.style.transition = `transform 0.3s ease-in-out`;
    counter++;
    trans = -size * counter;
    slide.style.transform = `translateX(${trans}px)`;
  });
  prev.addEventListener("click", function () {
    if (counter <= 0) return;
    slide.style.transition = `transform 0.2s ease-in-out`;
    counter--;
    slide.style.transform = `translateX(${-size * counter}px)`;
  });
  slide.addEventListener("transitionend", function () {
    if (images[counter].id === "lastClone") {
      slide.style.transition = `none`;
      counter = images.length - 2;
      trans = -size * counter;
      slide.style.transform = `translateX(${trans}px)`;
    }
    if (images[counter].id === "firstClone") {
      slide.style.transition = `none`;
      counter = images.length - counter;
      trans = -size * counter;
      slide.style.transform = `translateX(${trans}px)`;
    }
  });
};
window.onload = load;
