const toggleNavBtn = document.getElementById("toggle-nav");
const navLinks = document.getElementById("nav-links");
const hamburgerBtn = document.getElementById("hamburger-btn");
const closeBtn = document.getElementById("close");

const SHOW_NAV = "show-nav";
const HIDE = "hide";
const SHOW = "show";

toggleNavBtn.addEventListener("click", () => {
  navLinks.classList.toggle(SHOW_NAV);
  if (navLinks.classList.contains(SHOW_NAV)) {
    closeBtn.classList.remove(HIDE);
    hamburgerBtn.classList.add(HIDE);
    // document.body.classList.add("bg");
    document.body.style.overflowY = "hidden";
  } else {
    closeBtn.classList.add(HIDE);
    hamburgerBtn.classList.remove(HIDE);
    document.body.classList.remove("bg");
    document.body.style.overflowY = "scroll";
  }
});

// INTERSECTION OBSERVERS
const setup = () => {
  const options = {
    rootMargin: "0px 0px -200px 0px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target.classList);
        if (entry.target.classList.contains("hide-right")) {
          entry.target.classList.add("show-right");
        } else if (entry.target.classList.contains("hide-left")) {
          entry.target.classList.add("show-left");
        } else {
          entry.target.classList.add("show");
        }
        observer.unobserve(entry.target);
      } else {
        return;
      }
    });
  }, options);

  const paragraphs = document.querySelectorAll("p");
  const heroDetails = document.getElementById("hero-details");
  const heroImg = document.getElementById("hero-img");
  observer.observe(heroImg);
  observer.observe(heroDetails);
  paragraphs.forEach((para) => {
    observer.observe(para);
  });
};

window.addEventListener("DOMContentLoaded", setup);
