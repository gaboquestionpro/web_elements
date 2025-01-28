document.addEventListener('DOMContentLoaded', function() {
  // Select all inputs with the class "form-input"
  const inputs = document.querySelectorAll('.form-input');

  // Loop over each input and set a blue-themed background
  inputs.forEach(function(input) {
    // A simple solid background:
    // input.style.backgroundColor = '#87CEFA'; // Light sky blue

    // Or a blue gradient (uncomment this if you prefer a gradient):
    input.style.backgroundImage = 'linear-gradient(to right, #3EADEA, #1E90FF)';
    input.style.color = '#FFFFFF';        // White text stands out on blue
    input.style.border = '1px solid #CCC'; 
    input.style.borderRadius = '4px'; 
    input.style.padding = '8px'; 
  });
});
