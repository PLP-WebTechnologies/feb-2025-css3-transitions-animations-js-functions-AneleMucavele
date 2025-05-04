// JavaScript to store and retrieve user preferences for multiple buttons using localStorage
const buttons = [
    { buttonId: "toggleButton1", statusText: "Ola jelly!", imageId: "image1" },
    { buttonId: "toggleButton2", statusText: "Hello yellow face!", imageId: "image2" },
    { buttonId: "toggleButton3", statusText: "Hi ice lolly!", imageId: "image3" },
  ];
  
  buttons.forEach((btn) => {
    const button = document.getElementById(btn.buttonId);
    const image = document.getElementById(btn.imageId);
    const status = document.getElementById('status');  // Get status element
  
    // Check localStorage for previous state of each button
    if (localStorage.getItem(`${btn.buttonId}-state`) === "clicked") {
      button.style.backgroundColor = "#4CAF50"; // Green when clicked
      image.style.transform = "scale(1.1)";
      status.textContent = btn.statusText;
    } else {
      button.style.backgroundColor = "#FF4081"; // Pink when not clicked
      image.style.transform = "scale(1)";
      status.textContent = "Click any button to start!";
    }
  
    // Function to store state in localStorage and add a fun sound
    button.addEventListener("click", function() {
      const currentState = localStorage.getItem(`${btn.buttonId}-state`);
      
      if (currentState === "clicked") {
        localStorage.setItem(`${btn.buttonId}-state`, "notClicked");
        button.style.backgroundColor = "#FF4081"; // Pink
        image.style.transform = "scale(1)";
        status.textContent = "Click any button to start!";
      } else {
        localStorage.setItem(`${btn.buttonId}-state`, "clicked");
        button.style.backgroundColor = "#4CAF50"; // Green
        image.style.transform = "scale(1.1)";
        status.textContent = btn.statusText; // Change status text
      }
    });
  });
  
  
  