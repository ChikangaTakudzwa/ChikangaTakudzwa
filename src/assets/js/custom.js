// Job Role 

const words = ["Full Stack Web Developer", "UI/UX Designer", "DevOps and Cloud Native"]; // add as many words as you want
  let i = 0;
  let j = 0;
  const typewriter = () => {
    const word = words[i];
    const span = document.querySelector('.myrole span');
    if (j < word.length) {
      span.textContent += word.charAt(j);
      j++;
      setTimeout(typewriter, 100);
    } else {
      setTimeout(() => {
        span.classList.add('opacity-0');
        setTimeout(() => {
          span.classList.remove('opacity-0');
          span.textContent = '';
          i = (i + 1) % words.length;
          j = 0;
          typewriter();
        }, 500);
      }, 1000);
    }
  };
  typewriter();

  // End Job Role 

  // Smooth Scroll

  // Add a click event listener to the document
  document.addEventListener('click', function (event) {

  // Check if the clicked element is a link with a hash in the href attribute
  if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {

    // Prevent default link behavior
    event.preventDefault();

    // Get the target element ID
    var targetId = event.target.hash;
    
    // Scroll to the target element
    smoothScroll(targetId, 1000);
  }
});

function smoothScroll(target, duration) {

  // Get the target element and its position
  var target = document.querySelector(target);
  var targetPosition = target.offsetTop;

  // Get the current position and calculate the distance to scroll
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;

  // Initialize variables for the animation loop
  var startTime = null;

  // Define the animation function
  function animation(currentTime) {

    // If the start time is null, set it to the current time
    if (startTime === null) startTime = currentTime;

    // Calculate the time elapsed and the current position of the scroll
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);

    // Scroll to the current position
    window.scrollTo(0, run);

    // If the animation is not complete, request another animation frame
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // Define the easing function
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  // Start the animation loop
  requestAnimationFrame(animation);
}

// End Smooth Scroll

// Back to top

// Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// End Back to top


// Menu Toggle

const btn = document.getElementById('menu-toggle');
const menu = document.getElementById('navbar-default');

function toggleNav() {
  menu.classList.toggle('show');
}

btn.addEventListener('click', toggleNav);

// Check if viewport width is less than 768 pixels
const mediaQuery = window.matchMedia('(max-width: 768px)');

if (mediaQuery.matches) {
  // Apply toggle functionality
  btn.style.display = 'block';
  menu.classList.remove('show');
} else {
  // Remove toggle functionality
  btn.style.display = 'none';
  menu.classList.add('show');
}

// Year

// Get the current year
var currentYear = new Date().getFullYear();

// Set the year in the footer
document.getElementById("year").innerHTML = currentYear;