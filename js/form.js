document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch("submit.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert('Se ha enviado correctaqmente');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

