const mobileNavbar = document.querySelector(".mobile-navbar");
const menuIcon = document.querySelector(".menu");

let flag = 0;

menuIcon.addEventListener("click", function () {
  if (flag == 0) {
    mobileNavbar.style.display = "flex";
    menuIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    flag = 1;
  } else {
    mobileNavbar.style.display = "none";
    menuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    flag = 0;
  }
});

function closeMenu() {
  mobileNavbar.style.display = "none";
  menuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
}

// Add event listener for each link in mobile navbar
const mobileNavLinks = document.querySelectorAll('.mobile-navbar li');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});


function downloadPDF() {
  // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
  var pdfPath = "./resume/Chetan Singh NextLevel Resume (1).pdf";

  // Create a link element
  var link = document.createElement("a");
  link.href = pdfPath;

  // Set the download attribute to specify the file name
  link.download = "document.pdf";

  // Append the link to the body
  document.body.appendChild(link);

  // Trigger the click event to start the download
  link.click();

  // Remove the link from the DOM
  document.body.removeChild(link);
}
