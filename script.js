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

//Change view of icons
  document.querySelectorAll('.option').forEach((option) => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.option').forEach((opt) => {
            opt.classList.remove('selected');
            const checkmark = opt.querySelector('.checkmark');
            if (checkmark) checkmark.remove();
        });

        this.classList.add('selected');

        const checkmarkSpan = document.createElement('span');
        checkmarkSpan.classList.add('checkmark');
        checkmarkSpan.innerHTML = '&#10004;'; /* Unicode for ✔ */
        this.appendChild(checkmarkSpan);

        if(this.classList.contains('list')) {
          folderView.classList.add("d-none");
          listView.classList.remove("d-none");
        } else if(this.classList.contains('folder')) {
          folderView.classList.remove("d-none");
          listView.classList.add("d-none");
        }
    });
});

});
