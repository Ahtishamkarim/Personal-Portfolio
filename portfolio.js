const homeLink = document.querySelector('#homeBtn a');
const aboutLink = document.querySelector('#aboutBtn a');
const resumeLink = document.querySelector('#resumeBtn a');
const portfolioLink = document.querySelector('#portfolioBtn a');
const upLink = document.querySelector('#go-up');


const aboutSection = document.querySelector('#about');
const homeSection = document.querySelector('#home');
const resumeSection = document.querySelector('#resume_container');
const portfolioSection = document.querySelector('#portfolio');
const upSection = document.querySelector('#home');

homeLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    homeSection.scrollIntoView({ behavior: 'smooth' });
});
aboutLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});
resumeLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    resumeSection.scrollIntoView({ behavior: 'smooth' });
});

portfolioLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
});
upLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    homeSection.scrollIntoView({ behavior: 'smooth' });
});



const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            upLink.style.display = 'none';
        } else {
            upLink.style.display = 'block';
        }
    });
}, { threshold: [0] });
observer.observe(home);


// home page
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typewriter-text');
    const newText = "Web Developer";
    const initialText = "Freelancer";

    let index = 0;
    let isDeleting = false;
    
    function type() {
        let displayText = isDeleting ? initialText.substring(0, initialText.length - index) : newText.substring(0, index);
        textElement.textContent = displayText;
        if (!isDeleting && index <= newText.length) {
            index++;
        } else if (isDeleting && index >= 0) {
            index--;
        }
        if (index === newText.length + 1) {
            isDeleting = true;
            setTimeout(type, 1000); // Wait before starting to delete
        } else if (index === -1 && isDeleting) {
            isDeleting = false;
            setTimeout(type, 1000); // Wait before starting to type
        } else {
            setTimeout(type, isDeleting ? 100 : 100); // Speed of typing/deleting
        }
    }
    type(); // Start the typing effect
});



// portfolio modal
var modal = document.getElementById("myModal");
// Get the images and insert them inside the modal
var images = document.getElementsByClassName("project-img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < images.length; i++) {
    images[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

var span = document.getElementsByClassName("close")[0];
//close the modal
span.onclick = function() { 
    modal.style.display = "none";
}


// bar
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu');
    const header = document.getElementById('header');
    const body = document.body;
    const navLinks = document.querySelectorAll('#navbar ul li a');
    
    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
        if (menuOpen) {
            header.classList.add('show');
            body.classList.add('no-scroll');
        } else {
            header.classList.remove('show');
            body.classList.remove('no-scroll'); 
        }
    }

    // Event listener for the menu button
    menuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Event listener for clicking a navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuOpen) {
                toggleMenu(); 
            }
        });
    });

    //Close the menu when clicking outside of it
    document.addEventListener('click', (e) => {
        if (menuOpen && !header.contains(e.target) && e.target !== menuButton) {
            toggleMenu();
        }
    });
});



// testimonials slide
const individuals = document.querySelectorAll('.individuals');
let currentIndex = 0;

function showNextTestimonial() {
    individuals[currentIndex].classList.remove('show');
    individuals[currentIndex].classList.add('hide-left');

    currentIndex = (currentIndex + 1) % individuals.length;

    individuals[currentIndex].classList.remove('hide-right');
    individuals[currentIndex].classList.add('show');

    setTimeout(() => {
        individuals[currentIndex].classList.add('hide-left');
    }, 4000); // 4 seconds duration
}

function startSliding() {
    setInterval(showNextTestimonial, 4000); // Change testimonial every 4 seconds
}

window.onload = () => {
    individuals[0].classList.add('show');
    startSliding();
};

// dots
const dots = document.querySelectorAll('.dot');

function showNextTestimonial() {
    individuals[currentIndex].classList.remove('show');
    dots[currentIndex].classList.remove('active');
    
    currentIndex = (currentIndex + 1) % individuals.length;
    
    individuals[currentIndex].classList.add('show');
    dots[currentIndex].classList.add('active');
}

function startSliding() {
    setInterval(showNextTestimonial, 4000); // Change testimonial every 4 seconds
}
window.onload = () => {
    individuals[0].classList.add('show');
    dots[0].classList.add('active');
    startSliding();
};