document.getElementById("myForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const formData = {
        first_name: document.getElementById("first_name").value,
        surname: document.getElementById("surname").value,
        email: document.getElementById("email").value,
        date: document.getElementById("date").value,
        services: document.getElementById("servicesInput").value,
    };

    const response = await fetch("http://localhost:5000/submit-install", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    });

    const result = await response.json();
    alert(result.message);
});
