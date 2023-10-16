{
  const onChangeBorderImage = () => {
    const headerImage = document.querySelector(".js-headerImage");
    const nextBorderName = document.querySelector(".js-nextBorderName");

    headerImage.classList.toggle("header__image--rounded");
    nextBorderName.innerText = headerImage.classList.contains(
      "header__image--rounded"
    )
      ? "Zaokrąglone rogi"
      : "Zaokrąglij rogi";
  };

  const init = () => {
    const toRoundImgButton = document.querySelector(".js-toRoundImageButton");
    toRoundImgButton.addEventListener("click", onChangeBorderImage);
  };

  init();
}
