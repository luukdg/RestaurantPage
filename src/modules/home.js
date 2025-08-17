export function homePageContent() {
  const content = document.getElementById("content");

  const h1 = document.createElement("h1");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  const p5 = document.createElement("p");

  h1.textContent = "Welcome to Odin’s Table";
  p1.textContent = "Where legends are served.";
  p2.textContent =
    "At Odin’s Table, every meal is a feast worthy of the gods. Inspired by the strength of the North and the warmth of a shared fire, we bring together bold flavors, fresh ingredients, and hearty portions that satisfy both body and spirit.";
  p3.textContent =
    "Our chefs craft each dish with care, combining traditional Nordic recipes with modern culinary twists. From savory roasts to delicate pastries, every bite tells a story of flavor and craftsmanship.";
  p4.textContent =
    "Whether you’re here for a casual lunch, a festive dinner, or a family gathering, Odin’s Table offers an experience that nourishes both body and soul.";
  p5.textContent =
    "Join us and immerse yourself in the warmth, camaraderie, and legend-inspired atmosphere of our great hall.";

  content.appendChild(h1);
  content.appendChild(p1);
  content.appendChild(p2);
  content.appendChild(p3);
  content.appendChild(p4);
  content.appendChild(p5);
}
