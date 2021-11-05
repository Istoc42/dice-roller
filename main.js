// RANDOM NUMBER GENERATION
// Generate a random number between 1 and 100
function roll100() {
  return Math.floor(1 + Math.random() * 100);
}

// Generate a random number between 1 and 20
function roll20() {
  return Math.floor(1 + Math.random() * 20);
}

// Generate a random number between 1 and 12
function roll12() {
  return Math.floor(1 + Math.random() * 12);
}

// Generate a random number between 1 and 10
function roll10() {
  return Math.floor(1 + Math.random() * 10);
}

// Generate a random number between 1 and 8
function roll8() {
  return Math.floor(1 + Math.random() * 8);
}

// Generate a random number between 1 and 6
function roll6() {
  return Math.floor(1 + Math.random() * 6);
}

// Generate a random number between 1 and 4
function roll4() {
  return Math.floor(1 + Math.random() * 4);
}

// Assign results to variables
const d100 = roll100();
const d20 = roll20();
const d12 = roll12();
const d10 = roll10();
const d8 = roll8();
const d6 = roll6();
const d4 = roll4();

// Select button from DOM
const btn100 = document.getElementById("btn-100");
const btn20 = document.getElementById("btn-20");
const btn12 = document.getElementById("btn-12");
const btn10 = document.getElementById("btn-10");
const btn8 = document.getElementById("btn-8");
const btn6 = document.getElementById("btn-6");
const btn4 = document.getElementById("btn-4");

const btn100icon = document.getElementById('result-dice-100')
const btn20icon = document.getElementById('result-dice-20')
const btn12icon = document.getElementById('result-dice-12')
const btn10icon = document.getElementById('result-dice-10')
const btn8icon = document.getElementById('result-dice-8')
const btn6icon = document.getElementById('result-dice-6')
const btn4icon = document.getElementById('result-dice-4')

// BUTTON CLICK EVENTS
// Execute roll100 when button is clicked
btn100.addEventListener("click", function(){
  // Dice roll sound
  var audio = document.getElementById("roll-sound");
  audio.play();
  //Assign result of roll function to variable
  const d100result = roll100();
  // Display result in span
  document.getElementById("result-100").innerHTML = d100result;
  console.log("d100: " + d100result);
  // If 1 or 100, add special class
  if (d100result === 1) {
    var element = document.getElementById("result-dice-100");
    element.classList.remove("fail");
    void element.offsetWidth;
    element.classList.add("fail");
    console.log("CRITICAL FAILURE!");
  } else if (d100result === 100) {
    var element = document.getElementById("result-dice-100");
    element.classList.remove("crit");
    void element.offsetWidth;
    element.classList.add("crit");
    console.log("CRITICAL SUCCESS!");
  } else {
    var element = document.getElementById("result-dice-100");
    element.classList.remove("crit");
    element.classList.remove("fail");
    void element.offsetWidth;
  }
});
btn100icon.addEventListener("click", function(){
  // Dice roll sound
  var audio = document.getElementById("roll-sound");
  audio.play();
  //Assign result of roll function to variable
  const d100result = roll100();
  // Display result in span
  document.getElementById("result-100").innerHTML = d100result;
  console.log("d100: " + d100result);
  // If 1 or 100, add special class
  if (d100result === 1) {
    var element = document.getElementById("result-dice-100");
    element.classList.remove("fail");
    void element.offsetWidth;
    element.classList.add("fail");
    console.log("CRITICAL FAILURE!");
  } else if (d100result === 100) {
    var element = document.getElementById("result-dice-100");
    element.classList.remove("crit");
    void element.offsetWidth;
    element.classList.add("crit");
    console.log("CRITICAL SUCCESS!");
  } else {
    var element = document.getElementById("result-dice-100");
    element.classList.remove("crit");
    element.classList.remove("fail");
    void element.offsetWidth;
  }
});

// Execute roll20 when button is clicked
btn20.addEventListener("click", function () {
  // Dice roll sound
  var audio = document.getElementById("roll-sound");
  audio.play();
  const d20result = roll20();
  // Display result in span
  document.getElementById("result-20").innerHTML = d20result;
  console.log("d20: " + d20result);
  // If 1 or 20, add special class
  if (d20result === 1) {
    var element = document.getElementById("result-dice-20");
    element.classList.remove("fail");
    void element.offsetWidth;
    element.classList.add("fail");
    console.log("CRITICAL FAILURE!");

    // ADD TEXT TO A CRITICAL FAILURE
    // var tag = document.createElement('h1');
    // var text = document.createTextNode("Well shit...");
    // tag.appendChild(text);
    // var newElement = document.getElementById('twenty');
    // newElement.appendChild(tag);
  } else if (d20result === 20) {
    var element = document.getElementById("result-dice-20");
    element.classList.remove("crit");
    void element.offsetWidth;
    element.classList.add("crit");
    console.log("CRITICAL SUCCESS!");
  } else {
    var element = document.getElementById("result-dice-20");
    element.classList.remove("crit");
    element.classList.remove("fail");
    void element.offsetWidth;
  }
});
btn20icon.addEventListener("click", function () {
  // Dice roll sound
  var audio = document.getElementById("roll-sound");
  audio.play();
  const d20result = roll20();
  // Display result in span
  document.getElementById("result-20").innerHTML = d20result;
  console.log("d20: " + d20result);
  // If 1 or 20, add special class
  if (d20result === 1) {
    var element = document.getElementById("result-dice-20");
    element.classList.remove("fail");
    void element.offsetWidth;
    element.classList.add("fail");
    console.log("CRITICAL FAILURE!");

    // ADD TEXT TO A CRITICAL FAILURE
    // var tag = document.createElement('h1');
    // var text = document.createTextNode("Well shit...");
    // tag.appendChild(text);
    // var newElement = document.getElementById('twenty');
    // newElement.appendChild(tag);
  } else if (d20result === 20) {
    var element = document.getElementById("result-dice-20");
    element.classList.remove("crit");
    void element.offsetWidth;
    element.classList.add("crit");
    console.log("CRITICAL SUCCESS!");
  } else {
    var element = document.getElementById("result-dice-20");
    element.classList.remove("crit");
    element.classList.remove("fail");
    void element.offsetWidth;
  }
});

// Execute roll12 when button is clicked
btn12.addEventListener("click", function () {
  // Dice roll sound
  var audio = document.getElementById("roll-sound");
  audio.play();
  const d12result = roll12();
  // Display result in span
  document.getElementById("result-12").innerHTML = d12result;
  console.log("d12: " + d12result);
  // If 1 or 12, add special class
  if (d12result === 1) {
    var element = document.getElementById("result-dice-12");
    element.classList.remove("fail");
    void element.offsetWidth;
    element.classList.add("fail");
    console.log("CRITICAL FAILURE!");
  } else if (d12result === 12) {
    var element = document.getElementById("result-dice-12");
    element.classList.remove("crit");
    void element.offsetWidth;
    element.classList.add("crit");
    console.log("CRITICAL SUCCESS!");
  } else {
    var element = document.getElementById("result-dice-12");
    element.classList.remove("crit");
    element.classList.remove("fail");
    void element.offsetWidth;
  }
});
btn12icon.addEventListener("click", function () {
  // Dice roll sound
  var audio = document.getElementById("roll-sound");
  audio.play();
  const d12result = roll12();
  // Display result in span
  document.getElementById("result-12").innerHTML = d12result;
  console.log("d12: " + d12result);
  // If 1 or 12, add special class
  if (d12result === 1) {
    var element = document.getElementById("result-dice-12");
    element.classList.remove("fail");
    void element.offsetWidth;
    element.classList.add("fail");
    console.log("CRITICAL FAILURE!");
  } else if (d12result === 12) {
    var element = document.getElementById("result-dice-12");
    element.classList.remove("crit");
    void element.offsetWidth;
    element.classList.add("crit");
    console.log("CRITICAL SUCCESS!");
  } else {
    var element = document.getElementById("result-dice-12");
    element.classList.remove("crit");
    element.classList.remove("fail");
    void element.offsetWidth;
  }
});

// Execute roll10 when button is clicked
btn10.addEventListener("click", function () {
  // Dice roll sound
  var audio = document.getElementById("roll-sound");
  audio.play();
  const d10result = roll10();
  // Display result in span
  document.getElementById("result-10").innerHTML = d10result;
  console.log("d10: " + d10result);
  // If 1 or 10, add special class
  if (d10result === 1) {
    var element = document.getElementById("result-dice-10");
    element.classList.remove("fail");
    void element.offsetWidth;
    element.classList.add("fail");
    console.log("CRITICAL FAILURE!");
  } else if (d10result === 10) {
    var element = document.getElementById("result-dice-10");
    element.classList.remove("crit");
    void element.offsetWidth;
    element.classList.add("crit");
    console.log("CRITICAL SUCCESS!");
  } else {
    var element = document.getElementById("result-dice-10");
    element.classList.remove("crit");
    element.classList.remove("fail");
    void element.offsetWidth;
  }
});
btn10icon.addEventListener("click", function () {
  // Dice roll sound
  var audio = document.getElementById("roll-sound");
  audio.play();
  const d10result = roll10();
  // Display result in span
  document.getElementById("result-10").innerHTML = d10result;
  console.log("d10: " + d10result);
  // If 1 or 10, add special class
  if (d10result === 1) {
    var element = document.getElementById("result-dice-10");
    element.classList.remove("fail");
    void element.offsetWidth;
    element.classList.add("fail");
    console.log("CRITICAL FAILURE!");
  } else if (d10result === 10) {
    var element = document.getElementById("result-dice-10");
    element.classList.remove("crit");
    void element.offsetWidth;
    element.classList.add("crit");
    console.log("CRITICAL SUCCESS!");
  } else {
    var element = document.getElementById("result-dice-10");
    element.classList.remove("crit");
    element.classList.remove("fail");
    void element.offsetWidth;
  }
});

// Execute roll8 when button is clicked
btn8.addEventListener("click", function () {
  // Dice roll sound
  var audio = document.getElementById("roll-sound");
  audio.play();
  const d8result = roll8();
  // Display result in span
  document.getElementById("result-8").innerHTML = d8result;
  console.log("d8: " + d8result);
  // If 1 or 8, add special class
  if (d8result === 1) {
    var element = document.getElementById("result-dice-8");
    element.classList.remove("fail");
    void element.offsetWidth;
    element.classList.add("fail");
    console.log("CRITICAL FAILURE!");
  } else if (d8result === 8) {
    var element = document.getElementById("result-dice-8");
    element.classList.remove("crit");
    void element.offsetWidth;
    element.classList.add("crit");
    console.log("CRITICAL SUCCESS!");
  } else {
    var element = document.getElementById("result-dice-8");
    element.classList.remove("crit");
    element.classList.remove("fail");
    void element.offsetWidth;
  }
});
btn8icon.addEventListener("click", function () {
  // Dice roll sound
  var audio = document.getElementById("roll-sound");
  audio.play();
  const d8result = roll8();
  // Display result in span
  document.getElementById("result-8").innerHTML = d8result;
  console.log("d8: " + d8result);
  // If 1 or 8, add special class
  if (d8result === 1) {
    var element = document.getElementById("result-dice-8");
    element.classList.remove("fail");
    void element.offsetWidth;
    element.classList.add("fail");
    console.log("CRITICAL FAILURE!");
  } else if (d8result === 8) {
    var element = document.getElementById("result-dice-8");
    element.classList.remove("crit");
    void element.offsetWidth;
    element.classList.add("crit");
    console.log("CRITICAL SUCCESS!");
  } else {
    var element = document.getElementById("result-dice-8");
    element.classList.remove("crit");
    element.classList.remove("fail");
    void element.offsetWidth;
  }
});

// Execute roll6 when button is clicked
btn6.addEventListener("click", function () {
  // Dice roll sound
  var audio = document.getElementById("roll-sound");
  audio.play();
  const d6result = roll6();
  // Display result in span
  document.getElementById("result-6").innerHTML = d6result;
  console.log("d6: " + d6result);
  // If 1 or 6, add special class
  if (d6result === 1) {
    var element = document.getElementById("result-dice-6");
    element.classList.remove("fail");
    void element.offsetWidth;
    element.classList.add("fail");
    console.log("CRITICAL FAILURE!");
  } else if (d6result === 6) {
    var element = document.getElementById("result-dice-6");
    element.classList.remove("crit");
    void element.offsetWidth;
    element.classList.add("crit");
    console.log("CRITICAL SUCCESS!");
  } else {
    var element = document.getElementById("result-dice-6");
    element.classList.remove("crit");
    element.classList.remove("fail");
    void element.offsetWidth;
  }
});
btn6icon.addEventListener("click", function () {
  // Dice roll sound
  var audio = document.getElementById("roll-sound");
  audio.play();
  const d6result = roll6();
  // Display result in span
  document.getElementById("result-6").innerHTML = d6result;
  console.log("d6: " + d6result);
  // If 1 or 6, add special class
  if (d6result === 1) {
    var element = document.getElementById("result-dice-6");
    element.classList.remove("fail");
    void element.offsetWidth;
    element.classList.add("fail");
    console.log("CRITICAL FAILURE!");
  } else if (d6result === 6) {
    var element = document.getElementById("result-dice-6");
    element.classList.remove("crit");
    void element.offsetWidth;
    element.classList.add("crit");
    console.log("CRITICAL SUCCESS!");
  } else {
    var element = document.getElementById("result-dice-6");
    element.classList.remove("crit");
    element.classList.remove("fail");
    void element.offsetWidth;
  }
});

btn4.addEventListener("click", function () {
  // Dice roll sound
  var audio = document.getElementById("roll-sound");
  audio.play();
  const d4result = roll4();
  // Display result in span
  document.getElementById("result-4").innerHTML = d4result;
  console.log("d4: " + d4result);
  // If 1 or 4, add special class
  if (d4result === 1) {
    var element = document.getElementById("result-dice-4");
    element.classList.remove("fail");
    void element.offsetWidth;
    element.classList.add("fail");
    console.log("CRITICAL FAILURE!");
  } else if (d4result === 4) {
    var element = document.getElementById("result-dice-4");
    element.classList.remove("crit");
    void element.offsetWidth;
    element.classList.add("crit");
    console.log("CRITICAL SUCCESS!");
  } else {
    var element = document.getElementById("result-dice-4");
    element.classList.remove("crit");
    element.classList.remove("fail");
    void element.offsetWidth;
  }
});
btn4icon.addEventListener("click", function () {
  // Dice roll sound
  var audio = document.getElementById("roll-sound");
  audio.play();
  const d4result = roll4();
  // Display result in span
  document.getElementById("result-4").innerHTML = d4result;
  console.log("d4: " + d4result);
  // If 1 or 4, add special class
  if (d4result === 1) {
    var element = document.getElementById("result-dice-4");
    element.classList.remove("fail");
    void element.offsetWidth;
    element.classList.add("fail");
    console.log("CRITICAL FAILURE!");
  } else if (d4result === 4) {
    var element = document.getElementById("result-dice-4");
    element.classList.remove("crit");
    void element.offsetWidth;
    element.classList.add("crit");
    console.log("CRITICAL SUCCESS!");
  } else {
    var element = document.getElementById("result-dice-4");
    element.classList.remove("crit");
    element.classList.remove("fail");
    void element.offsetWidth;
  }
});

// ANIMATION
// Trigger dice spin animation with reset
function ani100() {
  // Select dice image element and assign to variable
  var element = document.getElementById("result-dice-100");

  // Remove the class if it exists and apply it
  element.classList.remove("dice-spin");
  void element.offsetWidth;
  element.classList.add("dice-spin");
}

function ani20() {
  // Select dice image element and assign to variable
  var element = document.getElementById("result-dice-20");

  // Remove the class if it exists and apply it
  element.classList.remove("dice-spin");
  void element.offsetWidth;
  element.classList.add("dice-spin");
}

function ani12() {
  // Select dice image element and assign to variable
  var element = document.getElementById("result-dice-12");

  // Remove the class if it exists and apply it
  element.classList.remove("dice-spin");
  void element.offsetWidth;
  element.classList.add("dice-spin");
}

function ani10() {
  // Select dice image element and assign to variable
  var element = document.getElementById("result-dice-10");

  // Remove the class if it exists and apply it
  element.classList.remove("dice-spin");
  void element.offsetWidth;
  element.classList.add("dice-spin");
}

function ani8() {
  // Select dice image element and assign to variable
  var element = document.getElementById("result-dice-8");

  // Remove the class if it exists and apply it
  element.classList.remove("dice-spin");
  void element.offsetWidth;
  element.classList.add("dice-spin");
}

function ani6() {
  // Select dice image element and assign to variable
  var element = document.getElementById("result-dice-6");

  // Remove the class if it exists and apply it
  element.classList.remove("dice-spin");
  void element.offsetWidth;
  element.classList.add("dice-spin");
}

function ani4() {
  // Select dice image element and assign to variable
  var element = document.getElementById("result-dice-4");

  // Remove the class if it exists and apply it
  element.classList.remove("dice-spin");
  void element.offsetWidth;
  element.classList.add("dice-spin");
}
