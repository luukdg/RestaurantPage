export async function aboutPageContent() {
  await import("../styling/about-styling.css");

  const content = document.getElementById("content");

  const header1 = document.createElement("h1");
  const para1 = document.createElement("p");
  const header2 = document.createElement("h2");
  const para2 = document.createElement("p");
  const header3 = document.createElement("h2");
  const para3 = document.createElement("p");
  const para4 = document.createElement("p");
  const para5 = document.createElement("p");
  const header4 = document.createElement("h2");
  const para6 = document.createElement("p");

  header1.textContent = "About ";
  para1.textContent =
    "Step inside and be welcomed like kin. With warm wood, glowing firelight, and the atmosphere of a great hall, Odin’s Table is the perfect place for gatherings, celebrations, and nights to remember.";
  header2.textContent = "Our Story";
  para2.textContent =
    "Odin’s Table was founded to bring the spirit of Nordic feasts to modern diners. Our mission is simple: combine quality ingredients, timeless recipes, and a legendary atmosphere to create memorable dining experiences. From humble beginnings to a full-fledged hall of flavor, our journey has been guided by the values of hospitality, craftsmanship, and a passion for great food.";
  header3.textContent = "For the Developers Among Us";
  para3.textContent = "At Odin’s Table, our code is simple:";
  para4.textContent = "<code>while (hungry) { eat(); }</code>";
  para5.textContent =
    "Don’t worry—our servers never timeout, and every dish is deployed straight to production, bug-free and delicious.";
  header4.textContent = "Our Promise";
  para6.textContent =
    "At Odin’s Table, we believe dining should be more than a meal—it should be an experience. Every plate is crafted with care, every guest treated with honor. Join us, and dine like a legend. We welcome adventurers, families, friends, and developers alike to our great hall. Every visit is an opportunity to celebrate good food, good company, and unforgettable memories.";

  const wrapper = document.createElement("div");
  wrapper.id = "about-wrapper";
  header1.id = "about-title";
  para4.id = "code-joke";

  wrapper.appendChild(header1);
  wrapper.appendChild(para1);
  wrapper.appendChild(header2);
  wrapper.appendChild(para2);
  wrapper.appendChild(header3);
  wrapper.appendChild(para3);
  wrapper.appendChild(para4);
  wrapper.appendChild(para5);
  wrapper.appendChild(header4);
  wrapper.appendChild(para6);

  content.appendChild(wrapper);
}
