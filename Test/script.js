// Selecting elements
let titleElement = document.getElementById("title");
let messageElement = document.getElementById("message");
let changeButton = document.getElementById("changeButton");

// Modifying attributes
titleElement.style.color = "red";
messageElement.className = "highlight";

// Changing content dynamically
changeButton.addEventListener("click", function() {
  titleElement.textContent = "DOM Manipulation";
  messageElement.innerHTML = "The Content is changed dynamically!";
});
