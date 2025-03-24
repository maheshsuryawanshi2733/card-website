document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
});



function scrollToNext() {
    const nextSection = document.getElementById("section2");
    nextSection.scrollIntoView({ behavior: "smooth" });
}

function toggleBox() {
    const box = document.getElementById('expandable-box');
    box.classList.toggle('expanded');
}

function scrollToSection2() {
    const section2 = document.getElementById('section2');
    section2.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection3() {
    const section3 = document.getElementById('section3');
    section3.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection4() {
    const section3 = document.getElementById('section4');
    section3.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection6() {
    document.getElementById('section6').scrollIntoView({ behavior: 'smooth' });
}



function scrollToSection8() {
    document.getElementById('section8').scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection9() {
    document.getElementById('section9').scrollIntoView({ behavior: 'smooth' });
}

function viewProduct() {
    const productBox = document.getElementById('product-box');
    const cardProfiles = document.getElementById('card-profiles');

    // Hide the product box
    productBox.style.display = 'none';

    // Show the card profiles with a fade-in effect
    cardProfiles.style.display = 'block';
    setTimeout(() => {
        cardProfiles.style.opacity = '1'; // Fade in
        cardProfiles.style.transition = 'opacity 1s ease-in-out'; // Smooth transition
    }, 100); // Small delay to ensure the display change is applied
}

window.addEventListener('scroll', function () {
    const scrollUpArrow = document.querySelector('.scroll-up-arrow');
    if (window.scrollY > 200) {
        scrollUpArrow.style.display = 'block'; // Show the arrow when scrolled down
    } else {
        scrollUpArrow.style.display = 'none'; // Hide the arrow when at the top
    }
});

// Scroll to the top of the page when the "Up Arrow" is clicked
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



