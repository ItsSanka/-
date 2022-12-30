function SendMail() {
    var params = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_npelcrc", "template_ke0cuuc", params).then(function (res) {
        alert("Thank you for getting in touch!" + res.status);
    })
}