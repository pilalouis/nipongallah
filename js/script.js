/**
 * Nipong Allah Social Group - Main JavaScript
 * Handles navigation, gallery, animations, and interactive features
 */

// ============================================
// Mobile Navigation Toggle
// ============================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Animate hamburger icon
        const spans = navToggle.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) span.style.transform = 'rotate(45deg) translateY(10px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                span.style.transform = '';
                span.style.opacity = '';
            }
        });
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = '';
            span.style.opacity = '';
        });
    });
});

// ============================================
// Smooth Scrolling for Navigation Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Active Navigation Highlighting
// ============================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section, .hero');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ============================================
// Sticky Navbar on Scroll
// ============================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
    }

    lastScroll = currentScroll;
});

// ============================================
// Gallery Lightbox
// ============================================
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentImageIndex = 0;
const galleryImages = [];

// Collect all gallery images
galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    const title = item.querySelector('h4')?.textContent || '';
    const description = item.querySelector('p')?.textContent || '';

    galleryImages.push({
        src: img.src,
        alt: img.alt,
        title: title,
        description: description
    });

    // Click to open lightbox
    item.addEventListener('click', () => {
        openLightbox(index);
    });
});

function openLightbox(index) {
    currentImageIndex = index;
    const image = galleryImages[index];

    lightboxImg.src = image.src;
    lightboxImg.alt = image.alt;
    lightboxCaption.innerHTML = `<h4>${image.title}</h4><p>${image.description}</p>`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    openLightbox(currentImageIndex);
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    openLightbox(currentImageIndex);
}

// Event listeners for lightbox
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxPrev) {
    lightboxPrev.addEventListener('click', showPrevImage);
}

if (lightboxNext) {
    lightboxNext.addEventListener('click', showNextImage);
}

// Close lightbox when clicking outside image
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevImage();
    if (e.key === 'ArrowRight') showNextImage();
});

// ============================================
// Copy to Clipboard for Bank Details
// ============================================
const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-copy');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const textToCopy = targetElement.textContent.trim();

            // Create temporary textarea for copying
            const textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();

            try {
                document.execCommand('copy');

                // Visual feedback
                const originalHTML = button.innerHTML;
                button.innerHTML = '<i class="fas fa-check"></i> Copied!';
                button.style.background = 'linear-gradient(135deg, #2d6a43 0%, #1a472a 100%)';
                button.style.color = '#ffffff';

                setTimeout(() => {
                    button.innerHTML = originalHTML;
                    button.style.background = '';
                    button.style.color = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text:', err);
                alert('Failed to copy. Please select and copy manually.');
            }

            document.body.removeChild(textarea);
        }
    });
});

// ============================================
// Contact Form Submission
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Create mailto link
        const mailtoLink = `mailto:info@nipongallah.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        // Open default email client
        window.location.href = mailtoLink;

        // Optional: Show success message
        alert('Thank you for your message! Your default email client will open.');

        // Reset form
        contactForm.reset();
    });
}

// ============================================
// Scroll to Top Button
// ============================================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// Scroll Animations (AOS - Animate on Scroll)
// ============================================
const animatedElements = document.querySelectorAll('[data-aos]');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

animatedElements.forEach(element => {
    observer.observe(element);
});

// ============================================
// Update Current Year in Footer
// ============================================
const currentYearSpan = document.getElementById('currentYear');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// ============================================
// Lazy Loading for Images
// ============================================
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

// ============================================
// Initialize Placeholder Images for Gallery
// ============================================
function generatePlaceholderImages() {
    const galleryGrid = document.getElementById('galleryGrid');

    // If using online placeholder service
    const placeholderImages = [
        { url: 'https://via.placeholder.com/600x450/1a472a/d4af37?text=Community+Meeting', title: 'Monthly Assembly', desc: 'General Assembly Meeting' },
        { url: 'https://via.placeholder.com/600x450/2d6a43/ffffff?text=Cultural+Event', title: 'Cultural Celebration', desc: 'Traditional Event' },
        { url: 'https://via.placeholder.com/600x450/1a472a/d4af37?text=Member+Activities', title: 'Community Support', desc: 'Solidarity Activities' },
        { url: 'https://via.placeholder.com/600x450/2d6a43/ffffff?text=Group+Photo', title: 'Members Together', desc: 'Annual Gathering' },
        { url: 'https://via.placeholder.com/600x450/1a472a/d4af37?text=Njangi+Distribution', title: 'Njangi Day', desc: 'Financial Distribution' },
        { url: 'https://via.placeholder.com/600x450/2d6a43/ffffff?text=Community+Service', title: 'Community Service', desc: 'Helping the Needy' }
    ];

    // Update existing gallery items with placeholder URLs
    const galleryItems = galleryGrid.querySelectorAll('.gallery-item img');
    galleryItems.forEach((img, index) => {
        if (placeholderImages[index]) {
            img.src = placeholderImages[index].url;
            img.alt = placeholderImages[index].title;
        }
    });
}

// Call on page load
window.addEventListener('load', () => {
    generatePlaceholderImages();
});

// ============================================
// Performance: Debounce Scroll Events
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions if needed
// Example: const debouncedScrollHandler = debounce(scrollHandler, 100);

// ============================================
// Expandable Program Cards
// ============================================
const expandButtons = document.querySelectorAll('.expand-btn');

expandButtons.forEach(button => {
    button.addEventListener('click', function () {
        const card = this.closest('.program-card');
        const isExpanded = card.classList.contains('expanded');
        const textSpan = this.querySelector('.expand-text');

        // Toggle expanded state
        card.classList.toggle('expanded');

        // Update ARIA attribute
        this.setAttribute('aria-expanded', !isExpanded);

        // Update button text
        if (card.classList.contains('expanded')) {
            textSpan.textContent = 'Show Less';
        } else {
            textSpan.textContent = 'Learn More';
        }
    });

    // Keyboard accessibility
    button.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});

// ============================================
// Console Welcome Message
// ============================================
console.log(
    '%c Nipong Allah Social Group ',
    'background: linear-gradient(135deg, #1a472a 0%, #2d6a43 100%); color: #d4af37; font-size: 20px; padding: 10px; font-weight: bold;'
);
console.log(
    '%c Unity · Progress · Development ',
    'color: #d4af37; font-size: 14px; font-style: italic;'
);
console.log('Website developed with ❤️ for the Pinyin Clan community');
