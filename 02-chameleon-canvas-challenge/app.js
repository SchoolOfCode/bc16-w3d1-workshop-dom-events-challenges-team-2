/*
Learning Objectives:
  1. Understand and utilize DOM input events.
  2. Manipulate the style properties of DOM elements.
  3. React to changes in input fields dynamically.

Brief:
You're presented with a canvas and a color picker. Your task is to implement the functionality to change the background color of the canvas based on the color selected in the color picker.

Expected Outcomes:
  1. When a color is selected using the color picker, the canvas should instantly reflect that color.
  2. The canvas should always display the current color selected in the color picker.
*/

// Place your plan and solution below!

/* 
1. Check HTML and identify relevant elements ✅
2. Select canvas in DOM and declare as a variable ✅
3. Select input in DOM and declare as a variable ✅
4. Define a function that sets the background colour of canvas to the value of input 
5. Add event listener to input - onclick, drag?
6. Pass the function to the event listener
*/

const canvas = document.getElementById("canvas");

const colourPicker = document.getElementById("colorPicker");

function colourChange() {
  const selectedColour = colourPicker.value ;
  canvas.style.backgroundColor = selectedColour ;
}

colourPicker.addEventListener("input", colourChange);
