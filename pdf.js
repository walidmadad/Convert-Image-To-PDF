// Declare global variables to store image elements
var newImg, showImg;

// Function to load an image when a file is selected
function loadImg(event) {
  // Get the 'showImg' element by its ID
  showImg = document.getElementById('showImg');

  // Set the source of 'showImg' to the URL of the selected file
  showImg.src = URL.createObjectURL(event.target.files[0]);

  // Create a new 'img' element
  newImg = document.createElement('img');

  // Set the source of 'newImg' to the URL of the selected file
  newImg.src = URL.createObjectURL(event.target.files[0]);

  // Event listener for when 'showImg' has finished loading
  showImg.onload = function() {
    // Revoke the object URL to free up resources
    URL.revokeObjectURL(showImg.src);
  }
}

// Function to convert the loaded image to a PDF and trigger a download
function pdfDown() {
  // Log the newImg element to the console
  console.log(newImg);

  // Create a new jsPDF document
  var doc = new jsPDF();

  // Add the image to the PDF at position (10, 10)
  doc.addImage(newImg, 10, 10);

  // Save the PDF with a specified filename
  doc.save('imgToPdf.pdf');
}
