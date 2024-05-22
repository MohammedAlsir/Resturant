const menuIcon = document.getElementById("menu-icon");
const navItems = document.getElementById("nav-items");
const closeNav = document.getElementById("close-nav");
const navLink = document.querySelectorAll(".nav__link");

menuIcon.addEventListener("click", () => {
  navItems.classList.remove("hidden");
});

closeNav.addEventListener("click", () => {
  navItems.classList.add("hidden");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navItems.classList.add("hidden");
  });
});

const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll("ul li.item_wrap");
const food = document.querySelectorAll("ul li.food");
const snack = document.querySelectorAll("ul li.snack");
const beverage = document.querySelectorAll("ul li.beverage");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    // Remove active class
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tab.classList.add("active");

    const tabval = tab.getAttribute("data-tabs");

    all.forEach((e) => {
      e.style.display = "none";
    });

    if (tabval == "food") {
      food.forEach((e) => {
        e.style.display = "block";
      });
    } else if (tabval == "snack") {
      snack.forEach((e) => {
        e.style.display = "block";
      });
    } else if (tabval == "beverage") {
      beverage.forEach((e) => {
        e.style.display = "block";
      });
    } else {
      all.forEach((e) => {
        e.style.display = "block";
      });
    }
  });
}); //end of tab

// scroll
window.addEventListener("scroll", (e) => {
  const scrollButton = document.getElementById("scroll-up");
  if (scrollY > 250) {
    scrollButton.classList.remove("hidden");
    scrollButton.classList.add("d-block");
  } else {
    scrollButton.classList.add("hidden");
    scrollButton.classList.remove("d-block");
  }
});

// scroll ===> border botton in header
window.addEventListener("scroll", (e) => {
  const header = document.getElementById("header");
  if (scrollY > 50) {
    header.classList.add("shadow-sm", "shadow-indigo-500");
  } else {
    header.classList.remove("shadow-sm", "shadow-indigo-500");
  }
});

// dark Mode
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode")) {
  mode(localStorage.getItem("mode"));
}

themeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") === "dark") {
    // mode(set , remove)
    mode("light", "dark");
  } else {
    mode("dark", "light");
  }
});

function mode(mode, oldMode) {
  // console.log("ssss");
  if (mode === "dark") {
    html.classList.remove(oldMode);
    html.classList.add(mode);
    themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mode", mode);
  } else {
    html.classList.remove(oldMode);
    html.classList.add(mode);

    themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode", mode);
  }
}

//Scroll section active link

function activeLink() {
  const sections = document.querySelectorAll("section");
  const navLink = document.querySelectorAll(".nav__link");

  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLink.forEach((link) => {
    link.classList.remove("text-indigo-950");
    if (link.href.includes(current)) {
      link.classList.add("text-indigo-950");
    }
  });
}

window.addEventListener("scroll", activeLink);

// ScrollReveal

const sr = ScrollReveal({
  origin: "left",
  distance: "60px",
  duration: 2500,
  delay: 200,
  // reset: true,
});

sr.reveal(".home_img");
sr.reveal(".home_content");

sr.reveal(".cat_1", { origin: "top", delay: 300 });
sr.reveal(".cat_2", { origin: "top", delay: 300 });
sr.reveal(".cat_3", { origin: "top", delay: 300 });

sr.reveal(".promo_1", { origin: "left" });
sr.reveal(".promo_2", { origin: "left" });

sr.reveal(".about_img", { origin: "bottom" });
sr.reveal(".about_content", { origin: "top" });

sr.reveal(".menu__title", { origin: "left" });
sr.reveal(".menu__items", { origin: "left", delay: 500 });

sr.reveal(".customer__review", { origin: "top" });

// sr.reveal(".footer");
