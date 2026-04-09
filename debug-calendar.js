// Debug calendar functionality
console.log("=== Calendar Debug ===");

// Check if calendar section exists
const calendarSection = document.querySelector("#calendar");
console.log("Calendar section found:", !!calendarSection);

if (calendarSection) {
  // Check filter buttons
  const filterButtons = Array.from(calendarSection.querySelectorAll("[data-calendar-filter]"));
  console.log("Filter buttons found:", filterButtons.length);
  filterButtons.forEach((btn, i) => {
    console.log(`Filter button ${i}:`, btn.textContent.trim(), btn.getAttribute("data-calendar-filter"));
  });

  // Check cards with data-calendar-type
  const cards = Array.from(calendarSection.querySelectorAll("[data-calendar-type]"));
  console.log("Cards with data-calendar-type found:", cards.length);
  cards.forEach((card, i) => {
    console.log(`Card ${i}:`, card.dataset.calendarType, card.dataset.calendarId);
    
    // Check for register buttons in each card
    const buttons = card.querySelectorAll("button");
    console.log(`  Buttons in card ${i}:`, buttons.length);
    buttons.forEach((btn, j) => {
      console.log(`    Button ${j}:`, btn.textContent.trim());
    });
    
    // Check getRegisterButton logic
    const registerBtn = Array.from(buttons).find(btn => 
      btn.textContent && btn.textContent.includes("Zaregistrirovatsya")
    );
    console.log(`  Register button found:`, !!registerBtn);
  });
}
