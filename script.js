// Data
let currentAuthMode = 'login';
let currentUser = null;

// Mock data
const categories = [
   { id: 1, name: 'E-commerce', count: 15, image: 'image.png' },
    { id: 2, name: 'Dashboard', icon: 'fas fa-chart-bar', count: 12, color: '#10b981' },
    { id: 3, name: 'Real Estate', icon: 'fas fa-home', count: 8, color: '#8b5cf6' },
    { id: 4, name: 'Productivity', icon: 'fas fa-check-square', count: 10, color: '#f59e0b' },
    { id: 5, name: 'Restaurant', icon: 'fas fa-utensils', count: 6, color: '#ef4444' },
    { id: 6, name: 'Education', icon: 'fas fa-book-open', count: 9, color: '#6366f1' },
    { id: 7, name: 'Healthcare', icon: 'fas fa-heart', count: 5, color: '#ec4899' },
    { id: 8, name: 'Finance', icon: 'fas fa-dollar-sign', count: 7, color: '#059669' }
];

const projects = [
    {
        id: 1,
        title: 'Modern E-commerce Platform',
        description: 'A complete e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, payment processing with Stripe, order tracking, and admin dashboard.',
        shortDescription: 'Complete e-commerce solution with React, Node.js, and Stripe integration',
        price: 299,
        originalPrice: 399,
        category: 'E-commerce',
        images: [
            'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        demoUrl: 'https://demo-ecommerce.example.com',
        seller: {
            name: 'Alex Chen',
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
            rating: 4.9,
            totalSales: 47
        },
        features: [
            'User authentication and authorization',
            'Product catalog with search and filters',
            'Shopping cart and wishlist',
            'Secure payment processing',
            'Order management system',
            'Admin dashboard',
            'Email notifications',
            'Mobile-responsive design'
        ],
        technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Stripe API', 'JWT', 'Tailwind CSS'],
        includesSourceCode: true,
        includesDocumentation: true,
        includesSupport: true,
        views: 1247,
        likes: 89,
        type: 'website'
    },
    {
        id: 2,
        title: 'Social Media Dashboard',
        description: 'A comprehensive social media management dashboard that allows users to manage multiple social media accounts from one place. Built with Vue.js and Firebase.',
        shortDescription: 'Social media management dashboard with analytics and scheduling',
        price: 199,
        category: 'Dashboard',
        images: [
            'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        demoUrl: 'https://social-dashboard.example.com',
        seller: {
            name: 'Sarah Johnson',
            avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
            rating: 4.8,
            totalSales: 32
        },
        features: [
            'Multi-platform social media integration',
            'Analytics and reporting',
            'Post scheduling',
            'Team collaboration tools',
            'Content calendar',
            'Engagement tracking'
        ],
        technologies: ['Vue.js', 'Firebase', 'Chart.js', 'Twitter API', 'Facebook API'],
        includesSourceCode: true,
        includesDocumentation: true,
        includesSupport: false,
        views: 892,
        likes: 67,
        type: 'project'
    },
    {
        id: 3,
        title: 'Real Estate Website Template',
        description: 'A beautiful, modern real estate website template with property listings, search functionality, agent profiles, and contact forms.',
        shortDescription: 'Modern real estate website with property listings and search',
        price: 149,
        originalPrice: 199,
        category: 'Real Estate',
        images: [
            'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        demoUrl: 'https://realestate-template.example.com',
        seller: {
            name: 'Mike Rodriguez',
            avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
            rating: 4.7,
            totalSales: 28
        },
        features: [
            'Property listing pages',
            'Advanced search and filters',
            'Agent profiles',
            'Contact forms',
            'Image galleries',
            'Interactive maps',
            'SEO optimized'
        ],
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
        includesSourceCode: true,
        includesDocumentation: true,
        includesSupport: true,
        views: 634,
        likes: 45,
        type: 'website'
    },
    {
        id: 4,
        title: 'Task Management App',
        description: 'A powerful task management application with team collaboration features. Built with React and Express.js.',
        shortDescription: 'Team collaboration task management app with real-time features',
        price: 179,
        category: 'Productivity',
        images: [
            'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        demoUrl: 'https://taskmanager.example.com',
        seller: {
            name: 'Alex Chen',
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
            rating: 4.9,
            totalSales: 47
        },
        features: [
            'Kanban-style project boards',
            'Task assignments and tracking',
            'Team collaboration',
            'Time tracking',
            'Real-time notifications',
            'File attachments'
        ],
        technologies: ['React', 'Express.js', 'MongoDB', 'Socket.io', 'JWT'],
        includesSourceCode: true,
        includesDocumentation: false,
        includesSupport: true,
        views: 756,
        likes: 52,
        type: 'project'
    },
    {
        id: 5,
        title: 'Restaurant Website & Ordering System',
        description: 'Complete restaurant website with online ordering system. Features menu management, online reservations, order tracking, and payment integration.',
        shortDescription: 'Complete restaurant website with online ordering and reservations',
        price: 249,
        category: 'Restaurant',
        images: [
            'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        demoUrl: 'https://restaurant-demo.example.com',
        seller: {
            name: 'Sarah Johnson',
            avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
            rating: 4.8,
            totalSales: 32
        },
        features: [
            'Online menu with categories',
            'Order management system',
            'Table reservations',
            'Payment processing',
            'Customer reviews',
            'Staff management'
        ],
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
        includesSourceCode: true,
        includesDocumentation: true,
        includesSupport: true,
        views: 923,
        likes: 71,
        type: 'website'
    },
    {
        id: 6,
        title: 'Learning Management System',
        description: 'Comprehensive LMS platform for online education. Includes course creation, student enrollment, progress tracking, quizzes, and certificates.',
        shortDescription: 'Complete LMS platform for online education and course management',
        price: 399,
        originalPrice: 499,
        category: 'Education',
        images: [
            'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        demoUrl: 'https://lms-demo.example.com',
        seller: {
            name: 'Mike Rodriguez',
            avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
            rating: 4.7,
            totalSales: 28
        },
        features: [
            'Course creation and management',
            'Student enrollment system',
            'Video streaming',
            'Interactive quizzes',
            'Progress tracking',
            'Certificates generation'
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Socket.io'],
        includesSourceCode: true,
        includesDocumentation: true,
        includesSupport: true,
        views: 1156,
        likes: 94,
        type: 'project'
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadCategories();
    loadProjects();
    setupEventListeners();
});

// Load categories
function loadCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    categoriesGrid.innerHTML = '';
    
    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.innerHTML = `
            <div class="category-icon" style="background: ${category.color}">
                <i class="${category.icon}"></i>
            </div>
            <h3 class="category-name">${category.name}</h3>
            <p class="category-count">${category.count} projects</p>
        `;
        categoriesGrid.appendChild(categoryCard);
    });
}

// Load projects
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';
    
    projects.slice(0, 6).forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Create project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => openProjectModal(project);
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.images[0]}" alt="${project.title}">
            <div class="price-badge">
                <span class="price">$${project.price}</span>
                ${project.originalPrice ? `<span class="original-price">$${project.originalPrice}</span>` : ''}
            </div>
            <div class="type-badge type-${project.type}">
                ${project.type === 'website' ? 'Website' : 'Project'}
            </div>
            <div class="project-overlay">
                <button class="overlay-btn">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="overlay-btn">
                    <i class="fas fa-heart"></i>
                </button>
                ${project.demoUrl ? `
                    <button class="overlay-btn" onclick="event.stopPropagation(); window.open('${project.demoUrl}', '_blank')">
                        <i class="fas fa-external-link-alt"></i>
                    </button>
                ` : ''}
            </div>
        </div>
        <div class="project-content">
            <div class="project-meta">
                <span class="category-tag">${project.category}</span>
                <div class="project-views">
                    <i class="fas fa-eye"></i>
                    <span>${project.views}</span>
                </div>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.shortDescription}</p>
            <div class="project-technologies">
                ${project.technologies.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                ${project.technologies.length > 3 ? `<span class="tech-tag">+${project.technologies.length - 3} more</span>` : ''}
            </div>
            <div class="project-features">
                <div class="feature-icons">
                    ${project.includesSourceCode ? '<i class="fas fa-code" title="Source Code Included"></i>' : ''}
                    ${project.includesDocumentation ? '<i class="fas fa-file-text" title="Documentation Included"></i>' : ''}
                    ${project.includesSupport ? '<i class="fas fa-headphones" title="Support Included"></i>' : ''}
                </div>
                <div class="project-rating">
                    <i class="fas fa-star"></i>
                    <span>${project.seller.rating || 'New'}</span>
                </div>
            </div>
            <div class="project-footer">
                <div class="seller-info">
                    <img src="${project.seller.avatar}" alt="${project.seller.name}" class="seller-avatar">
                    <div class="seller-details">
                        <div class="seller-name">${project.seller.name}</div>
                        <div class="seller-sales">${project.seller.totalSales} sales</div>
                    </div>
                </div>
                <div class="project-likes">
                    <i class="fas fa-heart"></i>
                    <span>${project.likes}</span>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Auth Modal Functions
function openAuthModal(mode) {
    currentAuthMode = mode;
    const modal = document.getElementById('authModal');
    const title = document.getElementById('modalTitle');
    const subtitle = document.getElementById('modalSubtitle');
    const nameGroup = document.getElementById('nameGroup');
    const roleGroup = document.getElementById('roleGroup');
    const confirmPasswordGroup = document.getElementById('confirmPasswordGroup');
    const submitText = document.getElementById('submitText');
    const switchText = document.getElementById('switchText');
    
    if (mode === 'login') {
        title.textContent = 'Welcome Back';
        subtitle.textContent = 'Sign in to your account to continue';
        nameGroup.style.display = 'none';
        roleGroup.style.display = 'none';
        confirmPasswordGroup.style.display = 'none';
        submitText.textContent = 'Sign In';
        switchText.innerHTML = "Don't have an account? <button class='switch-btn' onclick='switchAuthMode()'>Sign Up</button>";
    } else {
        title.textContent = 'Create Account';
        subtitle.textContent = 'Join our marketplace community';
        nameGroup.style.display = 'block';
        roleGroup.style.display = 'block';
        confirmPasswordGroup.style.display = 'block';
        submitText.textContent = 'Create Account';
        switchText.innerHTML = "Already have an account? <button class='switch-btn' onclick='switchAuthMode()'>Sign In</button>";
    }
    
    modal.classList.add('active');
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    modal.classList.remove('active');
}

function switchAuthMode() {
    const newMode = currentAuthMode === 'login' ? 'register' : 'login';
    openAuthModal(newMode);
}

function togglePassword() {
    const passwordInput = document.querySelector('input[name="password"]');
    const toggleBtn = document.querySelector('.password-toggle i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.className = 'fas fa-eye-slash';
    } else {
        passwordInput.type = 'password';
        toggleBtn.className = 'fas fa-eye';
    }
}

// Project Modal Functions
function openProjectModal(project) {
    const modal = document.getElementById('projectModal');
    const content = document.getElementById('projectModalContent');
    
    content.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; padding: 2rem;">
            <div>
                <div style="position: relative; margin-bottom: 1rem; border-radius: 1rem; overflow: hidden; background: #f3f4f6;">
                    <img src="${project.images[0]}" alt="${project.title}" style="width: 100%; height: 24rem; object-fit: cover;">
                    ${project.demoUrl ? `
                        <div style="position: absolute; bottom: 1rem; right: 1rem;">
                            <a href="${project.demoUrl}" target="_blank" class="btn-primary" style="display: flex; align-items: center; gap: 0.5rem;">
                                <i class="fas fa-external-link-alt"></i>
                                Live Demo
                            </a>
                        </div>
                    ` : ''}
                </div>
                ${project.images.length > 1 ? `
                    <div style="display: flex; gap: 0.5rem; overflow-x: auto;">
                        ${project.images.map((image, index) => `
                            <img src="${image}" alt="${project.title} ${index + 1}" 
                                 style="width: 5rem; height: 5rem; object-fit: cover; border-radius: 0.5rem; cursor: pointer; border: 2px solid ${index === 0 ? '#2563eb' : '#e5e7eb'};">
                        `).join('')}
                    </div>
                ` : ''}
            </div>
            
            <div>
                <div style="margin-bottom: 1.5rem;">
                    <h1 style="font-size: 2rem; font-weight: 800; margin-bottom: 1rem;">${project.title}</h1>
                    
                    <div style="display: flex; align-items: center; gap: 1.5rem; margin-bottom: 1rem; font-size: 0.875rem; color: #6b7280;">
                        <div style="display: flex; align-items: center; gap: 0.25rem;">
                            <i class="fas fa-eye"></i>
                            ${project.views} views
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.25rem;">
                            <i class="fas fa-heart"></i>
                            ${project.likes} likes
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.25rem;">
                            <i class="fas fa-calendar"></i>
                            Jan 2024
                        </div>
                    </div>
                    
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
                        <span style="font-size: 2.5rem; font-weight: 800;">$${project.price}</span>
                        ${project.originalPrice ? `<span style="font-size: 1.25rem; color: #9ca3af; text-decoration: line-through;">$${project.originalPrice}</span>` : ''}
                    </div>
                    
                    <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                        ${project.includesSourceCode ? `
                            <div style="display: flex; align-items: center; background: #dcfce7; color: #166534; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem;">
                                <i class="fas fa-code" style="margin-right: 0.25rem;"></i>
                                Source Code
                            </div>
                        ` : ''}
                        ${project.includesDocumentation ? `
                            <div style="display: flex; align-items: center; background: #dbeafe; color: #1e40af; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem;">
                                <i class="fas fa-file-text" style="margin-right: 0.25rem;"></i>
                                Documentation
                            </div>
                        ` : ''}
                        ${project.includesSupport ? `
                            <div style="display: flex; align-items: center; background: #ede9fe; color: #6b21a8; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem;">
                                <i class="fas fa-headphones" style="margin-right: 0.25rem;"></i>
                                Support
                            </div>
                        ` : ''}
                    </div>
                    
                    <div style="display: flex; gap: 0.75rem; margin-bottom: 2rem;">
                        <button class="btn-primary" style="flex: 1; padding: 0.75rem 1.5rem;">Purchase Now</button>
                        <button class="btn-outline" style="padding: 0.75rem 1.5rem;">Add to Cart</button>
                        <button class="btn-outline" style="padding: 0.75rem; width: auto;">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
                
                <div style="border-bottom: 2px solid #f3f4f6; margin-bottom: 1.5rem;">
                    <div style="display: flex; gap: 1.5rem;">
                        <button style="padding: 0.5rem 0.25rem; border-bottom: 2px solid #2563eb; color: #2563eb; background: none; border-top: none; border-left: none; border-right: none; font-weight: 600; cursor: pointer;">Overview</button>
                        <button style="padding: 0.5rem 0.25rem; border-bottom: 2px solid transparent; color: #6b7280; background: none; border-top: none; border-left: none; border-right: none; font-weight: 600; cursor: pointer;">Features</button>
                        <button style="padding: 0.5rem 0.25rem; border-bottom: 2px solid transparent; color: #6b7280; background: none; border-top: none; border-left: none; border-right: none; font-weight: 600; cursor: pointer;">Seller</button>
                    </div>
                </div>
                
                <div>
                    <div style="margin-bottom: 1rem;">
                        <h3 style="font-weight: 600; margin-bottom: 0.5rem;">Description</h3>
                        <p style="color: #6b7280; line-height: 1.6;">${project.description}</p>
                    </div>
                    
                    <div>
                        <h3 style="font-weight: 600; margin-bottom: 0.75rem;">Technologies Used</h3>
                        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                            ${project.technologies.map(tech => `
                                <span style="background: #f3f4f6; color: #374151; padding: 0.25rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;">${tech}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
}

// Navigation Functions
function slideProjects(direction) {
    // This would implement carousel functionality
    console.log('Sliding projects:', direction);
}

function toggleMobileMenu() {
    // This would implement mobile menu toggle
    console.log('Toggle mobile menu');
}

// Setup event listeners
function setupEventListeners() {
    // Auth form submission
    document.getElementById('authForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Simulate authentication
        setTimeout(() => {
            currentUser = {
                name: data.name || 'John Doe',
                email: data.email,
                role: data.role || 'buyer'
            };
            closeAuthModal();
            updateUIForLoggedInUser();
        }, 1000);
    });
    
    // Close modals when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-overlay')) {
            closeAuthModal();
            closeProjectModal();
        }
    });
    
    // Smooth scrolling for anchor links
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
}

function updateUIForLoggedInUser() {
    // Update header to show user info instead of auth buttons
    const authButtons = document.querySelector('.auth-buttons');
    if (authButtons && currentUser) {
        authButtons.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem;">
                <button style="background: none; border: none; color: #6b7280; cursor: pointer;">
                    <i class="fas fa-heart"></i>
                </button>
                <button style="background: none; border: none; color: #6b7280; cursor: pointer;">
                    <i class="fas fa-bell"></i>
                </button>
                <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem; border-radius: 0.5rem; background: #f9fafb; cursor: pointer;">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150" 
                         alt="${currentUser.name}" style="width: 2rem; height: 2rem; border-radius: 50%; object-fit: cover;">
                    <span style="font-weight: 500; color: #374151;">${currentUser.name}</span>
                </div>
            </div>
        `;
    }
}
