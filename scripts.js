// Initialize an object to keep track of the counts for each shelf section
var counts = {
    'triangle-up': 0, // Initial count for the triangle-up section
    'white': 0,       // Initial count for the white section
    'trapezoid': 0,   // Initial count for the trapezoid section
    'trapezoid2': 0,  // Initial count for the trapezoid2 section
    'trapezoid3': 0   // Initial count for the trapezoid3 section
  };
  
  // Function to increase the count for a specific shelf section
  function increaseItems(shelf) {
    counts[shelf]++; // Increment the count for the specified shelf
    document.getElementById(shelf + '-count').textContent = counts[shelf]; // Update the displayed count
    updateColorGuidelines(shelf); // Update the color guideline based on the new count
  }
  
  // Function to decrease the count for a specific shelf section
  function decreaseItems(shelf) {
    if (counts[shelf] > 0) { // Ensure the count doesn't go below 0
      counts[shelf]--; // Decrement the count for the specified shelf
      document.getElementById(shelf + '-count').textContent = counts[shelf]; // Update the displayed count
      updateColorGuidelines(shelf); // Update the color guideline based on the new count
    }
  }
  
  // Function to update the color guidelines based on the current count
  function updateColorGuidelines(shelf) {
    const guideline = getGuideline(shelf); // Get the guideline value for the specified shelf
    const span = document.getElementById(shelf + '-count'); // Get the span element that displays the count
    const count = counts[shelf]; // Get the current count for the specified shelf
  
    // Remove existing guideline-related classes
    span.classList.remove('above-guideline', 'within-guideline', 'below-guideline');
  
    // Apply the appropriate class based on the current count relative to the guideline
    if (count > guideline) {
      span.classList.add('above-guideline'); // Add class for counts above the guideline
    } else if (count === guideline) {
      span.classList.add('within-guideline'); // Add class for counts exactly at the guideline
    } else {
      span.classList.add('below-guideline'); // Add class for counts below the guideline
    }
  }
  
  // Function to get the recommended guideline for a specific shelf section
  function getGuideline(shelf) {
    // Placeholder function: Implement logic to determine the guideline based on criteria (e.g., age group)
    // For simplicity, return a static value here
    return 5; // Example value, replace with your logic
  }
  
  // Function to validate the selected date
  function validateDate() {
    const inputDate = new Date(document.getElementById('record-date').value); // Get the selected date
    const currentDate = new Date(); // Get the current date
  
    if (inputDate > currentDate) { // Check if the selected date is in the future
      alert('Please select a valid date.'); // Alert the user if the date is invalid
      document.getElementById('record-date').value = ''; // Clear the invalid date input
    }
  }
  
