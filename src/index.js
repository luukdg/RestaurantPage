import { homePageContent } from "./modules/home";
import { menuPageContent } from "./modules/menu";
import { aboutPageContent } from "./modules/about";
import "./styling/styles.css";

let moduleChecker = 3; // 1 = Home // 2 = Menu // 3 = About
homePageContent(); // Loading the home page first

// DOM selectors
const content = document.getElementById("content");
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

// Loads the home content into the DOM
homeButton.addEventListener("click", () => {
  if (moduleChecker !== 1) {
    content.innerHTML = "";
    homePageContent();
    moduleChecker = 1;
  } else {
    // do nothing
  }
});

// Loads the menu content into the DOM
menuButton.addEventListener("click", () => {
  if (moduleChecker !== 2) {
    content.innerHTML = "";
    menuPageContent();
    moduleChecker = 2;
  } else {
    // do nothing
  }
});

// Loads the about content into the DOM
aboutButton.addEventListener("click", () => {
  if (moduleChecker !== 3) {
    content.innerHTML = "";
    aboutPageContent();
    moduleChecker = 3;
  } else {
    // do nothing
  }
});
