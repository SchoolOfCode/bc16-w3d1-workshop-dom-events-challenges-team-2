/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement event listeners on buttons.
  3. Manipulate image attributes dynamically based on user interactions.

Brief:
You're provided with two images of a lightbulb: one turned on and one turned off. Your task is to implement the functionality to control the bulb's illumination. Use the 'Turn On' and 'Turn Off' buttons to switch the src attribute of the image tag, effectively lighting up or dimming the bulb.

Expected Outcomes:
  1. When the "Turn On" button is clicked, the lightbulb image should change to its 'on' state.
  2. When the "Turn Off" button is clicked, the lightbulb image should change to its 'off' state.
  3. The bulb's state should only change when the respective button is clicked.
*/

// Place your plan and solution below!

/* 1) Is the html complete? - Do we have evrything we need?
   2) Need two seperate functions, one for each button.
   3) Select element
   4) Turn element into a variable e.g. 'on'/ 'off'
   5) Target variable and add event listener e.g. 'onclick'
   6) onClick selects image element to change src attribute to either one 
   7) repeat 3 - 6 for off button */

const on = document.getElementById("turnBulbOn");


const lightbulb = document.getElementById("lightbulb");

function lightsOn() {
  lightbulb.setAttribute("src", "light-bulb-on.png")
}

on.addEventListener("click", lightsOn);

const off = document.getElementById("turnBulbOff");
function lightsOff() {
  lightbulb.setAttribute("src", "light-bulb-off.png")
}

off.addEventListener("click", lightsOff);