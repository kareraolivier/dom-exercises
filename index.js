document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const displayDiv = document.getElementById("display");
    displayDiv.innerHTML = `Name: ${name}<br>Email: ${email}<br>Phone: ${phone}`;

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  });

document.getElementById("changeColorBtn").addEventListener("click", () => {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

let toggleVisibilityBtn = document.getElementById("toggleVisibilityBtn");
let increaseFontSizeBtn = document.getElementById("increaseFontSizeBtn");
let targetElement = document.getElementById("targetElement");

function toggleVisibility() {
  if (targetElement.style.display === "none") {
    targetElement.style.display = "block";
  } else {
    targetElement.style.display = "none";
  }
}

function increaseFontSize() {
  let currentFontSize = parseFloat(
    window.getComputedStyle(targetElement).fontSize
  );
  targetElement.style.fontSize = currentFontSize + 2 + "px";
}

toggleVisibilityBtn.addEventListener("click", toggleVisibility);
increaseFontSizeBtn.addEventListener("dblclick", increaseFontSize);

document
  .getElementById("addParagraphBtn")
  .addEventListener("click", function () {
    var newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a new paragraph.";
    document.getElementById("paragraphContainer").appendChild(newParagraph);
  });

function compareNumbers() {
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;

  num1 = Number(num1);
  num2 = Number(num2);

  if (num1 > num2) {
    document.getElementById("result").innerHTML =
      "The larger number is: " + num1;
  } else if (num2 > num1) {
    document.getElementById("result").innerHTML =
      "The larger number is: " + num2;
  } else {
    document.getElementById("result").innerHTML = "Both numbers are equal.";
  }
}
