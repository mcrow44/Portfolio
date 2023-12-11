
  document.addEventListener('DOMContentLoaded', function () {
      // Get references to the buttons
      var lightButton = document.getElementById('lightButton');
      var darkButton = document.getElementById('darkButton');
      var blueButton = document.getElementById('blueButton');
      var basicButton = document.getElementById('basicButton');

      // Add click event listeners to the buttons
      if (lightButton) {
        lightButton.addEventListener('click', function () {
            setMode('tritanopia-theme');
        });
      }

      if (darkButton) {
        darkButton.addEventListener('click', function () {
            setMode('protanopia-theme');
        });
      }
      

      if (blueButton) {
        blueButton.addEventListener('click', function () {
            setMode('deuteranopia-theme');
        });
      }
      
      if (basicButton) {
        basicButton.addEventListener('click', function () {
            setMode('basic-theme');
        });
      }

      // On page load, check for a saved theme in localStorage
      var savedTheme = localStorage.getItem('selectedTheme');

      console.log("SAVED THEME", savedTheme);
      if (savedTheme) {
          setMode(savedTheme);
      }

      function setMode(mode) {
          // Get a reference to the body element
          var body = document.body;

          // Remove all existing color classes from the body
          body.classList.remove('tritanopia-theme', 'protanopia-theme', 'deuteranopia-theme', 'basic-theme');

          // Add the selected color class to the body
          body.classList.add(mode);

          // Save the selected theme in localStorage
          localStorage.setItem('selectedTheme', mode);
      }
  });
