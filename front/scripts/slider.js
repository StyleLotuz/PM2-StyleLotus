const sliderAnimation = () => {
  const sliderInner = document.querySelector(".slider--inner");
  let sliderIndex = 0;

  let images = sliderInner.querySelectorAll("img");

  setInterval(() => {
    let percentage = sliderIndex * -100;
    sliderInner.style.transform = "translateX(" + percentage + "%)";
    sliderIndex++;
    if (sliderIndex > images.length - 1) {
      sliderIndex = 0;
    }
  }, 5000);
};


module.exports = sliderAnimation