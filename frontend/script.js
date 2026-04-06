// Nav highlight on scroll
window.addEventListener("scroll", function() {
  let current = "";
  let scrollY = window.pageYOffset;

  document.querySelectorAll("section").forEach(function(section) {
    let sectionTop = section.offsetTop - 300;
    let sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll("nav ul a").forEach(function(link) {
    link.style.color = "#ffffff";
    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "#00d4ff";
    }
  });
});

// Typing animation
const typingText = document.querySelector("#hero h2");
const words = ["Full Stack Developer", "Java Programmer", "Problem Solver", "Open to Work 🚀"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => isDeleting = true, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 60 : 100);
}

type();