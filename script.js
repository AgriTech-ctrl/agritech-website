// Crop data with spacing requirements, costs, and seasonal information
const cropData = {
    tomatoes: {
        rowSpacing: 90, // cm between rows
        plantSpacing: 60, // cm between plants
        costPerPlant: 45.00, // Rands
        fertilizerCostPerPlant: 15.00, // Rands for fertilizer per plant
        name: "Tomatoes",
        plantingSeason: "Spring-Summer (Sep-Feb)",
        harvestTime: "3-4 months after planting",
        bestMonths: "September, October, November, December, January, February"
    },
    cabbage: {
        rowSpacing: 60, // cm between rows
        plantSpacing: 45, // cm between plants
        costPerPlant: 25.00, // Rands
        fertilizerCostPerPlant: 12.00, // Rands for fertilizer per plant
        name: "Cabbage",
        plantingSeason: "Autumn-Winter (Mar-Aug)",
        harvestTime: "3-4 months after planting",
        bestMonths: "March, April, May, June, July, August"
    },
    onions: {
        rowSpacing: 30, // cm between rows
        plantSpacing: 10, // cm between plants
        costPerPlant: 8.00, // Rands
        fertilizerCostPerPlant: 5.00, // Rands for fertilizer per plant
        name: "Onions",
        plantingSeason: "Autumn-Winter (Mar-Aug)",
        harvestTime: "4-5 months after planting",
        bestMonths: "March, April, May, June, July, August"
    },
    beetroot: {
        rowSpacing: 40, // cm between rows
        plantSpacing: 15, // cm between plants
        costPerPlant: 12.00, // Rands
        fertilizerCostPerPlant: 8.00, // Rands for fertilizer per plant
        name: "Beetroot",
        plantingSeason: "Autumn-Winter (Mar-Aug)",
        harvestTime: "2-3 months after planting",
        bestMonths: "March, April, May, June, July, August"
    },
    carrots: {
        rowSpacing: 30, // cm between rows
        plantSpacing: 8, // cm between plants
        costPerPlant: 9.00, // Rands
        fertilizerCostPerPlant: 6.00, // Rands for fertilizer per plant
        name: "Carrots",
        plantingSeason: "Autumn-Winter (Mar-Aug)",
        harvestTime: "2-3 months after planting",
        bestMonths: "March, April, May, June, July, August"
    },
    potatoes: {
        rowSpacing: 75, // cm between rows
        plantSpacing: 30, // cm between plants
        costPerPlant: 15.00, // Rands
        fertilizerCostPerPlant: 10.00, // Rands for fertilizer per plant
        name: "Potatoes",
        plantingSeason: "Autumn-Winter (Mar-Aug)",
        harvestTime: "3-4 months after planting",
        bestMonths: "March, April, May, June, July, August"
    }
};

// DOM elements
const lengthInput = document.getElementById('length');
const widthInput = document.getElementById('width');
const cropTypeSelect = document.getElementById('crop-type');
const calculateBtn = document.getElementById('calculate-btn');
const resultsSection = document.getElementById('results');
const plantsNeededEl = document.getElementById('plants-needed');
const estimatedCostEl = document.getElementById('estimated-cost');
const fertilizerCostEl = document.getElementById('fertilizer-cost');
const totalCostEl = document.getElementById('total-cost');
const spacingInfoEl = document.getElementById('spacing-info');
const plantingSeasonEl = document.getElementById('planting-season');
const harvestTimeEl = document.getElementById('harvest-time');

// Mobile navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Language toggle
const languageToggle = document.getElementById('language-toggle');
let currentLanguage = 'en';

// Smooth scrolling for navigation links
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

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Calculate crop requirements
function calculateCropRequirements() {
    const length = parseFloat(lengthInput.value);
    const width = parseFloat(widthInput.value);
    const cropType = cropTypeSelect.value;

    // Validation
    if (!length || !width || !cropType) {
        alert('Please fill in all fields');
        return;
    }

    if (length <= 0 || width <= 0) {
        alert('Length and width must be positive numbers');
        return;
    }

    // Calculate area and perimeter from length and width
    const area = length * width;
    const perimeter = 2 * (length + width);

    const crop = cropData[cropType];
    if (!crop) {
        alert('Please select a valid crop type');
        return;
    }

    // Calculate plants needed based on area and spacing
    // Convert spacing from centimeters to meters
    const rowSpacingInMeters = crop.rowSpacing / 100;
    const plantSpacingInMeters = crop.plantSpacing / 100;
    
    // Calculate plants per square meter using both row and plant spacing
    const plantsPerSqMeter = 1 / (rowSpacingInMeters * plantSpacingInMeters);
    
    // Calculate total plants needed
    const plantsNeeded = Math.floor(area * plantsPerSqMeter);
    
    // Calculate costs
    const seedsCost = plantsNeeded * crop.costPerPlant;
    const fertilizerCost = plantsNeeded * crop.fertilizerCostPerPlant;
    const totalCost = seedsCost + fertilizerCost;
    
    // Calculate spacing information
    const spacingInfo = `Rows: ${crop.rowSpacing}cm apart, Plants: ${crop.plantSpacing}cm apart`;
    
    // Display results
    plantsNeededEl.textContent = plantsNeeded;
    estimatedCostEl.textContent = `R${seedsCost.toFixed(2)}`;
    fertilizerCostEl.textContent = `R${fertilizerCost.toFixed(2)}`;
    totalCostEl.textContent = `R${totalCost.toFixed(2)}`;
    spacingInfoEl.textContent = spacingInfo;
    plantingSeasonEl.textContent = crop.plantingSeason;
    harvestTimeEl.textContent = crop.harvestTime;
    
    // Show results section
    resultsSection.style.display = 'block';
    
    // Scroll to results
    resultsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Event listeners
calculateBtn.addEventListener('click', calculateCropRequirements);

// Allow Enter key to trigger calculation
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && (e.target.id === 'length' || e.target.id === 'width' || e.target.id === 'crop-type')) {
        calculateCropRequirements();
    }
});

// Form validation and real-time feedback
function validateInputs() {
    const length = lengthInput.value;
    const width = widthInput.value;
    const cropType = cropTypeSelect.value;
    
    const isValid = length && width && cropType && 
                   parseFloat(length) > 0 && parseFloat(width) > 0;
    
    calculateBtn.disabled = !isValid;
    calculateBtn.style.opacity = isValid ? '1' : '0.6';
}

// Add event listeners for real-time validation
lengthInput.addEventListener('input', validateInputs);
widthInput.addEventListener('input', validateInputs);
cropTypeSelect.addEventListener('change', validateInputs);

// Initialize validation
validateInputs();

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation to calculate button
    calculateBtn.addEventListener('click', function() {
        const originalText = this.textContent;
        this.textContent = 'Calculating...';
        this.disabled = true;
        
        setTimeout(() => {
            this.textContent = originalText;
            this.disabled = false;
        }, 1000);
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.guide-card, .money-card, .result-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Add scroll animations
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

// Observe sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add a simple notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: ${type === 'success' ? '#22c55e' : '#000'};
        color: #fff;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 1001;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Enhanced calculation with better feedback
function enhancedCalculateCropRequirements() {
    const length = parseFloat(lengthInput.value);
    const width = parseFloat(widthInput.value);
    const cropType = cropTypeSelect.value;

    // Enhanced validation
    if (!length || !width || !cropType) {
        showNotification('Please fill in all fields', 'error');
        return;
    }

    if (length <= 0 || width <= 0) {
        showNotification('Length and width must be positive numbers', 'error');
        return;
    }

    // Calculate area and perimeter from length and width
    const area = length * width;
    const perimeter = 2 * (length + width);

    const crop = cropData[cropType];
    if (!crop) {
        showNotification('Please select a valid crop type', 'error');
        return;
    }

    // Calculate with more precision
    const rowSpacingInMeters = crop.rowSpacing / 100;
    const plantSpacingInMeters = crop.plantSpacing / 100;
    const plantsPerSqMeter = 1 / (rowSpacingInMeters * plantSpacingInMeters);
    const plantsNeeded = Math.floor(area * plantsPerSqMeter);
    const seedsCost = plantsNeeded * crop.costPerPlant;
    const fertilizerCost = plantsNeeded * crop.fertilizerCostPerPlant;
    const totalCost = seedsCost + fertilizerCost;
    
    // Display results
    plantsNeededEl.textContent = plantsNeeded;
    estimatedCostEl.textContent = `R${seedsCost.toFixed(2)}`;
    fertilizerCostEl.textContent = `R${fertilizerCost.toFixed(2)}`;
    totalCostEl.textContent = `R${totalCost.toFixed(2)}`;
    spacingInfoEl.textContent = `Rows: ${crop.rowSpacing}cm apart, Plants: ${crop.plantSpacing}cm apart`;
    plantingSeasonEl.textContent = crop.plantingSeason;
    harvestTimeEl.textContent = crop.harvestTime;
    
    resultsSection.style.display = 'block';
    
    // Show success notification
    showNotification(`Calculated ${plantsNeeded} ${crop.name} seeds for R${totalCost.toFixed(2)}`, 'success');
    
    // Scroll to results
    resultsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Replace the original calculation function
calculateBtn.removeEventListener('click', calculateCropRequirements);
calculateBtn.addEventListener('click', enhancedCalculateCropRequirements);

// Language switching functionality
function switchLanguage() {
    currentLanguage = languageToggle.value;
    
    // Update all elements with data attributes
    document.querySelectorAll('[data-en]').forEach(element => {
        const text = element.getAttribute(`data-${currentLanguage}`);
        if (text) element.textContent = text;
    });
    
    // Update crop names in dropdown
    const cropOptions = document.querySelectorAll('#crop-type option');
    cropOptions.forEach(option => {
        if (option.value) {
            const text = option.getAttribute(`data-${currentLanguage}`);
            if (text) option.textContent = text;
        }
    });
    
    // Update placeholders
    const lengthInput = document.getElementById('length');
    const widthInput = document.getElementById('width');
    
    const placeholders = {
        'en': ['Enter length in meters', 'Enter width in meters'],
        'se': ['Kenya bolelele ka meters', 'Kenya bophara ka meters'],
        've': ['Nga bolelele bwa meters', 'Nga bophara bwa meters'],
        'ts': ['Ngenisa bolelele hi meters', 'Ngenisa bophara hi meters']
    };
    
    lengthInput.placeholder = placeholders[currentLanguage][0];
    widthInput.placeholder = placeholders[currentLanguage][1];
}

// Add event listener for language toggle
languageToggle.addEventListener('change', switchLanguage);

