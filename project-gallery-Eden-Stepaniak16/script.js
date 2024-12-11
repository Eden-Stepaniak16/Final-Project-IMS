// This main script.js file handles loading of the individual JavaScript files for each page.
// It also updates the class name on the #content-area div.

// --- DO NOT CHANGE ANYTHING IN THIS FILE ---

document.body.addEventListener("htmx:afterSwap", (event) => {
  const contentArea = document.querySelector("main");
  const requestId = event.detail.requestConfig.elt.id;
  if (requestId === "home-load" || requestId === "body-load") {
    contentArea.id = "home-content";
  } else if (requestId === "project1-load") {
    contentArea.id = "project1-content";
    initializeProject1();
  } else if (requestId === "project2-load") {
    contentArea.id = "project2-content";
    initializeProject2();
  } else if (requestId === "project3-load") {
    contentArea.id = "project3-content";
    initializeProject3();
  }
});

// --- DO NOT CHANGE ANYTHING IN THIS FILE ---
