// Smooth scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
// Add this JavaScript to your script.js file or within a <script> tag in your HTML

// Get all the accordion item containers
const accordionItems = document.querySelectorAll('.accordion-item');

// Add event listeners to the accordion item containers
accordionItems.forEach((item) => {
  const toggle = item.querySelector('.accordion-item-toggle');
  const content = item.querySelector('.accordion-item-content');

  toggle.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
      content.style.maxHeight = null;
    } else {
      closeAccordionItems();
      item.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

// Function to close all accordion items
function closeAccordionItems() {
  accordionItems.forEach((item) => {
    const content = item.querySelector('.accordion-item-content');
    item.classList.remove('active');
    content.style.maxHeight = null;
  });
}
