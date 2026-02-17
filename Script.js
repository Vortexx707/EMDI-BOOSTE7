// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Service Card Click - Scroll to Order Form
const serviceCards = document.querySelectorAll('.service-card');
const platformSelect = document.getElementById('platform');

serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const platform = card.dataset.platform;
        platformSelect.value = platform;
        document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
    });
});

// Order Form Submission
const orderForm = document.getElementById('orderForm');
const orderProgress = document.getElementById('orderProgress');
const orderSuccess = document.getElementById('orderSuccess');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const successMessage = document.getElementById('successMessage');

orderForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form values
    const platform = document.getElementById('platform').value;
    const serviceType = document.getElementById('serviceType').value;
    const username = document.getElementById('username').value;
    const quantity = document.getElementById('quantity').value;

    // Hide form and show progress
    orderForm.style.display = 'none';
    orderProgress.classList.remove('hidden');

    // Simulate instant delivery with progress animation
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressFill.style.width = progress + '%';

        if (progress === 30) {
            progressText.textContent = 'Connecting to network...';
        } else if (progress === 60) {
            progressText.textContent = 'Processing your order...';
        } else if (progress === 90) {
            progressText.textContent = 'Delivering engagement...';
        }

        if (progress >= 100) {
            clearInterval(interval);
            
            // Show success message
            setTimeout(() => {
                orderProgress.classList.add('hidden');
                orderSuccess.classList.remove('hidden');
                
                const platformName = platform.charAt(0).toUpperCase() + platform.slice(1);
                successMessage.textContent = `${quantity} ${serviceType} have been delivered to your ${platformName} account @${username}!`;

                // Reset form after 5 seconds
                setTimeout(() => {
                    orderSuccess.classList.add('hidden');
                    orderForm.style.display = 'flex';
                    orderForm.reset();
                }, 5000);
            }, 500);
        }
    }, 200);
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});
                        
