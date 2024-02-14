  // Get the modal element
  var modal = document.getElementById("myModal");

  // Get the no button element
  var noButton = document.querySelector(".no");

  // Get the close button element
  var closeButton = document.querySelector(".close");

  // Define a function to move the no button to a random position
  function noMoved() {
    // Get the width and height of the window
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Get the width and height of the button
    var buttonWidth = noButton.offsetWidth;
    var buttonHeight = noButton.offsetHeight;

    // Calculate a random position for the button within the window
    var randomX = Math.floor(Math.random() * (windowWidth - buttonWidth));
    var randomY = Math.floor(Math.random() * (windowHeight - buttonHeight));

    // Set the position of the button using CSS
    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
  }

  // Define a function to show the modal when the yes button is clicked
  function yesClicked() {
    modal.style.display = "block";
  }

  // Define a function to hide the modal when the close button is clicked
  function closeClicked() {
    modal.style.display = "none";
  }

  // Add event listeners to the buttons
  noButton.addEventListener("mouseover", noMoved);
  closeButton.addEventListener("click", closeClicked);