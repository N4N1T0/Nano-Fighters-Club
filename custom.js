
  ;gsap.registerPlugin(ScrollTrigger)

// Simple Animations With Javascript Vainilla

const ham = document.getElementById('hamburger');
const right = document.getElementById("items-right");
const left = document.getElementById("items-left");

ham.onclick = function() {
    ham.classList.toggle("open")
    right.classList.toggle("open")
    left.classList.toggle("open")
  };


// Scroll Trigger animation of the logo and others GSAP animations

  let mm = gsap.matchMedia();

mm.add("(min-width: 1024px)", () => {

    gsap.from(".logo", {
        scrollTrigger: {
            scrub: true,
            endTrigger: ".mi-container",
        },
        y: "50vh",
        scale: 6.5,
        yPercent: -50,
        display: "inline-block"
    })
})

gsap.timeline()
    .from(".loading ", {
    y:200,
    opacity:0,
    duration: 1,
    ease: "power2.out"  
    })
    .to(".loading ", {
    y:-200,
    opacity:0,
    duration: 1,
    ease: "power2.in"  
    }, "+=0.3")
    .to(".slide1", {
    xPercent: -105,
    duration: 1,
    ease:"power2"    
    }, "+=0.1")
    .to(".slide2", {
    xPercent: 105,
    duration: 1,
    ease:"power2"     
    }, "<")
    .from("nav > *", {
    opacity: 0,
    y: 20,
    stagger: 0.3
    }, "-=0.3")
    .from(".mi-container", {
        opacity:0,
    }, "<")

// Intersection Observer Animation

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if(entry.isIntersecting) observer.unobserve(entry.target)
    })
})

let testimonios = document.getElementsByClassName("testimonio");

Array.from(testimonios).forEach(testimonio => {
    observer.observe(testimonio);
})

let cards = document.getElementsByClassName("cards");

Array.from(cards).forEach(card => {
    observer.observe(card);
})

let shapes = document.getElementsByClassName("shape");

Array.from(shapes).forEach(shape => {
    observer.observe(shape);
})

let footer = document.getElementById("contactar").children;

Array.from(footer).forEach(elem => {
    observer.observe(elem);
})
