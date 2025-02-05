// Wait for the window to load
window.onload = function() {
    // Hide the loading screen
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
  
    // Show the home section
    const homeSection = document.getElementById('home');
    homeSection.classList.add('active');
  };
  
  const wheelButtons = document.querySelectorAll('.wheel-button');
  const sections = document.querySelectorAll('.section');
  const navWheel = document.getElementById('nav-wheel');
  
  // Create a button to toggle the navigation wheel
  const navToggleBtn = document.createElement('div');
  navToggleBtn.classList.add('nav-toggle-btn');
  navToggleBtn.innerHTML = '☰'; // Menu icon (you can use an SVG or image)
  document.body.appendChild(navToggleBtn);
  
  // No need to set display property here; CSS handles initial state
  // navToggleBtn.style.display = 'none'; // Remove this line
  
  wheelButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetSection = button.getAttribute('data-section');
      navigateToSection(targetSection);
    });
  });
  function navigateToSection(sectionId) {
    sections.forEach(section => {
      if (section.id === sectionId) {
        section.classList.add('active');
        if (sectionId === 'home') {
          // If we're on the Home section, ensure the nav wheel is visible
          navWheel.classList.remove('hide');
          navToggleBtn.classList.remove('show');
        }
      } else {
        section.classList.remove('active');
      }
    });
    if (sectionId !== 'home') {
      // Hide the navigation wheel with animation
      navWheel.classList.add('hide');
      // Show the nav toggle button after the collapse animation completes
      setTimeout(() => {
        navToggleBtn.classList.add('show');
      }, 500); // Match the duration of the CSS transition
    }
  }
  


  navToggleBtn.addEventListener('click', () => {
    // Hide the nav toggle button
    navToggleBtn.classList.remove('show');
    // Remove the 'hide' class to trigger the expand animation
    navWheel.classList.remove('hide');
  });
  
  // Custom Cursor code remains the same
  // Custom Cursor
  const cursor = document.getElementById('cursor');
  
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  
  // Cursor Hover Effects
  const hoverElements = document.querySelectorAll('a, button, .wheel-button');
  
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
    });
  });

  // Smooth scrolling for internal links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Function to detect touch devices
function isTouchDevice() {
  return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
}

// Existing code...

// Get references to elements
// Existing code for toggle button and custom cursor...

