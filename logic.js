const closeButton = document.querySelector(".close-nav");
const openButton = document.querySelector(".open-nav");
const nav = document.querySelector(".nav");

closeButton.addEventListener("click", () => {
  nav.classList.remove("navigation-open");
});

openButton.addEventListener("click", () => {
  nav.classList.add("navigation-open");
});

function handleClick(e) {
  console.log(e);
  alert(
    "This form is not currently functioning at the moment! Please send me an email at suarez9093@hotmail.com."
  );
}
