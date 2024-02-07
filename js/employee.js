document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("employeeinfo-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
   
        const phoneNumber = form.querySelector("#pnumber").value;

        // Check if the phone number has exactly 10 digits (integers)
        if (!/^\d{10}$/.test(phoneNumber)) {
            alert("Phone number must have exactly 10 digits (integers).");
            return; // Prevent form submission
        }

    });
});