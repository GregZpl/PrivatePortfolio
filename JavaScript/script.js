document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_bh6za57",
    "template_61255uw",
    this
  ).then(() => {
    alert("Message sent successfully!");
    this.reset();
  }).catch((error) => {
    alert("Failed to send message.");
    console.error(error);
  });
});