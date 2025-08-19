import starter from "../img/starter.png";
import mainCourse from "../img/mainCourse.jpg";
import drinks from "../img/drinks.jpg";
import dessert from "../img/dessert.jpg";

export async function menuPageContent() {
  await import("../styling/menu-styling.css");

  const content = document.getElementById("content");

  const header1 = document.createElement("h1");
  const para1 = document.createElement("p");
  const header2 = document.createElement("h2");
  const para2 = document.createElement("p");
  const header3 = document.createElement("h2");
  const para3 = document.createElement("p");
  const header4 = document.createElement("h2");
  const para4 = document.createElement("p");
  const header5 = document.createElement("h2");
  const para5 = document.createElement("p");
  const imgStarter = document.createElement("img");
  const imgMainCrouse = document.createElement("img");
  const imgDrinks = document.createElement("img");
  const imgDessert = document.createElement("img");
  const menuWrapper = document.createElement("div");
  const starterWrapper = document.createElement("div");
  const mainCourseWrapper = document.createElement("div");
  const drinkWrapper = document.createElement("div");
  const dessertWrapper = document.createElement("div");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const div4 = document.createElement("div");

  imgStarter.src = starter;
  imgMainCrouse.src = mainCourse;
  imgDrinks.src = drinks;
  imgDessert.src = dessert;

  header1.textContent = "Our ";
  para1.textContent =
    "From sizzling flame-grilled meats to rustic bread and vibrant seasonal dishes, our menu honors the traditions of the past while adding a modern touch. Whether you crave a feast fit for Valhalla or a light bite worthy of Midgard, we have something for every appetite.";
  header2.textContent = "Starters";
  para2.textContent =
    "Kick off your feast with our selection of hearty starters, from smoked fish platters to freshly baked Nordic breads with herb-infused butter.";
  header3.textContent = "Main Courses";
  para3.textContent =
    "Choose from flame-grilled meats, fresh seafood, and seasonal vegetables. Each dish is prepared to perfection, balancing rich flavors with wholesome ingredients.";
  header4.textContent = "Drinks";
  para4.textContent =
    "Raise your horn! Explore a selection of craft beers, meads, and signature cocktails that celebrate the spirit of the North. Each drink is chosen to pair perfectly with our dishes and enhance the feast.";
  header5.textContent = "Desserts";
  para5.textContent =
    "End your meal with sweet treats inspired by Nordic traditions — from honey cakes to creamy custards infused with seasonal berries.";

  menuWrapper.id = "menu-wrapper";
  header1.id = "menu-title";
  imgStarter.id = "img1";
  imgMainCrouse.id = "img2";
  imgDrinks.id = "img3";
  imgDessert.id = "img4";

  content.appendChild(menuWrapper);
  menuWrapper.appendChild(header1);
  menuWrapper.appendChild(para1);

  menuWrapper.appendChild(starterWrapper);
  starterWrapper.appendChild(div1);
  div1.appendChild(header2);
  div1.appendChild(para2);
  starterWrapper.appendChild(imgStarter);

  menuWrapper.appendChild(mainCourseWrapper);
  mainCourseWrapper.appendChild(imgMainCrouse);
  mainCourseWrapper.appendChild(div2);
  div2.appendChild(header3);
  div2.appendChild(para3);

  menuWrapper.appendChild(drinkWrapper);
  drinkWrapper.appendChild(div3);
  div3.appendChild(header4);
  div3.appendChild(para4);
  drinkWrapper.appendChild(imgDrinks);

  menuWrapper.appendChild(dessertWrapper);
  dessertWrapper.appendChild(imgDessert);
  dessertWrapper.appendChild(div4);
  div4.appendChild(header5);
  div4.appendChild(para5);
}
