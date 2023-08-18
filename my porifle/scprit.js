const textElement = document.getElementById('typing-text');
const texts = [
  'I am full-stack developer  ',
  'I am Mohamed Kordya, a web programmer. I have experience in designing websites and proficiency in programming languages: HTML,  CSS, JS, PHP, SQL.',
];
let textIndex = 0;
let charIndex = 0;

function type() {
  if (textIndex < texts.length) {
    if (charIndex < texts[textIndex].length) {
      textElement.textContent += texts[textIndex][charIndex];
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 1000); // Wait for a while before erasing
    }
  }
}

function erase() {
  if (charIndex > 0) {
    textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    // Move to the next sentence
    textIndex++;
    if (textIndex >= texts.length) {
      textIndex = 0; // Restart from the beginning
    }
    charIndex = 0;
    setTimeout(type, 500); // Add a delay before typing the next sentence
  }
}

type();
const linkedinIcon = document.getElementById("linkedin-icon");
const facebookIcon = document.getElementById("facebook-icon");






document.getElementById("submitBtn").addEventListener("click", function() {
    const message = document.getElementById("message").value;
    if (message) {
      const mailtoLink = "mailto:mohmadkordeya2@gmail.com?subject=New Message&body=" + encodeURIComponent(message);
      window.location.href = mailtoLink;
    } else {
      alert("الرجاء إدخال رسالتك قبل الإرسال.");
    }
  });