// FAQ Toggle
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-icon').textContent = '+';
    });
    
    // Toggle current FAQ
    if (!isActive) {
        faqItem.classList.add('active');
        button.querySelector('.faq-icon').textContent = '−';
    }
}

// Testimonial Navigation
let currentTestimonial = 0;
const testimonials = [
    {
        name: 'Britteney Anderson',
        text: 'Even though I ended up staying with Nestors, I want to commend Sara for her professionalism, knowledge, patience, and excellent service.'
    },
    {
        name: 'John Smith',
        text: 'Amazing service! The streaming quality is exceptional and the customer support is always helpful and responsive.'
    },
    {
        name: 'Sarah Johnson',
        text: 'Best streaming service I have used. Great variety of channels and the interface is very user-friendly.'
    }
];

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
}

function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    const card = document.querySelector('.testimonial-card');
    const nameElement = card.querySelector('h3');
    const textElement = card.querySelector('.testimonial-text');
    
    nameElement.textContent = testimonial.name;
    textElement.textContent = testimonial.text;
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .pricing-card, .benefit-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});