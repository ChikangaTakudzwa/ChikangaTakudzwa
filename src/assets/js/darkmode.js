const toggle = document.getElementById('dark-mode-toggle');
  const body = document.body;

  // Add event listener to toggle button
  toggle.addEventListener('click', () => {
    // Toggle the 'dark' class on the body element
    body.classList.toggle('dark');

    // Store the user's preference in local storage
    const isDarkMode = body.classList.contains('dark');
    localStorage.setItem('dark-mode', isDarkMode);
  });

  // Check local storage to see if the user has a dark mode preference
  const isDarkMode = localStorage.getItem('dark-mode') === 'true';
  if (isDarkMode) {
    body.classList.add('dark');
  }