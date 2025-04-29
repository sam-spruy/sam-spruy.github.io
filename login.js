document.getElementById("myForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    };

    const response = await fetch("http://localhost:5000/submit-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    });

    const result = await response.json();
    alert(result.message); 
});


