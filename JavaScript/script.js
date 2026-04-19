document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const serviceID = "service_bh6za57";

  const mainEmail = emailjs.sendForm(serviceID, "template_61255uw", this); // TO ME
  const autoReply = emailjs.sendForm(serviceID, "template_hquf0r8", this); // TO USER

  Promise.all([mainEmail, autoReply])
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    })
    .catch((error) => {
      alert("Failed to send message.");
      console.error("EmailJS error:", error);
    });
});