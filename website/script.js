let passwordAttempts = 0;

document.getElementById("login-button").addEventListener("click", function () {
  let password = "";

  while (password.toLowerCase() !== "magicthegathering") {
    password = prompt("Please enter the password:");

    if (password === null) {
      // IF USER PRESS CANCEL, BREAK THE LOOP
      break;
    }

    if (password.trim() === "") {
      // FOR BLANK PASSWORDS
      alert("Please enter a password.");
    } else if (password.toLowerCase() !== "magicthegathering") {
      passwordAttempts++;

      if (passwordAttempts === 5) {
        // DISPLAY HINT
        displayHint();
        moveLoginButton();
        break;
      }

      alert("Incorrect password. Please try again.");
    }
  }

  if (password.toLowerCase() === "magicthegathering") {
    // IF PASSWORD IS CORRECT, ERASE THE CONTENT ON SCREEN
    document.body.innerHTML = "";

    // COUNT DOWN TIMER
    const countdownTimer = document.createElement("div");
    countdownTimer.id = "countdown-timer";
    countdownTimer.style.fontSize = "10rem";
    countdownTimer.style.fontFamily = "Orbitron, sans-serif";
    document.body.appendChild(countdownTimer);

    let count = 3;

    // COUNT DOWN FUNCTION
    function updateTimer() {
      countdownTimer.innerText = count;
      count--;

      if (count < 0) {
        // DISPLAY MESSAGE
        countdownTimer.style.display = "none";

        const presentationMessage = document.createElement("div");
        presentationMessage.id = "presentation-message";
        presentationMessage.innerText =
          "THE PRESENTATION WILL BEGIN IN A MOMENT...";
        presentationMessage.style.fontSize = "6rem";
        presentationMessage.style.fontFamily = "Orbitron, sans-serif";
        presentationMessage.style.color = "#fff";
        presentationMessage.style.textAlign = "center";
        document.body.appendChild(presentationMessage);

        // PLAY SOUND WHEN THE MESSAGE IS DISPLAYED
        playSound();

        // DELAY FOR THE SOUND BEFORE DIRECTING
        setTimeout(function () {
          // REDIRECT TO SECOND PAGE
          window.location.href = "second.html";
        }, 3500);
      } else {
        setTimeout(updateTimer, 1000);
      }
    }

    // COUNT DOWN TIMER
    updateTimer();
  }
});

// DISPLAY HINT
function displayHint() {
  // CREATE HINT ELEMENT
  const hintMessage = document.createElement("div");
  hintMessage.id = "hint-message";
  hintMessage.innerText =
    "Hint: It's a card game created by the company Wizards of the Coast and extremely famous back in the 2000s.";
  hintMessage.style.fontSize = "2rem"; // Font size for the hint
  hintMessage.style.fontFamily = "Montserrat, sans-serif"; // Montserrat font
  hintMessage.style.color = getRandomColor(); // Function to get random color
  hintMessage.style.textAlign = "center";
  hintMessage.style.marginTop = "20px"; // Wider margin
  document.body.appendChild(hintMessage);

  // CHANGE HINT COLOR
  setInterval(function () {
    hintMessage.style.color = getRandomColor();
  }, 100); // Change color every 100 milliseconds
}

// DISPLAY THE HINT TO THE SIDE
function moveLoginButton() {
  const loginButton = document.getElementById("login-button");
  loginButton.style.marginTop = "20px"; // Add top margin to separate from hint
}

// PLAY SOUND
function playSound() {
  const audio = new Audio("audio-1.mp3"); // Change to your audio file path
  audio.play();
}

// GET THE HINT TO CHANGE TO MULTIPLE COLORS
function getRandomColor() {
  const greenValue = Math.floor(Math.random() * 256);
  const redValue = 255 - greenValue;
  return `rgb(${redValue}, ${greenValue}, 0)`;
}
