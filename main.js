let changeTextButton = document.querySelector(".js-toRoundImageButton");
let aboutImage = document.querySelector(".js-headerImage");

changeTextButton.addEventListener("click", () => {
  aboutImage.classList.toggle("header__image--rounded");

  changeTextButton.textContent = aboutImage.classList.contains(
    "header__image--rounded"
  )
    ? "Zaokrąglone rogi"
    : "Zaokrąglij rogi";
});
