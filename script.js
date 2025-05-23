document.addEventListener("DOMContentLoaded", function () {
  // ACTIVE STATE UNTUK NAV-ITEM
  const navItems = document.querySelectorAll(".nav-item");
  if (navItems.length > 0) {
    navItems.forEach((item) => {
      item.addEventListener("click", function () {
        navItems.forEach((navItem) => navItem.classList.remove("active"));
        this.classList.add("active");
      });
    });

    const currentPage = window.location.pathname.split("/").pop();
    navItems.forEach((item) => {
      const link = item.getAttribute("href");
      if (link === currentPage || link === `./${currentPage}`) {
        item.classList.add("active");
      }
    });
  }

  // ACTIVE STATE UNTUK MG CARE SECTION
  const ssItems = document.querySelectorAll(".ss-1 .ss-2");
  if (ssItems.length > 0) {
    ssItems.forEach((item) => {
      item.addEventListener("click", function () {
        ssItems.forEach((ssItem) => ssItem.classList.remove("active"));
        this.classList.add("active");
      });
    });

    const currentPage = window.location.pathname.split("/").pop();
    ssItems.forEach((item) => {
      const link = item.getAttribute("href");
      if (link === currentPage || link === `./${currentPage}`) {
        item.classList.add("active");
      }
    });
  }

  // TOGGLE NAVIGATION MOBILE
  const navToggle = document.getElementById("nav-toggle");
  const navList = document.getElementById("nav-list");
  const toggleIcon = navToggle?.querySelector("i");

  if (navToggle && navList && toggleIcon) {
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("active");
      toggleIcon.classList.toggle("fa-bars");
      toggleIcon.classList.toggle("fa-xmark");
    });
  }
});

// VIDEO MUTED
document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".hero-video video");

  if (video) {
    video.addEventListener("click", function () {
      video.muted = !video.muted;
    });
  } else {
    console.log("Video tidak ditemukan.");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // ===== ACCORDION GASOLINE / EV (Accordion 3) =====
  const gasolineTab = document.getElementById("tab-gn");
  const evTab = document.getElementById("tab-ev");
  const gasolineServices = document.getElementById("gasoline-services");
  const evServices = document.getElementById("ev-services");

  if (gasolineTab && evTab && gasolineServices && evServices) {
    function setTabActive(activeTab, inactiveTab, showEl, hideEl) {
      activeTab.classList.add("active");
      inactiveTab.classList.remove("active");

      showEl.style.display = "flex";
      hideEl.style.display = "none";
    }

    gasolineTab.addEventListener("click", () =>
      setTabActive(gasolineTab, evTab, gasolineServices, evServices)
    );

    evTab.addEventListener("click", () =>
      setTabActive(evTab, gasolineTab, evServices, gasolineServices)
    );

    // Optional: Set default
    setTabActive(gasolineTab, evTab, gasolineServices, evServices);
  }

  // ===== GENERIC ACCORDION TOGGLE FUNCTION =====
  function setupAccordion(
    containerSelector,
    headerSelector,
    iconSelector,
    contentSelector
  ) {
    const accordions = document.querySelectorAll(containerSelector);

    accordions.forEach((accordion) => {
      const header = accordion.querySelector(headerSelector);
      const icon = accordion.querySelector(iconSelector);
      const content = accordion.querySelector(contentSelector);

      if (!header || !icon || !content) return;

      content.style.display = "none";

      header.addEventListener("click", () => {
        const isActive = accordion.classList.contains("active");

        accordion.classList.toggle("active");
        content.style.display = isActive ? "none" : "block";
        icon.classList.toggle("fa-chevron-up", !isActive);
        icon.classList.toggle("fa-chevron-down", isActive);
      });
    });
  }

  // Setup for SP/EV accordion (Accordion 2)
  setupAccordion(
    ".sp-8, .spe-8",
    ".sp-9, .spe-9",
    ".sp-11, .spe-11",
    ".sp-12, .spe-12"
  );

  // ===== TAB SYSTEM FOR ACCORDION 2 =====
  const tabActivate = document.getElementById("tab-activate");
  const tabIgnite = document.getElementById("tab-ignite");
  const tabMagnify = document.getElementById("tab-magnify");

  const acc1 = document.getElementById("accordion-1");
  const acc2 = document.getElementById("accordion-2");
  const acc3 = document.getElementById("accordion-3");

  if (tabActivate && tabIgnite && tabMagnify && acc1 && acc2 && acc3) {
    const tabList = [tabActivate, tabIgnite, tabMagnify];
    const accList = [acc1, acc2, acc3];

    function setTabAccordion(activeTab, activeAcc) {
      tabList.forEach((tab) => tab.classList.remove("active"));
      accList.forEach((acc) => (acc.style.display = "none"));

      activeTab.classList.add("active");
      activeAcc.style.display = "flex";
    }

    tabActivate.addEventListener("click", () =>
      setTabAccordion(tabActivate, acc1)
    );
    tabIgnite.addEventListener("click", () => setTabAccordion(tabIgnite, acc2));
    tabMagnify.addEventListener("click", () =>
      setTabAccordion(tabMagnify, acc3)
    );

    // Default show
    setTabAccordion(tabActivate, acc1);
  }

  // ===== GASOLINE / EV Accordion 1 =====
  // Optional: works if you're using the original toggleAccordion function for ss-8
  window.toggleAccordion = function (header) {
    const item = header.parentElement;
    const icon = header.querySelector(".ac-7");

    item.classList.toggle("active");

    const content = item.querySelector(".ss-10") || item.querySelector(".ac-8");
    if (content) {
      const isActive = item.classList.contains("active");
      content.style.display = isActive ? "block" : "none";
      icon.classList.toggle("fa-chevron-up", isActive);
      icon.classList.toggle("fa-chevron-down", !isActive);
    }
  };
});

// COLOR
document.addEventListener("DOMContentLoaded", () => {
  const carImage = document.getElementById("carImage");
  const colorBoxes = document.querySelectorAll(".color-box");
  const colorName = document.getElementById("colorName");

  const colorMap = {
    // MG 4 EV
    "MG-1-Blue": "Brighton Blue",
    "MG-1-White": "Arctic White",
    "MG-1-Black": "Black Knight",
    "MG-1-Grey": "Metal Ash Grey",
    "MG-1-Red": "Scarlet Red",

    // NEW MG ZS EV
    "MG-2-Blue": "Battersea Blue",
    "MG-2-White": "Arctic White",
    "MG-2-Black": "Black Pearl",
    "MG-2-Grey": "Silver",
    "MG-2-Red": "Dynamic Red",

    // MG VS Super Hybrid
    "MG-3-Green": "Mineral Green",
    "MG-3-White": "Arctic White",
    "MG-3-Black": "Black Knight",
    "MG-3-Grey": "Metal Ash Grey",
    "MG-3-Red": "Scarlet Red",

    // MNEW MG ZS
    "MG-4-White": "Arctic White",
    "MG-4-Black": "Black Knight",
    "MG-4-Grey": "Metal Ash Grey",
    "MG-4-Red": "Scarlet Red",

    // MG 5 GT
    "MG-5-Yellow": "Light Up Yellow",
    "MG-5-White": "Arctic White",
    "MG-5-Black": "Black Knight",
    "MG-5-Grey": "Metal Ash Grey",
    "MG-5-Red": "Scarlet Red",

    // NEW MG HS
    "MG-6-White": "Arctic White",
    "MG-6-Black": "Black Knight",
    "MG-6-Grey": "Metal Ash Grey",
    "MG-6-Red": "Scarlet Red",
  };

  colorBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      const image = box.getAttribute("data-image");
      carImage.src = image;

      colorBoxes.forEach((b) => b.classList.remove("active"));
      box.classList.add("active");

      const colorKey = Object.keys(colorMap).find((key) => image.includes(key));

      colorName.textContent = colorKey ? colorMap[colorKey] : "";
    });
  });
});

// Tombol WhatsApp
(function () {
  const whatsappBtn = document.getElementById("whatsappBtn");
  const whatsappPopup = document.getElementById("whatsappPopup");

  if (whatsappBtn && whatsappPopup) {
    whatsappBtn.addEventListener("click", function (event) {
      event.stopPropagation();

      if (
        whatsappPopup.style.display === "none" ||
        whatsappPopup.style.display === ""
      ) {
        whatsappPopup.style.display = "block";
      } else {
        whatsappPopup.style.display = "none";
      }

      this.classList.add("hovered");
    });

    document.addEventListener("click", function (event) {
      if (
        !whatsappBtn.contains(event.target) &&
        !whatsappPopup.contains(event.target)
      ) {
        whatsappPopup.style.display = "none";
        whatsappBtn.classList.remove("hovered");
      }
    });
  }
})();

// DARK MODE
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.querySelector(".ind-6 i");
  const currentStatus = localStorage.getItem("themeStatus");

  function setSunMode() {
    themeToggle.classList.remove("fa-moon");
    themeToggle.classList.add("fa-sun");
    document.body.classList.remove("dark");
    localStorage.setItem("themeStatus", "sun");
  }

  function setMoonMode() {
    themeToggle.classList.remove("fa-sun");
    themeToggle.classList.add("fa-moon");
    document.body.classList.add("dark");
    localStorage.setItem("themeStatus", "moon");
  }

  // Set tema saat load
  if (currentStatus === "moon") {
    setMoonMode();
  } else {
    setSunMode();
  }

  // Event klik
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      if (themeToggle.classList.contains("fa-moon")) {
        setSunMode();
      } else {
        setMoonMode();
      }
    });
  }
});
