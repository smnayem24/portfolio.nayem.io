document.addEventListener('DOMContentLoaded', () => {
    // Replace jQuery scroll handler
    window.addEventListener('scroll', () => {
        // Sticky navbar
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 20) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // Smooth scroll for navigation
    document.querySelectorAll('.navbar .menu li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.navbar .menu');
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuBtn.querySelector('i').classList.toggle('active');
    });

    // Initialize modals
    initializeModals();
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

// Modal Functionality - Remove duplicate initialization
function initializeModals() {
    const modalContainer = document.querySelector('.modal-container');
    if (!modalContainer) {
        console.error('Modal container not found');
        return;
    }

    const detailButtons = document.querySelectorAll('.project-details-btn');
    if (detailButtons.length === 0) {
        console.warn('No project detail buttons found');
    }

    function openModal(projectId) {
        const modal = document.getElementById(`${projectId}-modal`);
        if (!modal) {
            console.error(`Modal not found for project: ${projectId}`);
            return;
        }

        try {
            modalContainer.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            requestAnimationFrame(() => {
                modalContainer.classList.add('active');
                modal.classList.add('active');
                modal.style.display = 'block';
            });
        } catch (error) {
            console.error('Error opening modal:', error);
        }
    }

    function closeModal() {
        const activeModal = document.querySelector('.project-modal.active');
        if (!activeModal) return;

        modalContainer.classList.remove('active');
        activeModal.classList.remove('active');
        
        // Wait for transition to complete before hiding
        setTimeout(() => {
            modalContainer.style.display = 'none';
            activeModal.style.display = 'none';
            document.body.style.overflow = '';
        }, 300); // Match this with your CSS transition duration
    }

    // Event Listeners
    detailButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = button.getAttribute('data-project');
            openModal(projectId);
        });
    });

    modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer || e.target.classList.contains('close-modal')) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Verify jQuery is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (typeof jQuery === 'undefined') {
        console.error('jQuery is not loaded!');
        return;
    }

    // Initialize modals
    initializeModals();

    // Verify all project cards have necessary attributes
    document.querySelectorAll('.project-card').forEach(card => {
        const btn = card.querySelector('.project-details-btn');
        if (!btn || !btn.getAttribute('data-project')) {
            console.warn('Project card missing data-project attribute:', card);
        }
    });

    // Verify all modals exist for projects
    document.querySelectorAll('.project-details-btn').forEach(btn => {
        const projectId = btn.getAttribute('data-project');
        const modal = document.getElementById(`${projectId}-modal`);
        if (!modal) {
            console.error(`Missing modal for project: ${projectId}`);
        }
    });
});

// Skills Tree Interaction
document.addEventListener('DOMContentLoaded', function() {
    const branches = document.querySelectorAll('.skill-branch');
    const leaves = document.querySelectorAll('.skill-leaf');
    
    // Add animation to branches on scroll
    const animateBranches = () => {
        branches.forEach(branch => {
            const branchPosition = branch.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(branchPosition < screenPosition) {
                branch.style.opacity = '1';
                branch.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize branch positions
    branches.forEach(branch => {
        branch.style.opacity = '0';
        branch.style.transform = 'translateY(20px)';
        branch.style.transition = 'all 0.5s ease';
    });

    // Add hover effect for leaves
    leaves.forEach(leaf => {
        leaf.addEventListener('mouseover', () => {
            leaf.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        leaf.addEventListener('mouseout', () => {
            leaf.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Listen for scroll events
    window.addEventListener('scroll', animateBranches);
    
    // Initial animation check
    animateBranches();
});

