// Initialize Bootstrap tooltips for all elements with 'data-bs-toggle="tooltip"'
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl); // Attach tooltips to each element
});

document.addEventListener("DOMContentLoaded", function () {
  // Get references to elements for the toggle button and both views (folder and list view)
  const toggleButton = document.getElementById("toggleLinkView");
  const folderView = document.querySelector(".folder-view-container");
  const listView = document.querySelector(".folder-list-container");

  // Initially set the folder view to visible and list view to hidden
  folderView.classList.remove("d-none"); // Remove hidden class from folder view
  listView.classList.add("d-none"); // Add hidden class to list view

  // Set default icon for the toggle button (folder view icon)
  toggleButton.innerHTML = '<i class="fa-solid fa-table-cells fs-5"></i>';

  // Add click event listener to toggle between folder view and list view
  toggleButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior (if the button is inside an anchor tag)

    // Check if the folder view is hidden
    if (folderView.classList.contains("d-none")) {
      // If folder view is hidden, show it and hide the list view
      folderView.classList.remove("d-none");
      listView.classList.add("d-none");

      // Change the toggle button icon to indicate folder view is active
      toggleButton.innerHTML = '<i class="fa-solid fa-table-cells fs-5"></i>';
    } else {
      // If folder view is visible, hide it and show the list view
      folderView.classList.add("d-none");
      listView.classList.remove("d-none");

      // Change the toggle button icon to indicate list view is active
      toggleButton.innerHTML = '<i class="fa-solid fa-list fs-5"></i>';
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
    // Reference to dark mode toggle button
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check localStorage for dark mode preference
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        enableDarkMode();
    }

    // Event listener for the toggle button
    darkModeToggle.addEventListener('click', () => {
        const darkMode = localStorage.getItem('darkMode');
        if (darkMode !== 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    // Function to enable dark mode
    function enableDarkMode() {
        body.classList.add('dark'); // Add 'dark' class to body
        localStorage.setItem('darkMode', 'enabled'); // Store preference in localStorage
        darkModeToggle.textContent = "Disable Dark Mode";
    }

    // Function to disable dark mode
    function disableDarkMode() {
        body.classList.remove('dark'); // Remove 'dark' class from body
        localStorage.setItem('darkMode', 'disabled'); // Store preference in localStorage
        darkModeToggle.textContent = "Enable Dark Mode";
    }
});
