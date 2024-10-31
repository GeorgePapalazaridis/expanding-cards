const { setupEventListeners, removeActiveClasses } = require("./script");

describe("Panel interactions", () => {
  let panels;

  beforeEach(() => {
    // Set up the DOM structure for each test
    document.body.innerHTML = `
      <div class="container">
        <div class="panel" style="background-image: url('img1');">
          <h3>Explore The World</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
        <div class="panel" style="background-image: url('img2');">
          <h3>Wild Forest</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
        <div class="panel" style="background-image: url('img3');">
          <h3>Sunny Beach</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
      </div>
    `;

    // Re-select panels and initialize event listeners after setting up the DOM
    panels = document.querySelectorAll(".panel");
    setupEventListeners();
  });

  test("clicking a panel adds 'active' class to it", () => {
    // Simulate a click on the first panel
    panels[0].click();

    // Expect only the first panel to have the 'active' class
    expect(panels[0].classList.contains("active")).toBe(true);
    expect(panels[1].classList.contains("active")).toBe(false);
    expect(panels[2].classList.contains("active")).toBe(false);
  });

  test("clicking a new panel removes 'active' class from previously active panel", () => {
    // Simulate clicks on the first and then the second panel
    panels[0].click();
    panels[1].click();

    // Expect only the second panel to have the 'active' class
    expect(panels[0].classList.contains("active")).toBe(false);
    expect(panels[1].classList.contains("active")).toBe(true);
    expect(panels[2].classList.contains("active")).toBe(false);
  });

  test("removeActiveClasses removes 'active' class from all panels", () => {
    // Manually add 'active' class to all panels for testing
    panels.forEach((panel) => panel.classList.add("active"));

    // Call removeActiveClasses directly
    removeActiveClasses();

    // Ensure no panel has the 'active' class
    panels.forEach((panel) => {
      expect(panel.classList.contains("active")).toBe(false);
    });
  });
});
