window.onload = function () {
  var parentList = document.getElementById("nav");
  var listItems = parentList.querySelectorAll(".nav-item");

  for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];
    var sublist = listItem.querySelector("ul");

    if (sublist) {
      listItem.classList.add("menu-item-has-children");
    }
  }
};

// Initialize dropdown functionality
const navItems = document.querySelectorAll(".nav-item");

// Function to toggle dropdown and redirect on second click
function handleDropdown(event) {
  // Prevent the default behavior of the anchor tag
  event.preventDefault();

  if (window.innerWidth <= 1024) {
    // Check if the menu item already has 'clicked' state
    if (!this.classList.contains("clicked")) {
      // Remove 'clicked' class from all menu items
      navItems.forEach(item => item.classList.remove("clicked", "hover"));

      // Add 'clicked' and 'hover' classes to the current item
      this.classList.add("clicked", "hover");
    } else {
      // Redirect to the URL on the second click
      const href = this.querySelector(".nav-link").getAttribute("href");
      if (href) {
        window.location.href = href;
      }
    }
  } else {
    // On desktop, redirect immediately
    const href = this.querySelector(".nav-link").getAttribute("href");
    if (href) {
      window.location.href = href;
    }
  }
}

// Attach click event listener to each nav item
navItems.forEach(navItem => {
  navItem.addEventListener("click", handleDropdown);
});





  // This is where all the magic happens
  // This is a modified version of the pen from Ege Görgülü - https://codepen.io/bamf/pen/jEpxOX - and you should check it out too.
  function drags(dragElement, resizeElement, container) {
    // This creates a variable that detects if the user is using touch input insted of the mouse.
    let touched = false;
    window.addEventListener("touchstart", function () {
      touched = true;
    });
    window.addEventListener("touchend", function () {
      touched = false;
    });
    // clicp the image and move the slider on interaction with the mouse or the touch input
    dragElement
      .on("mousedown touchstart", function (e) {
        //add classes to the emelents - good for css animations if you need it to
        dragElement.addClass("draggable");
        resizeElement.addClass("resizable");
        //create vars
        let startX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
        let dragWidth = dragElement.outerWidth();
        let posX = dragElement.offset().left + dragWidth - startX;
        let containerOffset = container.offset().left;
        let containerWidth = container.outerWidth();
        let minLeft = containerOffset + 10;
        let maxLeft = containerOffset + containerWidth - dragWidth - 10;
        //add event listner on the divider emelent
        dragElement
          .parents()
          .on("mousemove touchmove", function (e) {
            // if the user is not using touch input let do preventDefault to prevent the user from slecting the images as he moves the silder arround.
            if (touched === false) {
              e.preventDefault();
            }
            let moveX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
            let leftValue = moveX + posX - dragWidth;
            // stop the divider from going over the limits of the container
            if (leftValue < minLeft) {
              leftValue = minLeft;
            } else if (leftValue > maxLeft) {
              leftValue = maxLeft;
            }
            let widthValue =
              ((leftValue + dragWidth / 2 - containerOffset) * 100) /
                containerWidth +
              "%";
            $(".draggable")
              .css("left", widthValue)
              .on("mouseup touchend touchcancel", function () {
                $(this).removeClass("draggable");
                resizeElement.removeClass("resizable");
              });
            $(".resizable").css("width", widthValue);
          })
          .on("mouseup touchend touchcancel", function () {
            dragElement.removeClass("draggable");
            resizeElement.removeClass("resizable");
          });
      })
      .on("mouseup touchend touchcancel", function (e) {
        // stop clicping the image and move the slider
        dragElement.removeClass("draggable");
        resizeElement.removeClass("resizable");
      });
  }

document.addEventListener("DOMContentLoaded", function () {
  var palletSlider = document.querySelector(".palletslider");

    if (palletSlider) {
      var splide = new Splide(palletSlider, {
        type: false,
        perPage: 1, // Each slide contains a 2x2 grid
        focus: 0,
        pagination: true,
        autoplay: false,
        interval: 3000,
        speed: 1000,
        arrows: true,
        gap: "24px",
        grid: {
          dimensions: [[2, 2]], // 2 rows x 2 columns
          gap: {
            row: "10px",
            col: "10px",
          },
        },
        breakpoints: {
          1350: {
            grid: {
              dimensions: [[1, 2]], // 2 rows, 1 column on medium screens
            },
          },
          991: {
            grid: {
              dimensions: [[1, 1]], // 1 row, 1 column on small screens
            },
            pagination: false,
            autoplay: true,
          },
        },
      });

      splide.mount(window.splide.Extensions);
    }

});


document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".servicesslider", {
    perPage: 4,
    focus: 0,
    omitEnd: true,
    swipeThreshold: 50, // Higher value reduces interference
    flickPower: 300, // Adjust flick sensitivity
    type: "loop",
    pagination: true, // Disable pagination
    autoplay: false, // Enable autoplay
    interval: 3000, // Set interval time in milliseconds (e.g., 3000 = 3 seconds)
    speed: 1000,
    gap: '24px', // Set transition speed in milliseconds (e.g., 1000 = 1 second)
    breakpoints: {
      1350: {
        perPage: 3, // Number of slides for tablet view (768px width and above)
      },
      991: {
        perPage: 2, // Number of slides for mobile view (576px width and above)
        pagination: false,
        autoplay: true,
      },
      639: {
        perPage: 1, // Number of slides for mobile view (576px width and above)
        pagination: false,
        autoplay: true,
      }
    }
  });
    
  
   
  splide.mount();

});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".clientsslider", {
    perPage: 4,
    focus: 0,
    omitEnd: true,
    type: "loop",
    swipeThreshold: 50, // Higher value reduces interference
    flickPower: 300, // Adjust flick sensitivity
    pagination: false, // Disable pagination
    autoplay: false, // Enable autoplay
    interval: 3000, // Set interval time in milliseconds (e.g., 3000 = 3 seconds)
    speed: 1000,
    gap: '24px', // Set transition speed in milliseconds (e.g., 1000 = 1 second)
    breakpoints: {
      1350: {
        perPage: 3, // Number of slides for tablet view (768px width and above)
      },
      991: {
        perPage: 2, // Number of slides for mobile view (576px width and above)
        pagination: false,
        autoplay: true,
      },
      639: {
        perPage: 2, // Number of slides for mobile view (576px width and above)
        pagination: false,
        autoplay: true,
      }
    }
  });
  splide.mount();

});

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 768) { 
  var splide = new Splide(".palletsslider", {
    perPage: 1,
    focus: 0,
    omitEnd: true,
    type: "loop",
    swipeThreshold: 50, // Higher value reduces interference
    flickPower: 300, // Adjust flick sensitivity
    pagination: false, // Disable pagination
    autoplay: false, // Enable autoplay
    interval: 3000, // Set interval time in milliseconds (e.g., 3000 = 3 seconds)
    speed: 1000,
    gap: '0', // Set transition speed in milliseconds (e.g., 1000 = 1 second)
    breakpoints: {
      1350: {
        perPage: 1, // Number of slides for tablet view (768px width and above)
      },
      991: {
        perPage: 1, // Number of slides for mobile view (576px width and above)
        pagination: false,
        autoplay: true,
      },
      639: {
        perPage: 1, // Number of slides for mobile view (576px width and above)
        pagination: false,
        autoplay: true,
      }
    }
  });
  splide.mount();
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const searchLink = document.querySelector(".search-link");
  const searchForm = document.querySelector(".search-form");
  const searchInputWrapper = document.querySelector(".search-input-wrapper");

  // Toggle search form on clicking the search link
  searchLink.addEventListener("click", (e) => {
    e.preventDefault();
    searchForm.classList.toggle("open");
  });

  // Close search form when clicking outside of it
  document.addEventListener("click", (e) => {
    if (!searchForm.contains(e.target) && !searchLink.contains(e.target)) {
      searchForm.classList.remove("open");
    }
  });
});

// Select all file input elements and their respective buttons
const fileButtons = document.querySelectorAll('.fileButton');
const fileInputs = document.querySelectorAll('.custom-file-input');

// Loop through each button and file input
fileButtons.forEach((button, index) => {
  button.addEventListener('click', function() {
    // Trigger the corresponding file input
    fileInputs[index].click();
  });
});

fileInputs.forEach((input, index) => {
  input.addEventListener('change', function(event) {
    const fileName = event.target.files.length > 0 ? event.target.files[0].name : "No File Chosen";
    // Update the corresponding filename span based on the index
    const filenameSpan = fileButtons[index].nextElementSibling; // Select the correct filename span next to the button
    filenameSpan.textContent = fileName;
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.querySelector('.add-field'); // The add button
  const addableField = document.querySelector('.addablefield'); // The container holding the fields

  // Add new field on click of the '+' button
  addButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior

      // Create the new field container
      const newField = document.createElement('div');
      newField.classList.add('field');

      // Add the input element to the new field
      const input = document.createElement('input');
      input.type = 'text';
      input.classList.add('form-control');
      newField.appendChild(input);

      // Create the delete button for the new field
      const deleteButton = document.createElement('a');
      deleteButton.href = '#';
      deleteButton.classList.add('delete-field');
      deleteButton.textContent = '-';
      
      // Add delete functionality
      deleteButton.addEventListener('click', function(e) {
          e.preventDefault();
          newField.remove(); // Remove the field when delete is clicked
      });

      // Add the delete button to the new field
      newField.appendChild(deleteButton);

      // Append the new field to the container
      addableField.insertBefore(newField, addButton); // Insert before the add button
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.querySelector('.add-section'); // The add button
  const addablesectionOuter = document.querySelector('.addablesection-outer'); // The container holding the addable sections

  // Function to create a new section
  function createNewSection() {
      // Clone the first addablesection (this is the original template section)
      const newSection = document.querySelector('.addablesection').cloneNode(true);

      // Reset the input fields and IDs
      const fields = newSection.querySelectorAll('input, select');
      fields.forEach(field => {
          field.value = ''; // Reset input values
          const newId = field.id + '-' + new Date().getTime(); // Generate a unique ID
          field.id = newId;
      });

      // Show the delete button for the new section
      const deleteButton = newSection.querySelector('.delete-section');
      deleteButton.style.display = 'inline'; // Make delete button visible

      // Add the delete button functionality
      deleteButton.addEventListener('click', function (e) {
          e.preventDefault();
          newSection.remove(); // Remove the entire section when delete is clicked
      });

      // Append the new section after the existing sections
      addablesectionOuter.insertBefore(newSection, addButton.parentElement.nextElementSibling); // Insert after the current section, not before the add button
  }

  // Add new section when the add button is clicked
  addButton.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default link behavior
      createNewSection(); // Call the function to create a new section
  });
});


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".qty").forEach(function (qtyDiv) {
      const minusBtn = qtyDiv.querySelector("a:first-child");
      const plusBtn = qtyDiv.querySelector("a:last-child");
      const inputField = qtyDiv.querySelector("input");

      // Set default value if empty
      inputField.value = inputField.value || 1;

      minusBtn.addEventListener("click", function (e) {
          e.preventDefault();
          let currentValue = parseInt(inputField.value) || 1;
          if (currentValue > 1) {
              inputField.value = currentValue - 1;
          }
      });

      plusBtn.addEventListener("click", function (e) {
          e.preventDefault();
          let currentValue = parseInt(inputField.value) || 0;
          inputField.value = currentValue + 1;
      });

      // Prevent entering negative values manually
      inputField.addEventListener("input", function () {
          if (this.value < 1 || isNaN(this.value)) {
              this.value = 1;
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".zoom").forEach((zoomContainer) => {
      const img = zoomContainer.querySelector("img");
      const magnifier = document.createElement("div");
      magnifier.classList.add("magnifier");
      zoomContainer.appendChild(magnifier);

      zoomContainer.addEventListener("mousemove", function (e) {
          magnifier.style.display = "block";
          const rect = img.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const percentX = (x / rect.width) * 100;
          const percentY = (y / rect.height) * 100;

          magnifier.style.left = `${x - magnifier.offsetWidth / 2}px`;
          magnifier.style.top = `${y - magnifier.offsetHeight / 2}px`;
          magnifier.style.backgroundImage = `url('${img.src}')`;
          magnifier.style.backgroundPosition = `${percentX}% ${percentY}%`;
      });

      zoomContainer.addEventListener("mouseleave", function () {
          magnifier.style.display = "none";
      });
  });
});


if (window.innerWidth > 767) { 
  let resizeTimeout;

  window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout); // Clear the previous timeout to prevent rapid reloads
    resizeTimeout = setTimeout(function () {
      location.reload(); // Reload the page after resizing is done
    }, 500); // Adjust the delay (in milliseconds) as needed
  });
}



document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.content-container');
  const readMoreLink = document.querySelector('.read-more-link');

  // Apply collapsed class on load for mobile
  if (window.innerWidth <= 768) {
    container.classList.add('collapsed');
  }

  readMoreLink.addEventListener('click', function(e) {
    e.preventDefault();
    container.classList.toggle('collapsed');
    readMoreLink.textContent = container.classList.contains('collapsed') ? 'Read More' : 'Show Less';
  });
});
