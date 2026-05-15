const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add('vis');
    }

  });

},{
  threshold:0.12
});

reveals.forEach((el) => {
  observer.observe(el);
});

/* ACTIVE NAV LINK */

const page =
  location.pathname.split('/').pop() ||
  'index.html';

document.querySelectorAll('.nav-links a')
.forEach((a) => {

  if(a.getAttribute('href') === page){
    a.classList.add('active');
  }

});

/* MOBILE NAV */

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if(navToggle){

  navToggle.addEventListener('click', () => {

    navLinks.classList.toggle('show');

    navToggle.classList.toggle('active');

  });

}

/* CLOSE MOBILE NAV ON LINK CLICK */

const mobileLinks =
  document.querySelectorAll('.nav-links a');

mobileLinks.forEach((link) => {

  link.addEventListener('click', () => {

    navLinks.classList.remove('show');

    navToggle.classList.remove('active');

  });

});

document.addEventListener("DOMContentLoaded", () => {
  const urgencyToggle = document.getElementById("urgencyToggle");
  const urgencyPanel = document.querySelector(".urgency-panel");
  const urgencyBtn = document.getElementById("calculateUrgency");
  const urgencyResult = document.getElementById("urgencyResult");
  urgencyToggle.addEventListener("click", () => {
    urgencyPanel.classList.toggle("active");
  });
  urgencyBtn.addEventListener("click", () => {
    let total = 0;
    document
      .querySelectorAll(".urgency-panel input:checked")
      .forEach(box => {
        total += Number(box.value);
      });
    urgencyResult.className = "urgency-result";
    if (total <= 2) {
      urgencyResult.classList.add("green");
      urgencyResult.innerHTML =
        "🟢 Minor Issue<br>Vehicle is likely safe to drive.";
    } else if (total <= 6) {
      urgencyResult.classList.add("yellow");
      urgencyResult.innerHTML =
        "🟡 Moderate Concern<br>Inspection recommended soon.";
    } else {
      urgencyResult.classList.add("red");
      urgencyResult.innerHTML =
        "🔴 High Risk<br>Driving not recommended.";
    }
  });
});