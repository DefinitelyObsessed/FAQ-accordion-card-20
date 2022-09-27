const allDetails = document.querySelectorAll('details');
const boxImage = document.querySelector('.box-image');

allDetails.forEach((targetDetail) => {

  targetDetail.addEventListener("click", () => {

    allDetails.forEach((detail) => {

      if (detail !== targetDetail) {

        detail.removeAttribute("open");
      }
    });
  });
});



allDetails.forEach((targetDetail) => {

  targetDetail.addEventListener("mouseover", () => {

    boxImage.classList.add("box-image-translate");
  });

  targetDetail.addEventListener("mouseleave", () => {

    boxImage.classList.remove("box-image-translate");
  });
});
