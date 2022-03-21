// Variable
const allSections = document.querySelectorAll(".section");

// Function
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section__hidden");

  observer.unobserve(entry.target);
};

// Animation with section
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section__hidden");
});
