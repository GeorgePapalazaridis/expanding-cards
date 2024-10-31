function setupEventListeners() {
  const panels = document.querySelectorAll(".panel");
  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      removeActiveClasses();
      panel.classList.add("active");
    });
  });
}

function removeActiveClasses() {
  const panels = document.querySelectorAll(".panel");
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// Check if the environment is Node (for tests) or browser
if (typeof module !== "undefined" && module.exports) {
  // Export the setup function and removeActiveClasses for testing
  module.exports = { setupEventListeners, removeActiveClasses };
}

setupEventListeners();
