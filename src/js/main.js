const slideDownElems = document.querySelectorAll(".down");
const slideRightElems = document.querySelectorAll(".left");
const slideLeftElems = document.querySelectorAll(".right");

const slideUpObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((elem) => {
      if (elem.isIntersecting) {
        elem.target.classList.add("slideUp");
        slideUpObserver.unobserve(elem.target);
      }
    });
  },
  { threshold: 0.4 }
);

const slideRightObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((elem) => {
      if (elem.isIntersecting) {
        elem.target.classList.add("slideRight");
        slideRightObserver.unobserve(elem.target);
      }
    });
  },
  { threshold: 0.4 }
);
const slideLeftObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((elem) => {
      if (elem.isIntersecting) {
        elem.target.classList.add("slideLeft");
        slideLeftObserver.unobserve(elem.target);
      }
    });
  },
  { threshold: 0.4 }
);

slideDownElems.forEach((elem) => slideUpObserver.observe(elem));
slideRightElems.forEach((elem) => slideRightObserver.observe(elem));
slideLeftElems.forEach((elem) => slideLeftObserver.observe(elem));

const menuButton = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".close");
const modal = document.querySelector(".modal");

menuButton.addEventListener("click", () => {
  modal.showModal();
});

closeMenu.addEventListener("click", () => modal.close());
