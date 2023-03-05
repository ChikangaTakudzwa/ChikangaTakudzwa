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

// My Projects

// const nextButton = document.querySelector('#next-button');
// const grid = document.getElementById('#grid');
// // const gridItems = document.querySelectorAll('.grid-item');

// function toggleNextButtonVisibility() {
//   if (grid.children.length > 6) {
//     nextButton.classList.remove('hidden');
//   } else {
//     nextButton.classList.add('hidden');
//   }
// }

// toggleNextButtonVisibility();

// // listen for changes to the grid items and toggle the visibility of the next button accordingly
// const gridObserver = new MutationObserver(toggleNextButtonVisibility);
// gridObserver.observe(grid, { childList: true });

// Mobile Menu

const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', () => {
  const firstIcon = menuButton.querySelector('svg:first-child');
  console.log('Runnin');
  const secondIcon = menuButton.querySelector('svg:last-child');
  if (firstIcon.style.display === 'block') {
    firstIcon.style.display = 'none';
    secondIcon.style.display = 'block';
  } else {
    firstIcon.style.display = 'block';
    secondIcon.style.display = 'none';
  }
});