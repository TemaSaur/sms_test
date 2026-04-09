// Comprehensive functionality test script
console.log("=== Functionality Test Suite ===");

// Test 1: Calendar Section
console.log("\n1. Testing Calendar Section:");
const calendarSection = document.querySelector("#calendar");
if (calendarSection) {
  const filterButtons = Array.from(calendarSection.querySelectorAll("[data-calendar-filter]"));
  const cards = Array.from(calendarSection.querySelectorAll("[data-calendar-type]"));
  
  console.log(`  Filter buttons found: ${filterButtons.length}`);
  console.log(`  Calendar cards found: ${cards.length}`);
  
  // Test filtering
  filterButtons.forEach(btn => {
    const filter = btn.getAttribute("data-calendar-filter");
    console.log(`  Filter button: ${filter}`);
  });
  
  // Test card types
  cards.forEach((card, i) => {
    console.log(`  Card ${i}: type=${card.dataset.calendarType}, id=${card.dataset.calendarId}`);
  });
} else {
  console.log("  Calendar section not found");
}

// Test 2: FAQ Section
console.log("\n2. Testing FAQ Section:");
const faqSection = document.querySelector("#faq");
if (faqSection) {
  const filterButtons = Array.from(faqSection.querySelectorAll("[data-faq-category]"));
  const accordionItems = Array.from(faqSection.querySelectorAll("[data-faq-item]"));
  const triggers = Array.from(faqSection.querySelectorAll("[data-faq-trigger]"));
  
  console.log(`  FAQ filter buttons: ${filterButtons.length}`);
  console.log(`  FAQ accordion items: ${accordionItems.length}`);
  console.log(`  FAQ triggers: ${triggers.length}`);
  
  // Test accordion functionality
  triggers.forEach((trigger, i) => {
    console.log(`  Trigger ${i}: aria-expanded=${trigger.getAttribute('aria-expanded')}`);
  });
} else {
  console.log("  FAQ section not found");
}

// Test 3: Community Section
console.log("\n3. Testing Community Section:");
const communitySection = document.querySelector("#community");
if (communitySection) {
  const tabButtons = Array.from(communitySection.querySelectorAll("[data-community-tab]"));
  const groupsPanel = communitySection.querySelector("[data-community-groups]");
  const boardPanel = communitySection.querySelector("[data-community-board]");
  
  console.log(`  Community tab buttons: ${tabButtons.length}`);
  console.log(`  Groups panel found: ${!!groupsPanel}`);
  console.log(`  Board panel found: ${!!boardPanel}`);
  
  tabButtons.forEach((btn, i) => {
    const tab = btn.getAttribute("data-community-tab");
    console.log(`  Tab ${i}: ${tab}, aria-selected=${btn.getAttribute('aria-selected')}`);
  });
} else {
  console.log("  Community section not found");
}

// Test 4: Courses Section
console.log("\n4. Testing Courses Section:");
const coursesSection = document.querySelector("#courses");
if (coursesSection) {
  const filterButtons = Array.from(coursesSection.querySelectorAll("[data-courses-category]"));
  const coursesGrid = coursesSection.querySelector("[data-courses-grid]");
  const courseCards = coursesGrid ? coursesGrid.querySelectorAll("[data-course-id]") : [];
  
  console.log(`  Courses filter buttons: ${filterButtons.length}`);
  console.log(`  Courses grid found: ${!!coursesGrid}`);
  console.log(`  Course cards found: ${courseCards.length}`);
  
  filterButtons.forEach((btn, i) => {
    const category = btn.getAttribute("data-courses-category");
    console.log(`  Filter ${i}: ${category}, aria-selected=${btn.getAttribute('aria-selected')}`);
  });
} else {
  console.log("  Courses section not found");
}

// Test 5: Psych Support Section
console.log("\n5. Testing Psych Support Section:");
const psychSection = document.querySelector("#psych-support");
if (psychSection) {
  const tabButtons = Array.from(psychSection.querySelectorAll("[data-psych-tab]"));
  const contentPanel = psychSection.querySelector("[data-psych-content]");
  const bookingButtons = psychSection.querySelectorAll("button");
  
  console.log(`  Psych tab buttons: ${tabButtons.length}`);
  console.log(`  Content panel found: ${!!contentPanel}`);
  console.log(`  Booking buttons found: ${bookingButtons.length}`);
  
  tabButtons.forEach((btn, i) => {
    const tab = btn.getAttribute("data-psych-tab");
    console.log(`  Tab ${i}: ${tab}`);
  });
} else {
  console.log("  Psych support section not found");
}

// Test 6: Calculator Section
console.log("\n6. Testing Calculator Section:");
const calculatorSection = document.querySelector("#calculator");
if (calculatorSection) {
  const regionSelect = calculatorSection.querySelector("[data-calc-region]");
  const childrenValue = calculatorSection.querySelector("[data-calc-children-value]");
  const housingYes = calculatorSection.querySelector("[data-calc-housing-yes]");
  const housingNo = calculatorSection.querySelector("[data-calc-housing-no]");
  const total = calculatorSection.querySelector("[data-calc-total]");
  
  console.log(`  Region select: ${!!regionSelect}`);
  console.log(`  Children value: ${!!childrenValue}`);
  console.log(`  Housing yes: ${!!housingYes}`);
  console.log(`  Housing no: ${!!housingNo}`);
  console.log(`  Total display: ${!!total}`);
  console.log(`  Current total: ${total ? total.textContent.trim() : 'N/A'}`);
} else {
  console.log("  Calculator section not found");
}

console.log("\n=== Test Complete ===");
