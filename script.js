function startExperience() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").style.display = "block";

  document.getElementById("music").play();

  typeWriter();
}

function reveal() {
  document.getElementById("surprise").style.display = "block";
}

/* typing effect */
let text = "Sometimes people come into your life and change everything without even trying 💛";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
