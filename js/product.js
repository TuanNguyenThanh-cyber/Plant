// Declare variable here
const cardMenuBtn = document.querySelectorAll(".card__menu--btn");
const cardMenuIcon = document.querySelectorAll(".card__menu--icon");

// Card (NEW ARRIVALS)
cardMenuBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const clicked = e.target.closest(".card__menu--btn");

    if (!clicked) return;

    //   Remove active classes
    cardMenuBtn.forEach((btn) => {
      btn.classList.remove("card__menu--btn__active");
      btn.style.pointerEvents = "auto";
    });
    cardMenuIcon.forEach((icon) => icon.classList.remove("card__menu--icon__active"));

    // Active btn and icon
    clicked.classList.add("card__menu--btn__active");
    clicked.children[0].classList.add("card__menu--icon__active");

    //   Disable hover
    clicked.style.pointerEvents = "none";
  });
});
