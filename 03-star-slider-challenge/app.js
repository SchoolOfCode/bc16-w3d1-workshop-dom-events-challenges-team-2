/*
Learning Objectives:
  1. Manipulate DOM elements based on user input.
  2. Dynamically create and delete elements based on slider values.
  3. Enhance understanding of event-driven programming.

Brief:
You're provided with a slider (ranging from 1 to 5) and an empty space to populate star icons. Your task is to create or remove stars dynamically based on the value of the slider.

Expected Outcomes:
  1. The number of star icons should match the slider's value.
  2. Adjusting the slider should immediately reflect the change in the number of star icons.
*/

// Place your plan and solution below!
/* 1. Take a look at the live server ✅
   2. Take a look at the HTML elements ✅
   3. Make a variable starSlider ✅
   4. make a variable for stars ✅
   5. Make a function to change value of range of starSlider to (++) or (--) the ammount of stars dynamically (based on the value of the slider)
   6. starslider value changes to 3 > stars ++ to 3*/

  const starSlider = document.getElementById("starSlider");
  const stars = document.getElementById("stars");
  
  function ratingChange() {
    let sliderValue = parseInt(starSlider.value);
    // Looks up and compares the value of slider at any given time

    sliderValue = Math.min(Math.max(sliderValue, 1), 5);
    // caps the slider value to be no more or less than 1 to 5.

    stars.innerHTML = "";
    // Clears the existing stars each time you move the slider up or down
    
   for (let i = 0; i < sliderValue; i++) {
      const star = document.createElement("span");
      star.textContent = "★";
      star.className = "star-icon"
      stars.appendChild(star);
    }
  };
  // Add new stars based on slider value

  starSlider.addEventListener("input", ratingChange);
