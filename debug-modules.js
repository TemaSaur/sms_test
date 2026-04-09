// Debug script to check if modules are properly initialized
console.log("=== Module Initialization Debug ===");

// Check if vanilla app is initialized
if (window.__familyNavigatorVanilla) {
  console.log("Vanilla app initialized:", window.__familyNavigatorVanilla);
} else {
  console.log("Vanilla app not initialized yet");
}

// Test Calendar Module
console.log("\n=== Calendar Module Test ===");
const calendarSection = document.querySelector("#calendar");
if (calendarSection) {
  console.log("Calendar section found");
  
  // Test filter buttons
  const filterButtons = Array.from(calendarSection.querySelectorAll("[data-calendar-filter]"));
  console.log(`Filter buttons: ${filterButtons.length}`);
  
  // Test cards
  const cards = Array.from(calendarSection.querySelectorAll("[data-calendar-type]"));
  console.log(`Cards with data-calendar-type: ${cards.length}`);
  
  // Test click functionality
  if (filterButtons.length > 0) {
    const onlineBtn = calendarSection.querySelector("[data-calendar-filter='online']");
    const offlineBtn = calendarSection.querySelector("[data-calendar-filter='offline']");
    const allBtn = calendarSection.querySelector("[data-calendar-filter='all']");
    
    console.log("Filter buttons found:", {
      online: !!onlineBtn,
      offline: !!offlineBtn,
      all: !!allBtn
    });
    
    // Simulate clicking online filter
    if (onlineBtn) {
      console.log("Clicking online filter...");
      onlineBtn.click();
      
      setTimeout(() => {
        const visibleCards = cards.filter(card => card.style.display !== 'none');
        console.log(`Visible cards after online filter: ${visibleCards.length}`);
        
        // Reset to all
        if (allBtn) {
          allBtn.click();
          setTimeout(() => {
            const allVisibleCards = cards.filter(card => card.style.display !== 'none');
            console.log(`Visible cards after all filter: ${allVisibleCards.length}`);
          }, 100);
        }
      }, 100);
    }
  }
} else {
  console.log("Calendar section not found");
}

// Test FAQ Module
console.log("\n=== FAQ Module Test ===");
const faqSection = document.querySelector("#faq");
if (faqSection) {
  console.log("FAQ section found");
  
  const triggers = Array.from(faqSection.querySelectorAll("[data-faq-trigger]"));
  console.log(`FAQ triggers: ${triggers.length}`);
  
  if (triggers.length > 0) {
    // Test clicking first trigger
    const firstTrigger = triggers[0];
    console.log("Testing first FAQ trigger...");
    console.log("Initial aria-expanded:", firstTrigger.getAttribute('aria-expanded'));
    
    firstTrigger.click();
    
    setTimeout(() => {
      console.log("After click aria-expanded:", firstTrigger.getAttribute('aria-expanded'));
    }, 100);
  }
} else {
  console.log("FAQ section not found");
}

console.log("\n=== Debug Complete ===");
