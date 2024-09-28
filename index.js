const texts = [
  "Creating unique web experiences...",
  "Bringing ideas to life with code...",
  "Fueled by a love for learning and collaboration...",
];

let index = 0;
let textOutput = document.getElementById("text-output");
let currentText = "";
let isDeleting = false;
let charIndex = 0;
let typingSpeed = 100; // Speed of typing
let deletingSpeed = 50; // Speed of deleting

function type() {
  if (index >= texts.length) {
    index = 0; // Reset to the first text
  }

  currentText = texts[index];

  if (isDeleting) {
    if (charIndex > 0) {
      charIndex--;
      textOutput.textContent = currentText.substring(0, charIndex);
      setTimeout(type, deletingSpeed);
    } else {
      isDeleting = false;
      index++;
      setTimeout(type, 500); // Pause before typing the next text
    }
  } else {
    if (charIndex < currentText.length) {
      charIndex++;
      textOutput.textContent = currentText.substring(0, charIndex);
      setTimeout(type, typingSpeed);
    } else {
      isDeleting = true;
      setTimeout(type, 1000); // Pause before deleting
    }
  }
}

type();
