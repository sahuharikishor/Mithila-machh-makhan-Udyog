// 1. Navigation Background Change on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        navbar.style.background = "rgba(255, 255, 255, 1)";
    } else {
        navbar.style.boxShadow = "none";
        navbar.style.background = "rgba(255, 255, 255, 0.9)";
    }
});

// 2. Scroll Animations (Intersection Observer)
const observerOptions = {
    root: null,
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Optional: Stop observing once animated
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Select elements to animate
const hiddenElements = document.querySelectorAll('.hidden, .hidden-left, .hidden-right, .hidden-up');
hiddenElements.forEach((el) => observer.observe(el));


// 3. Smooth Scroll for Anchor Links (Optional fix for some browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 4. Mobile Menu Toggle (Simple implementation)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = (navLinks.style.display === "flex") ? "none" : "flex";
    if(navLinks.style.display === "flex") {
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "70px";
        navLinks.style.right = "0";
        navLinks.style.backgroundColor = "white";
        navLinks.style.width = "100%";
        navLinks.style.padding = "20px";
    }
});

const slider = document.getElementById('slider');

function slideRight() {
    // Slider ki width pata karein (taki hum 1 puri image aage badh sakein)
    const scrollAmount = slider.clientWidth; 
    slider.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

function slideLeft() {
    const scrollAmount = slider.clientWidth;
    slider.scrollBy({
        left: -scrollAmount, // Negative value se wapas piche jayega
        behavior: 'smooth'
    });

}

// Form  select 
const contactForm = document.querySelector('form');

//  when action on Submit button 
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        
        // 1. stop refres page
        event.preventDefault();
        
        // 2. Simple Alert Box 
        alert("Thank you! Your message has been sent successfully.");
        
        // 3. reset form
        contactForm.reset();
    });
}
