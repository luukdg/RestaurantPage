import homePage from "../img/homePage.jpg";

export async function homePageContent() {
  await import("../styling/home-styling.css");

  const content = document.getElementById("content");

  const textWrap = document.createElement("div");
  const imageWrap = document.createElement("div");
  const wrapper = document.createElement("div");
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  const p5 = document.createElement("p");
  const img = document.createElement("img");
  img.src = homePage;

  h1.textContent = "Welcome to ";
  p1.textContent = "Where legends are served.";
  p2.textContent =
    "At Odin’s Bar, every meal is a feast worthy of the gods. Inspired by the strength of the North and the warmth of a shared fire, we bring together bold flavors, fresh ingredients, and hearty portions that satisfy both body and spirit.";
  p3.textContent =
    "Our chefs craft each dish with care, combining traditional Nordic recipes with modern culinary twists. From savory roasts to delicate pastries, every bite tells a story of flavor and craftsmanship.";
  p4.textContent =
    "Whether you’re here for a casual lunch, a festive dinner, or a family gathering, Odin’s Table offers an experience that nourishes both body and soul.";
  p5.textContent =
    "Join us and immerse yourself in the warmth, camaraderie, and legend-inspired atmosphere of our great hall.";

  div.id = "home-page";
  h1.id = "home-title";
  wrapper.id = "home-wrapper";
  img.id = "home-image";

  content.appendChild(div);
  div.appendChild(h1);
  div.appendChild(wrapper);
  wrapper.appendChild(textWrap);
  wrapper.appendChild(imageWrap);
  textWrap.appendChild(p1);
  textWrap.appendChild(p2);
  textWrap.appendChild(p3);
  textWrap.appendChild(p4);
  textWrap.appendChild(p5);
  imageWrap.appendChild(img);
}
