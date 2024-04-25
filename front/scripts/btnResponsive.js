const menuToggle = () => {
  const toggleButton = document.getElementById("toggleMenu");
  const floatingMenu = document.getElementById("floatingMenu");

  toggleButton.addEventListener("click", () => {
    floatingMenu.classList.toggle("show");
  });
};

module.exports = menuToggle;
