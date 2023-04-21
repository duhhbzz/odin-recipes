const menuButton = document.getElementById("menu-btd");
const navigation = document.querySelector("nav");
const closeButton = document.getElementById("close-menu");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("active");
});

closeButton.addEventListener("click", (event) => {
  event.preventDefault();
  navigation.classList.remove("active");
});

