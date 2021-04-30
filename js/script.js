const hamBurger = document.querySelector(".fancy-burger");

hamBurger.addEventListener("click", () => {
  hamBurger.querySelectorAll("span").forEach((span) => span.classList.toggle("open"));
});


let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`)
const navlinks = document.querySelectorAll('.nav-link');
let sendMsgBtn = document.querySelector('.send-msg-btn');

$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
window.onscroll = function () { progress() }
function progress() {
  let windowScroll = document.body.scrollTop || document.documentElement.scrollTop
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (windowScroll / height) * 100;
  document.getElementById('progress-bar').style.width = scrolled + "%";


  if (windowScroll >= 800) {
    document.querySelector('.pageUp').style.display = "inline-block"
  } else {
    document.querySelector('.pageUp').style.display = "none"
  }

  if (windowScroll >= 0 && windowScroll < 500) {
    activeNavlink(navlinks[0])
  }
  else if (windowScroll >= 500 && windowScroll < 1200) {
    activeNavlink(navlinks[1])
  }
  else if (windowScroll >= 1200 && windowScroll < 2100) {
    activeNavlink(navlinks[2])
    document.querySelectorAll('.services .row div').forEach((div, index) => {
      div.style.animation = `services-div both 1s .${index+3}s ease-out`;
    })
  }
  else {
    activeNavlink(navlinks[5])
  }

}
window.addEventListener('load', () => document.querySelector('.hero-content').style.animation = "hero-content-animate both 1s ease")
let texts = ['A Creative Freelancer', 'A Front-End Developer', 'A UI/UX Designer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = ''
function type() {
  if (count === texts.length) {
    count = 0
  }
  currentText = texts[count]
  letter = currentText.slice(0, index++)
  document.querySelector('.typewriter').textContent = letter
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 200)
}
type();

$(function () {
  let navbar = $("#navbarNav");
  navbar.on('click', 'a', null, function () {
    navbar.collapse('hide');
  });
});

$(function () {
  $(document).click(function (event) {
    $('#navbarNav').collapse('hide');
  })
})


navlinks.forEach(navlink => {
  navlink.addEventListener('click', () => {
    activeNavlink(navlink)
  })
})

function activeNavlink(navlink) {
  
  navlinks.forEach(navlink => {
    navlink.classList.remove('clicked');
  });
  if (navlink.classList.contains('contact-btn')) {
    navlink.childNodes[1].classList.add('btn-clicked')
  } else {
    navlink.classList.add('clicked')
    navlinks[5].childNodes[1].classList.remove('btn-clicked')
  }
  hamBurger.querySelectorAll("span").forEach((span) => span.classList.remove("open"));
}

const submit = document.querySelector('form button');

submit.addEventListener('submit',(e)=>{
  e.preventDefault();
  
})