document.addEventListener("DOMContentLoaded", function () {
    // Get the form element by its ID
    var NameForm = document.getElementById("Name-form");

    // Add an event listener for the form submission
    NameForm.addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

    });
});