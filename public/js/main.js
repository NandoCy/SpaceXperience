const btnMenu = document.getElementById("btn-menu");
const menu = document.querySelector("aside");
btnMenu.addEventListener("click", () => {
  const visible = menu.style.transform === "translateX(0%)";
  menu.style.transform = visible ? "translateX(100%)" : "translateX(0%)";
});
