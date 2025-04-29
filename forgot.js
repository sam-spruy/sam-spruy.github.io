document.getElementById("submit").addEventListener("click", function () {
    const emailInput = document.getElementById("email").value;

    if (!emailInput) {
        alert("Please enter your email address.");
        return;
    }

    // Simulate sending a password reset request
    alert(`A password reset link has been sent to ${emailInput}`);
});