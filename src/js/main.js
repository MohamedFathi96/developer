const slideDownElems = document.querySelectorAll(".down");
const slideRightElems = document.querySelectorAll(".left");
const slideLeftElems = document.querySelectorAll(".right");

const slideUpObserver = new IntersectionObserver((entries) => {
  entries.forEach((elem) => {
    if (elem.isIntersecting) {
      elem.target.classList.add("slideUp");
      slideUpObserver.unobserve(elem.target);
    }
  });
});

const slideRightObserver = new IntersectionObserver((entries) => {
  entries.forEach((elem) => {
    if (elem.isIntersecting) {
      elem.target.classList.add("slideRight");
      slideRightObserver.unobserve(elem.target);
    }
  });
});
const slideLeftObserver = new IntersectionObserver((entries) => {
  entries.forEach((elem) => {
    if (elem.isIntersecting) {
      elem.target.classList.add("slideLeft");
      slideLeftObserver.unobserve(elem.target);
    }
  });
});

slideDownElems.forEach((elem) => slideUpObserver.observe(elem));
slideRightElems.forEach((elem) => slideRightObserver.observe(elem));
slideLeftElems.forEach((elem) => slideLeftObserver.observe(elem));
