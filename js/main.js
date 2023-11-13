document.addEventListener("DOMContentLoaded", () => {
  const main = () => {
    const heightCalculate = () => {
      const navigation = document.querySelector('.navigation__inner');
      const imgFluidWrapper = document.querySelector('.img-fluid-wrapper');

      const height = +imgFluidWrapper.offsetHeight + +getComputedStyle(imgFluidWrapper).marginBottom.slice(0, -2);

      navigation.style.minHeight = `calc(100vh - ${height}px)`
    }

    heightCalculate();
    window.addEventListener('resize', heightCalculate)

  }

  main();
})