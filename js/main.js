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
