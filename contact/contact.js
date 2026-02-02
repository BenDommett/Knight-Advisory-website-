
document.addEventListener("DOMContentLoaded", () => {
  // Initialize EmailJS
  emailjs.init("zoTV-RCGLPrAn6g8i");

  // Form submission
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop normal page reload

    emailjs.sendForm("service_nbdva39", "template_0wxzn8j", this)
      .then(() => {
        alert("Message sent!");
        form.reset();
      })
      .catch(err => {
        console.error("Failed to send:", err);
        alert("Failed to send message");
      });
  });
});