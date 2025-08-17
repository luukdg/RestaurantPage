export function menuPageContent() {
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

  header1.textContent = "Our Menu";
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

  content.appendChild(header1);
  content.appendChild(para1);
  content.appendChild(header2);
  content.appendChild(para2);
  content.appendChild(header3);
  content.appendChild(para3);
  content.appendChild(header4);
  content.appendChild(para4);
  content.appendChild(header5);
  content.appendChild(para5);
}
