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