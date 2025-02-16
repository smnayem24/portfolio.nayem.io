$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });


});

// Initialize particles.js after DOM load
document.addEventListener('DOMContentLoaded', () => {
    if(typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', { 
            /* your particles config */ 
        });
    }
});

// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    themeToggle.querySelector('i').classList.toggle('fa-sun');
    themeToggle.querySelector('i').classList.toggle('fa-moon');
});

// Simple Modal Implementation
document.addEventListener('DOMContentLoaded', function() {
    // Get all Learn More buttons
    const buttons = document.querySelectorAll('.project-details-btn');
    const modalContainer = document.querySelector('.modal-container');
    
    // Add click event to each button
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const projectCard = this.closest('.project-card');
            const projectId = projectCard.getAttribute('data-project');
            const modal = document.getElementById(`${projectId}-modal`);
            
            if (modal) {
                modalContainer.style.display = 'flex';
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal when clicking X or outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('close-modal') || e.target === modalContainer) {
            modalContainer.style.display = 'none';
            document.querySelectorAll('.project-modal').forEach(modal => {
                modal.style.display = 'none';
            });
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modalContainer.style.display = 'none';
            document.querySelectorAll('.project-modal').forEach(modal => {
                modal.style.display = 'none';
            });
            document.body.style.overflow = 'auto';
        }
    });
});

// Add project navigation functionality
document.addEventListener('DOMContentLoaded', () => {
  const projectsGrid = document.querySelector('.projects-grid');
  let currentIndex = 0;

  // Function to scroll to next project
  function scrollToNext() {
    const cards = document.querySelectorAll('.project-card');
    currentIndex = (currentIndex + 1) % cards.length;
    cards[currentIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  // Function to scroll to previous project
  function scrollToPrev() {
    const cards = document.querySelectorAll('.project-card');
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    cards[currentIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  // Add keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') scrollToNext();
    if (e.key === 'ArrowLeft') scrollToPrev();
  });

  // Add touch swipe functionality
  let touchStartX = 0;
  projectsGrid.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });

  projectsGrid.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) scrollToNext();
      else scrollToPrev();
    }
  });
});

// Add these functions at global scope
function scrollToNext() {
    const container = document.querySelector('.projects-grid');
    const cardWidth = document.querySelector('.project-card').offsetWidth;
    container.scrollBy({
        left: cardWidth + 32, // card width + gap
        behavior: 'smooth'
    });
}

function scrollToPrev() {
    const container = document.querySelector('.projects-grid');
    const cardWidth = document.querySelector('.project-card').offsetWidth;
    container.scrollBy({
        left: -(cardWidth + 32), // card width + gap
        behavior: 'smooth'
    });
}

// Replace ONLY the jQuery navbar code with this
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('.menu-btn');
    
    // Sticky navbar
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('sticky', window.scrollY > 20);
    });

    // Mobile menu toggle
    menuBtn.addEventListener('click', () => {
        document.querySelector('.navbar .menu').classList.toggle('active');
        menuBtn.querySelector('i').classList.toggle('fa-times');
    });

    // Close menu when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if(!e.target.closest('.navbar') && document.querySelector('.navbar .menu').classList.contains('active')) {
            document.querySelector('.navbar .menu').classList.remove('active');
            menuBtn.querySelector('i').classList.remove('fa-times');
        }
    });
});

// Update Typed.js initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Typed.js only once
    const typingElements = document.querySelectorAll('.typing');
    
    typingElements.forEach(element => {
        if(!element._typed) { // Prevent duplicate initialization
            new Typed(element, {
                strings: ["VLSI Design Engineer", "Digital Circuit Designer", "RTL Developer"],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true,
                showCursor: true,
                cursorChar: '|',
                smartBackspace: true
            });
            element._typed = true; // Mark as initialized
        }
    });

    // Keep other initializations here...
    initSkillsCanvas();
    // Add card interaction code...
});

// Technical Skills Canvas Animation
function initSkillsCanvas() {
    const canvas = document.querySelector('.cyber-canvas');
    if(!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrame;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = canvas.offsetHeight;
    }

    function drawCyberBackground() {
        ctx.fillStyle = '#0a0a16';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw glowing lines
        ctx.strokeStyle = 'rgba(0, 243, 255, 0.1)';
        ctx.lineWidth = 2;
        
        for(let i = 0; i < 50; i++) {
            ctx.beginPath();
            ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.stroke();
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCyberBackground();
        animationFrame = requestAnimationFrame(animate);
    }

    // Initialize
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    // Cleanup
    return () => {
        window.removeEventListener('resize', resizeCanvas);
        cancelAnimationFrame(animationFrame);
    };
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    initSkillsCanvas();
    
    // Add card interaction
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

