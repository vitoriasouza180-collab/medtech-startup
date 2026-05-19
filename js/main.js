// ==================== MODALS FUNCTIONS ====================

const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const agendeBtn = document.getElementById('agendeBtn');
const closeBtns = document.querySelectorAll('.close');

// Open Login Modal
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Open Signup Modal
signupBtn.addEventListener('click', () => {
    signupModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Agendamento button opens Signup
agendeBtn.addEventListener('click', () => {
    signupModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Close Modals
closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

// Close Modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (e.target === signupModal) {
        signupModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Switch between modals
function switchModal(modalType) {
    if (modalType === 'login') {
        signupModal.style.display = 'none';
        loginModal.style.display = 'block';
    } else {
        loginModal.style.display = 'none';
        signupModal.style.display = 'block';
    }
    return false;
}

// ==================== FORM VALIDATION ====================

// CPF Formatting
const cpfInput = document.getElementById('cpfInput');
if (cpfInput) {
    cpfInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        
        if (value.length > 6) {
            value = value.slice(0, 3) + '.' + value.slice(3, 6) + '.' + value.slice(6, 9) + '-' + value.slice(9);
        } else if (value.length > 3) {
            value = value.slice(0, 3) + '.' + value.slice(3, 6) + '.' + value.slice(6);
        } else if (value.length > 0) {
            value = value.slice(0, 3) + '.' + value.slice(3);
        }
        
        e.target.value = value;
    });
}

// Phone Formatting
const phoneInput = document.getElementById('phoneInput');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        
        if (value.length > 7) {
            value = '(' + value.slice(0, 2) + ') ' + value.slice(2, 7) + '-' + value.slice(7);
        } else if (value.length > 2) {
            value = '(' + value.slice(0, 2) + ') ' + value.slice(2);
        } else if (value.length > 0) {
            value = '(' + value;
        }
        
        e.target.value = value;
    });
}

// Login Form Validation
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Simple validation
        if (!email || !password) {
            alert('Por favor, preencha todos os campos');
            return;
        }
        
        // Email or phone validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
        
        if (!emailRegex.test(email) && !phoneRegex.test(email)) {
            alert('Por favor, insira um email ou telefone válido');
            return;
        }
        
        // Success message
        alert('Login realizado com sucesso! (Esta é uma demonstração)');
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        loginForm.reset();
    });
}

// Signup Form Validation
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const inputs = signupForm.querySelectorAll('input, textarea');
        let isValid = true;
        
        // Check all fields
        inputs.forEach(input => {
            if (!input.value) {
                isValid = false;
                input.style.borderColor = '#ff5252';
            } else {
                input.style.borderColor = '#E0E0E0';
            }
        });
        
        if (!isValid) {
            alert('Por favor, preencha todos os campos');
            return;
        }
        
        // Password match validation
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('As senhas não correspondem');
            return;
        }
        
        if (password.length < 6) {
            alert('A senha deve ter no mínimo 6 caracteres');
            return;
        }
        
        // Success message
        alert('Conta criada com sucesso! (Esta é uma demonstração)');
        signupModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        signupForm.reset();
    });
}

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const inputs = contactForm.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            alert('Por favor, preencha todos os campos');
            return;
        }
        
        // Email validation
        const email = inputs[1].value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido');
            return;
        }
        
        alert('Mensagem enviada com sucesso! Obrigado por entrar em contato.');
        contactForm.reset();
    });
}

// ==================== NAVIGATION ====================

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Close mobile menu if open
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// ==================== SCROLL EFFECTS ====================

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ==================== LOADING SCREEN ====================

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    // The loading screen will auto-hide after 2.5s due to CSS animation
    // This ensures it stays visible even if page loads quickly
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }, 2500);
});

// ==================== ANIMATIONS ON SCROLL ====================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ==================== SMOOTH SCROLL ====================

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

// ==================== ACTIVE NAV LINK ====================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== UTILITY FUNCTIONS ====================

// Format currency
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

// Format date
function formatDate(date) {
    return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
}

// ==================== LOCAL STORAGE ====================

// Save user preferences
function saveUserPreferences(preferences) {
    localStorage.setItem('medtech_preferences', JSON.stringify(preferences));
}

// Get user preferences
function getUserPreferences() {
    const prefs = localStorage.getItem('medtech_preferences');
    return prefs ? JSON.parse(prefs) : null;
}

// Clear user data (on logout)
function clearUserData() {
    localStorage.removeItem('medtech_preferences');
}

// ==================== ACCESSIBILITY ====================

// Add focus visible for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('using-keyboard');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('using-keyboard');
});

// ==================== CONSOLE MESSAGES ====================

console.log('%c🏥 MEDTECH - Plataforma de Saúde Digital', 'color: #4CAF50; font-size: 20px; font-weight: bold;');
console.log('%cOnde a Medicina trabalha com a inovação.', 'color: #66BB6A; font-size: 14px;');
console.log('%cBem-vindo ao nosso site! 💚', 'color: #4CAF50; font-size: 12px;');
