// Crop data with spacing requirements, costs, and seasonal information
const cropData = {
    tomatoes: {
        rowSpacing: 90, // cm between rows
        plantSpacing: 60, // cm between plants
        seedsPerGram: 300, // approximate seeds per gram
        packetCosts: {
            '10g': 25.00,  // Rands per 10g packet
            '20g': 45.00,  // Rands per 20g packet
            '30g': 65.00,  // Rands per 30g packet
            '50g': 100.00, // Rands per 50g packet
            '100g': 180.00 // Rands per 100g packet
        },
        fertilizerCostPerPlant: 3.50, // Rands for fertilizer per plant (affordable SA pricing)
        name: "Tomatoes",
        plantingSeason: {
            'en': "Spring-Summer (Sep-Feb)",
            'se': "Sebaka sa go tloga ka September go ya ka February",
            've': "Tshifhinga tsha u thoma nga September nga u fhedza nga February",
            'ts': "Nkarhi wa ku sungula nga September nga ku fela nga February"
        },
        harvestTime: {
            'en': "3-4 months after planting",
            'se': "Dikgwedi tše 3-4 ka morago ga go lema",
            've': "Dikgwedi dza 3-4 nga u fhedza u lema",
            'ts': "Tinyanga ta 3-4 endzhaku ka ku rima"
        },
        bestMonths: {
            'en': "September, October, November, December, January, February",
            'se': "September, October, November, December, January, February",
            've': "September, October, November, December, January, February",
            'ts': "September, October, November, December, January, February"
        }
    },
    cabbage: {
        rowSpacing: 60, // cm between rows
        plantSpacing: 45, // cm between plants
        seedsPerGram: 250, // approximate seeds per gram
        packetCosts: {
            '10g': 20.00,  // Rands per 10g packet
            '20g': 35.00,  // Rands per 20g packet
            '30g': 50.00,  // Rands per 30g packet
            '50g': 80.00,  // Rands per 50g packet
            '100g': 150.00 // Rands per 100g packet
        },
        fertilizerCostPerPlant: 2.50, // Rands for fertilizer per plant (affordable SA pricing)
        name: "Cabbage",
        plantingSeason: {
            'en': "Autumn-Winter (Mar-Aug)",
            'se': "Sebaka sa go tloga ka March go ya ka August",
            've': "Tshifhinga tsha u thoma nga March nga u fhedza nga August",
            'ts': "Nkarhi wa ku sungula nga March nga ku fela nga August"
        },
        harvestTime: {
            'en': "3-4 months after planting",
            'se': "Dikgwedi tše 3-4 ka morago ga go lema",
            've': "Dikgwedi dza 3-4 nga u fhedza u lema",
            'ts': "Tinyanga ta 3-4 endzhaku ka ku rima"
        },
        bestMonths: {
            'en': "March, April, May, June, July, August",
            'se': "March, April, May, June, July, August",
            've': "March, April, May, June, July, August",
            'ts': "March, April, May, June, July, August"
        }
    },
    onions: {
        rowSpacing: 30, // cm between rows
        plantSpacing: 10, // cm between plants
        seedsPerGram: 280, // approximate seeds per gram
        packetCosts: {
            '10g': 18.00,  // Rands per 10g packet
            '20g': 32.00,  // Rands per 20g packet
            '30g': 45.00,  // Rands per 30g packet
            '50g': 70.00,  // Rands per 50g packet
            '100g': 130.00 // Rands per 100g packet
        },
        fertilizerCostPerPlant: 1.50, // Rands for fertilizer per plant (affordable SA pricing)
        name: "Onions",
        plantingSeason: {
            'en': "Autumn-Winter (Mar-Aug)",
            'se': "Sebaka sa go tloga ka March go ya ka August",
            've': "Tshifhinga tsha u thoma nga March nga u fhedza nga August",
            'ts': "Nkarhi wa ku sungula nga March nga ku fela nga August"
        },
        harvestTime: {
            'en': "4-5 months after planting",
            'se': "Dikgwedi tše 4-5 ka morago ga go lema",
            've': "Dikgwedi dza 4-5 nga u fhedza u lema",
            'ts': "Tinyanga ta 4-5 endzhaku ka ku rima"
        },
        bestMonths: {
            'en': "March, April, May, June, July, August",
            'se': "March, April, May, June, July, August",
            've': "March, April, May, June, July, August",
            'ts': "March, April, May, June, July, August"
        }
    },
    beetroot: {
        rowSpacing: 40, // cm between rows
        plantSpacing: 15, // cm between plants
        seedsPerGram: 50, // approximate seeds per gram
        packetCosts: {
            '10g': 22.00,  // Rands per 10g packet
            '20g': 40.00,  // Rands per 20g packet
            '30g': 55.00,  // Rands per 30g packet
            '50g': 85.00,  // Rands per 50g packet
            '100g': 160.00 // Rands per 100g packet
        },
        fertilizerCostPerPlant: 2.00, // Rands for fertilizer per plant (affordable SA pricing)
        name: "Beetroot",
        plantingSeason: {
            'en': "Autumn-Winter (Mar-Aug)",
            'se': "Sebaka sa go tloga ka March go ya ka August",
            've': "Tshifhinga tsha u thoma nga March nga u fhedza nga August",
            'ts': "Nkarhi wa ku sungula nga March nga ku fela nga August"
        },
        harvestTime: {
            'en': "2-3 months after planting",
            'se': "Dikgwedi tše 2-3 ka morago ga go lema",
            've': "Dikgwedi dza 2-3 nga u fhedza u lema",
            'ts': "Tinyanga ta 2-3 endzhaku ka ku rima"
        },
        bestMonths: {
            'en': "March, April, May, June, July, August",
            'se': "March, April, May, June, July, August",
            've': "March, April, May, June, July, August",
            'ts': "March, April, May, June, July, August"
        }
    },
    carrots: {
        rowSpacing: 30, // cm between rows
        plantSpacing: 8, // cm between plants
        seedsPerGram: 800, // approximate seeds per gram
        packetCosts: {
            '10g': 15.00,  // Rands per 10g packet
            '20g': 28.00,  // Rands per 20g packet
            '30g': 40.00,  // Rands per 30g packet
            '50g': 65.00,  // Rands per 50g packet
            '100g': 120.00 // Rands per 100g packet
        },
        fertilizerCostPerPlant: 1.80, // Rands for fertilizer per plant (affordable SA pricing)
        name: "Carrots",
        plantingSeason: {
            'en': "Autumn-Winter (Mar-Aug)",
            'se': "Sebaka sa go tloga ka March go ya ka August",
            've': "Tshifhinga tsha u thoma nga March nga u fhedza nga August",
            'ts': "Nkarhi wa ku sungula nga March nga ku fela nga August"
        },
        harvestTime: {
            'en': "2-3 months after planting",
            'se': "Dikgwedi tše 2-3 ka morago ga go lema",
            've': "Dikgwedi dza 2-3 nga u fhedza u lema",
            'ts': "Tinyanga ta 2-3 endzhaku ka ku rima"
        },
        bestMonths: {
            'en': "March, April, May, June, July, August",
            'se': "March, April, May, June, July, August",
            've': "March, April, May, June, July, August",
            'ts': "March, April, May, June, July, August"
        }
    },
    potatoes: {
        rowSpacing: 75, // cm between rows
        plantSpacing: 30, // cm between plants
        seedsPerGram: 15, // approximate seeds per gram (seed potatoes)
        packetCosts: {
            '10g': 30.00,  // Rands per 10g packet
            '20g': 55.00,  // Rands per 20g packet
            '30g': 80.00,  // Rands per 30g packet
            '50g': 120.00, // Rands per 50g packet
            '100g': 220.00 // Rands per 100g packet
        },
        fertilizerCostPerPlant: 2.80, // Rands for fertilizer per plant (affordable SA pricing)
        name: "Potatoes",
        plantingSeason: {
            'en': "Autumn-Winter (Mar-Aug)",
            'se': "Sebaka sa go tloga ka March go ya ka August",
            've': "Tshifhinga tsha u thoma nga March nga u fhedza nga August",
            'ts': "Nkarhi wa ku sungula nga March nga ku fela nga August"
        },
        harvestTime: {
            'en': "3-4 months after planting",
            'se': "Dikgwedi tše 3-4 ka morago ga go lema",
            've': "Dikgwedi dza 3-4 nga u fhedza u lema",
            'ts': "Tinyanga ta 3-4 endzhaku ka ku rima"
        },
        bestMonths: {
            'en': "March, April, May, June, July, August",
            'se': "March, April, May, June, July, August",
            've': "March, April, May, June, July, August",
            'ts': "March, April, May, June, July, August"
        }
    }
};

// Brand recommendations based on budget tiers
function getBrandRecommendations(budget) {
    const language = currentLanguage || 'en';
    
    const recommendations = {
        'en': {
            basic: {
                tier: "Basic Budget (R50-100)",
                seeds: "• Starke Ayres (good value) • Local nursery brands • Builders Warehouse seeds • Co-op store brands",
                fertilizer: "• 2:3:2 fertilizer (R15-25/kg) • Chicken manure (R8-12/kg) • Make compost (free!) • Coffee grounds (free!)",
                tips: "Focus on essential items. Make your own compost to save money! Start small and grow gradually. Use kitchen scraps for free fertilizer."
            },
            good: {
                tier: "Good Budget (R100-200)",
                seeds: "• Starke Ayres • Mayford Seeds • Garden World brands • Lifestyle Garden Centre seeds",
                fertilizer: "• 2:3:2 fertilizer (R15-25/kg) • Bone meal (R20-30/kg) • Quality compost • Organic fertilizers",
                tips: "Good quality brands with reliable results. Mix of organic and chemical fertilizers. Better germination rates and plant health."
            },
            premium: {
                tier: "Premium Budget (R200+)",
                seeds: "• Starke Ayres Premium • Hygrotech • PanAmerican Seed • Professional grade varieties",
                fertilizer: "• Premium 2:3:2 • Organic compost • Liquid fertilizers • Specialized plant nutrients",
                tips: "Top-quality brands for best results. Professional-grade seeds and fertilizers. Maximum yield potential and disease resistance."
            }
        },
        'se': {
            basic: {
                tier: "Tshelete ya Motheo (R50-100)",
                seeds: "• Starke Ayres (boleng bjo botse) • Mebrand ya dikgokelo • Peo ya Builders Warehouse • Mebrand ya Co-op",
                fertilizer: "• Mošola wa 2:3:2 (R15-25/kg) • Manure ya kgoho (R8-12/kg) • Itire compost (mahala!) • Coffee grounds (mahala!)",
                tips: "Kgogomela dintlha tša bohlokwa. Itire compost ya gago go boloka tshelete! Simolla ka nyenyane gomme o gola ka go fapafapana. Šomiša ditshila tša kitšheni bakeng sa mošola wa mahala."
            },
            good: {
                tier: "Tshelete e Botse (R100-200)",
                seeds: "• Starke Ayres • Mayford Seeds • Mebrand ya Garden World • Peo ya Lifestyle Garden Centre",
                fertilizer: "• Mošola wa 2:3:2 (R15-25/kg) • Bone meal (R20-30/kg) • Compost e botse • Mošola wa tlhago",
                tips: "Mebrand e botse e nago le dipholo tše tšepago. Tswakanyo ya mošola wa tlhago le wa kemikale. Tekanyetšo e botse ya go mela le bophelo bjo botse bja dimela."
            },
            premium: {
                tier: "Tshelete ya Bohlokwa (R200+)",
                seeds: "• Starke Ayres Premium • Hygrotech • PanAmerican Seed • Mefuta ya boemo bja profešenale",
                fertilizer: "• 2:3:2 Premium • Compost ya tlhago • Mošola wa meetse • Phepo e ikgethilwego ya dimela",
                tips: "Mebrand ya boleng bjo bohlokwa bakeng sa dipholo tše botse. Peo le mošola wa boemo bja profešenale. Tekanyetšo e kgolo ya tšweletšo le tšhireletšo ya bolwetši."
            }
        },
        've': {
            basic: {
                tier: "Mari dza U Luga (R50-100)",
                seeds: "• Starke Ayres (boleng bja u luga) • Mebrand ya tshifhinga • Mbeu dza Builders Warehouse • Mebrand ya Co-op",
                fertilizer: "• Mošola wa 2:3:2 (R15-25/kg) • Manure ya kgoho (R8-12/kg) • U ite compost (mahala!) • Coffee grounds (mahala!)",
                tips: "Ṱoḓola zwi ḓo nyadzwa nga u luga. U ite compost yawe u boloka mari! Thoma nga u luga na u guda nga u fapana. Shumisa tshila tsha tshifhinga nga mošola wa mahala."
            },
            good: {
                tier: "Mari dza U Luga (R100-200)",
                seeds: "• Starke Ayres • Mayford Seeds • Mebrand ya Garden World • Mbeu dza Lifestyle Garden Centre",
                fertilizer: "• Mošola wa 2:3:2 (R15-25/kg) • Bone meal (R20-30/kg) • Compost ya u luga • Mošola wa tshifhinga",
                tips: "Mebrand ya u luga nga zwi ḓo shuma zwa u luga. Tswakanyo ya mošola wa tshifhinga na wa kemikale. Tekanyetšo ya u luga ya u mela na bophelo bja u luga bja miri."
            },
            premium: {
                tier: "Mari dza Bohlokwa (R200+)",
                seeds: "• Starke Ayres Premium • Hygrotech • PanAmerican Seed • Mefuta ya boemo bja profešenale",
                fertilizer: "• 2:3:2 Premium • Compost ya tshifhinga • Mošola wa meetse • Phepo ya u luga ya miri",
                tips: "Mebrand ya boleng bja u luga nga zwi ḓo shuma zwa u luga. Mbeu na mošola wa boemo bja profešenale. Tekanyetšo ya u luga ya tšweletšo na tšhireletšo ya tshilwadze."
            }
        },
        'ts': {
            basic: {
                tier: "Mari ya Ntlhanu (R50-100)",
                seeds: "• Starke Ayres (boleng byo lulamile) • Mebrand ya ndhawu • Mbeu ta Builders Warehouse • Mebrand ya Co-op",
                fertilizer: "• Mošola wa 2:3:2 (R15-25/kg) • Manure ya kgoho (R8-12/kg) • Swi endla compost (mahala!) • Coffee grounds (mahala!)",
                tips: "Hlaya swilo swa nkoka. Swi endla compost ya wena ku hlayisa mari! Sungula hi switsongo na ku kula hi ku fapana. Tirhisa switshila swa kitšheni hi mošola wa mahala."
            },
            good: {
                tier: "Mari yo Lulamile (R100-200)",
                seeds: "• Starke Ayres • Mayford Seeds • Mebrand ya Garden World • Mbeu ta Lifestyle Garden Centre",
                fertilizer: "• Mošola wa 2:3:2 (R15-25/kg) • Bone meal (R20-30/kg) • Compost yo lulamile • Mošola wa ntlhanu",
                tips: "Mebrand yo lulamile le swi tirhaka swa ntlhanu. Mix wa mošola wa ntlhanu na wa kemikale. Tekanyetšo yo lulamile ya ku mela na bophelo byo lulamile bya miri."
            },
            premium: {
                tier: "Mari ya Bohlokwa (R200+)",
                seeds: "• Starke Ayres Premium • Hygrotech • PanAmerican Seed • Mefuta ya boemo bya profešenale",
                fertilizer: "• 2:3:2 Premium • Compost ya ntlhanu • Mošola wa mati • Phepo yo lulamile ya miri",
                tips: "Mebrand ya boleng bya ntlhanu nga swi tirhaka swa ntlhanu. Mbeu na mošola wa boemo bya profešenale. Tekanyetšo ya ntlhanu ya tšweletšo na tšhireletšo ya swilwadi."
            }
        }
    };
    
    if (budget >= 50 && budget <= 100) {
        return recommendations[language].basic;
    } else if (budget > 100 && budget <= 200) {
        return recommendations[language].good;
    } else if (budget > 200) {
        return recommendations[language].premium;
    }
}

// DOM elements
const lengthInput = document.getElementById('length');
const widthInput = document.getElementById('width');
const cropTypeSelect = document.getElementById('crop-type');
const packetSizeSelect = document.getElementById('packet-size');
const budgetInput = document.getElementById('budget');
const calculateBtn = document.getElementById('calculate-btn');
const resultsSection = document.getElementById('results');
const plantsNeededEl = document.getElementById('plants-needed');
const packetsNeededEl = document.getElementById('packets-needed');
const fertilizerNeededEl = document.getElementById('fertilizer-needed');
const packetCostEl = document.getElementById('packet-cost');
const fertilizerCostEl = document.getElementById('fertilizer-cost');
const totalCostEl = document.getElementById('total-cost');
const budgetRemainingEl = document.getElementById('budget-remaining');
const brandRecommendationsSection = document.getElementById('brand-recommendations-section');
const budgetTierValueEl = document.getElementById('budget-tier-value');
const seedBrandsEl = document.getElementById('seed-brands');
const fertilizerOptionsEl = document.getElementById('fertilizer-options');
const budgetTipsEl = document.getElementById('budget-tips');
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
    const packetSize = packetSizeSelect.value;
    const budget = parseFloat(budgetInput.value);

    // Validation
    if (!length || !width || !cropType || !packetSize || !budget) {
        const message = currentLanguage === 'se' ? 'Hle kgotlela ka moka mafelo a akaretša tshelete' :
                       currentLanguage === 've' ? 'Ngenisa zwiṱuku zwa mafelo nga mari' :
                       currentLanguage === 'ts' ? 'Ngenisa hinkwaswo mafelo ku katsa mari' :
                       'Please fill in all fields including budget';
        alert(message);
        return;
    }

    if (length <= 0 || width <= 0) {
        const message = currentLanguage === 'se' ? 'Bolelele le bophara di swanetše go ba dinomoro tše botse' :
                       currentLanguage === 've' ? 'Bolelele na bophara zwi ḓo vha dinomoro dza hone' :
                       currentLanguage === 'ts' ? 'Bolelele na bophara swi fanele ku va tinomoro to lulamile' :
                       'Length and width must be positive numbers';
        alert(message);
        return;
    }

    if (budget < 50) {
        const message = currentLanguage === 'se' ? 'Tshelete e nyenyane ke R50' :
                       currentLanguage === 've' ? 'Mari dza u luga ndi R50' :
                       currentLanguage === 'ts' ? 'Mari ya minyane i R50' :
                       'Minimum budget is R50';
        alert(message);
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

    if (!crop.packetCosts[packetSize]) {
        alert('Please select a valid packet size');
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
    
    // Calculate seeds needed (grams)
    const gramsNeeded = plantsNeeded / crop.seedsPerGram;
    
    // Calculate packets needed
    const packetSizeInGrams = parseInt(packetSize);
    const packetsNeeded = Math.ceil(gramsNeeded / packetSizeInGrams);
    
    // Calculate packet cost
    const packetCost = packetsNeeded * crop.packetCosts[packetSize];
    
    // Calculate fertilizer quantity needed (kg) - approximately 50g per plant
    const fertilizerNeededKg = (plantsNeeded * 50) / 1000; // Convert grams to kg
    
    // Calculate fertilizer cost based on budget allocation
    // Allocate 60% of budget to seeds, 40% to fertilizer
    const seedBudget = budget * 0.6;
    const fertilizerBudget = budget * 0.4;
    
    // Calculate fertilizer cost (using affordable fertilizer prices)
    const fertilizerCostPerKg = 20; // R20 per kg for affordable fertilizer
    const fertilizerCost = fertilizerNeededKg * fertilizerCostPerKg;
    
    // If fertilizer cost exceeds budget allocation, use the budget allocation
    const finalFertilizerCost = Math.min(fertilizerCost, fertilizerBudget);
    const finalFertilizerKg = finalFertilizerCost / fertilizerCostPerKg;
    
    const totalCost = packetCost + finalFertilizerCost;
    
    // Calculate spacing information
    const spacingInfo = `Rows: ${crop.rowSpacing}cm apart, Plants: ${crop.plantSpacing}cm apart`;
    
    // Calculate budget remaining
    const budgetRemaining = budget - totalCost;
    
    // Get brand recommendations based on budget
    const brandRecs = getBrandRecommendations(budget);
    
    // Display results
    plantsNeededEl.textContent = plantsNeeded;
    packetsNeededEl.textContent = `${packetsNeeded} x ${packetSize} packets`;
    fertilizerNeededEl.textContent = `${finalFertilizerKg.toFixed(1)}kg`;
    packetCostEl.textContent = `R${packetCost.toFixed(2)}`;
    fertilizerCostEl.textContent = `R${finalFertilizerCost.toFixed(2)}`;
    totalCostEl.textContent = `R${totalCost.toFixed(2)}`;
    budgetRemainingEl.textContent = budgetRemaining >= 0 ? `R${budgetRemaining.toFixed(2)}` : `-R${Math.abs(budgetRemaining).toFixed(2)}`;
    
    // Display brand recommendations in the separate table
    if (brandRecs) {
        budgetTierValueEl.textContent = brandRecs.tier;
        seedBrandsEl.textContent = brandRecs.seeds;
        fertilizerOptionsEl.textContent = brandRecs.fertilizer;
        budgetTipsEl.textContent = brandRecs.tips;
        
        // Show the brand recommendations section
        brandRecommendationsSection.style.display = 'block';
    }
    
    spacingInfoEl.textContent = spacingInfo;
    plantingSeasonEl.textContent = crop.plantingSeason[currentLanguage] || crop.plantingSeason['en'];
    harvestTimeEl.textContent = crop.harvestTime[currentLanguage] || crop.harvestTime['en'];
    
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
    const packetSize = packetSizeSelect.value;
    const budget = budgetInput.value;
    
    const isValid = length && width && cropType && packetSize && budget && 
                   parseFloat(length) > 0 && parseFloat(width) > 0 && parseFloat(budget) >= 50;
    
    calculateBtn.disabled = !isValid;
    calculateBtn.style.opacity = isValid ? '1' : '0.6';
}

// Add event listeners for real-time validation
lengthInput.addEventListener('input', validateInputs);
widthInput.addEventListener('input', validateInputs);
cropTypeSelect.addEventListener('change', validateInputs);
packetSizeSelect.addEventListener('change', validateInputs);
budgetInput.addEventListener('input', validateInputs);

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
    const packetSize = packetSizeSelect.value;
    const budget = parseFloat(budgetInput.value);

    // Enhanced validation
    if (!length || !width || !cropType || !packetSize || !budget) {
        const message = currentLanguage === 'se' ? 'Hle kgotlela ka moka mafelo a akaretša tshelete' :
                       currentLanguage === 've' ? 'Ngenisa zwiṱuku zwa mafelo nga mari' :
                       currentLanguage === 'ts' ? 'Ngenisa hinkwaswo mafelo ku katsa mari' :
                       'Please fill in all fields including budget';
        showNotification(message, 'error');
        return;
    }

    if (length <= 0 || width <= 0) {
        const message = currentLanguage === 'se' ? 'Bolelele le bophara di swanetše go ba dinomoro tše botse' :
                       currentLanguage === 've' ? 'Bolelele na bophara zwi ḓo vha dinomoro dza hone' :
                       currentLanguage === 'ts' ? 'Bolelele na bophara swi fanele ku va tinomoro to lulamile' :
                       'Length and width must be positive numbers';
        showNotification(message, 'error');
        return;
    }

    if (budget < 50) {
        const message = currentLanguage === 'se' ? 'Tshelete e nyenyane ke R50' :
                       currentLanguage === 've' ? 'Mari dza u luga ndi R50' :
                       currentLanguage === 'ts' ? 'Mari ya minyane i R50' :
                       'Minimum budget is R50';
        showNotification(message, 'error');
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

    if (!crop.packetCosts[packetSize]) {
        showNotification('Please select a valid packet size', 'error');
        return;
    }

    // Calculate with more precision
    const rowSpacingInMeters = crop.rowSpacing / 100;
    const plantSpacingInMeters = crop.plantSpacing / 100;
    const plantsPerSqMeter = 1 / (rowSpacingInMeters * plantSpacingInMeters);
    const plantsNeeded = Math.floor(area * plantsPerSqMeter);
    
    // Calculate seeds needed (grams)
    const gramsNeeded = plantsNeeded / crop.seedsPerGram;
    
    // Calculate packets needed
    const packetSizeInGrams = parseInt(packetSize);
    const packetsNeeded = Math.ceil(gramsNeeded / packetSizeInGrams);
    
    // Calculate packet cost
    const packetCost = packetsNeeded * crop.packetCosts[packetSize];
    
    // Calculate fertilizer quantity needed (kg) - approximately 50g per plant
    const fertilizerNeededKg = (plantsNeeded * 50) / 1000; // Convert grams to kg
    
    // Calculate fertilizer cost based on budget allocation
    // Allocate 60% of budget to seeds, 40% to fertilizer
    const seedBudget = budget * 0.6;
    const fertilizerBudget = budget * 0.4;
    
    // Calculate fertilizer cost (using affordable fertilizer prices)
    const fertilizerCostPerKg = 20; // R20 per kg for affordable fertilizer
    const fertilizerCost = fertilizerNeededKg * fertilizerCostPerKg;
    
    // If fertilizer cost exceeds budget allocation, use the budget allocation
    const finalFertilizerCost = Math.min(fertilizerCost, fertilizerBudget);
    const finalFertilizerKg = finalFertilizerCost / fertilizerCostPerKg;
    
    const totalCost = packetCost + finalFertilizerCost;
    
    // Calculate budget remaining
    const budgetRemaining = budget - totalCost;
    
    // Get brand recommendations based on budget
    const brandRecs = getBrandRecommendations(budget);
    
    // Display results
    plantsNeededEl.textContent = plantsNeeded;
    packetsNeededEl.textContent = `${packetsNeeded} x ${packetSize} packets`;
    fertilizerNeededEl.textContent = `${finalFertilizerKg.toFixed(1)}kg`;
    packetCostEl.textContent = `R${packetCost.toFixed(2)}`;
    fertilizerCostEl.textContent = `R${finalFertilizerCost.toFixed(2)}`;
    totalCostEl.textContent = `R${totalCost.toFixed(2)}`;
    budgetRemainingEl.textContent = budgetRemaining >= 0 ? `R${budgetRemaining.toFixed(2)}` : `-R${Math.abs(budgetRemaining).toFixed(2)}`;
    
    // Display brand recommendations in the separate table
    if (brandRecs) {
        budgetTierValueEl.textContent = brandRecs.tier;
        seedBrandsEl.textContent = brandRecs.seeds;
        fertilizerOptionsEl.textContent = brandRecs.fertilizer;
        budgetTipsEl.textContent = brandRecs.tips;
        
        // Show the brand recommendations section
        brandRecommendationsSection.style.display = 'block';
    }
    
    spacingInfoEl.textContent = `Rows: ${crop.rowSpacing}cm apart, Plants: ${crop.plantSpacing}cm apart`;
    plantingSeasonEl.textContent = crop.plantingSeason[currentLanguage] || crop.plantingSeason['en'];
    harvestTimeEl.textContent = crop.harvestTime[currentLanguage] || crop.harvestTime['en'];
    
    resultsSection.style.display = 'block';
    
    // Show success notification
    const budgetStatusText = budgetRemaining >= 0 ? 
        (currentLanguage === 'se' ? 'ka tshelete' : 
         currentLanguage === 've' ? 'nga mari' : 
         currentLanguage === 'ts' ? 'hi mari' : 'within budget') :
        (currentLanguage === 'se' ? 'fetša tshelete' : 
         currentLanguage === 've' ? 'vhukuma mari' : 
         currentLanguage === 'ts' ? 'hundza mari' : 'over budget');
    
    const budgetTier = brandRecs ? brandRecs.tier : 'Budget';
    showNotification(`${budgetTier}: R${budget} | ${packetsNeeded} ${packetSize} packets + ${finalFertilizerKg.toFixed(1)}kg fertilizer = R${totalCost.toFixed(2)} (${budgetStatusText})`, 'success');
    
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
    
    // Update page title
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
        const titleText = pageTitle.getAttribute(`data-${currentLanguage}`);
        if (titleText) pageTitle.textContent = titleText;
    }
    
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
    
    // Update packet size options
    const packetOptions = document.querySelectorAll('#packet-size option');
    packetOptions.forEach(option => {
        if (option.value) {
            const text = option.getAttribute(`data-${currentLanguage}`);
            if (text) option.textContent = text;
        }
    });
    
    // Update placeholders
    const lengthInput = document.getElementById('length');
    const widthInput = document.getElementById('width');
    const budgetInput = document.getElementById('budget');
    
    const placeholders = {
        'en': ['Enter length in meters', 'Enter width in meters', 'Minimum R50 - Enter your budget'],
        'se': ['Kenya bolelele ka meters', 'Kenya bophara ka meters', 'Monyane wa R50 - Kenya tshelete ya gago'],
        've': ['Nga bolelele bwa meters', 'Nga bophara bwa meters', 'Monyane wa R50 - Ngenisa mari dzawe'],
        'ts': ['Ngenisa bolelele hi meters', 'Ngenisa bophara hi meters', 'Minyane ya R50 - Ngenisa mari ya wena']
    };
    
    lengthInput.placeholder = placeholders[currentLanguage][0];
    widthInput.placeholder = placeholders[currentLanguage][1];
    budgetInput.placeholder = placeholders[currentLanguage][2];
    
    // Update planting season and harvest time if results are displayed
    const resultsSection = document.getElementById('results');
    if (resultsSection && resultsSection.style.display !== 'none') {
        const cropType = document.getElementById('crop-type').value;
        if (cropType && cropData[cropType]) {
            const crop = cropData[cropType];
            const plantingSeasonEl = document.getElementById('planting-season');
            const harvestTimeEl = document.getElementById('harvest-time');
            
            if (plantingSeasonEl) {
                plantingSeasonEl.textContent = crop.plantingSeason[currentLanguage] || crop.plantingSeason['en'];
            }
            if (harvestTimeEl) {
                harvestTimeEl.textContent = crop.harvestTime[currentLanguage] || crop.harvestTime['en'];
            }
        }
    }
    
    // Update brand recommendations if they are displayed
    const brandRecommendationsSection = document.getElementById('brand-recommendations-section');
    if (brandRecommendationsSection && brandRecommendationsSection.style.display !== 'none') {
        const budgetInput = document.getElementById('budget');
        if (budgetInput && budgetInput.value) {
            const budget = parseFloat(budgetInput.value);
            const brandRecs = getBrandRecommendations(budget);
            
            if (brandRecs) {
                const budgetTierValueEl = document.getElementById('budget-tier-value');
                const seedBrandsEl = document.getElementById('seed-brands');
                const fertilizerOptionsEl = document.getElementById('fertilizer-options');
                const budgetTipsEl = document.getElementById('budget-tips');
                
                if (budgetTierValueEl) budgetTierValueEl.textContent = brandRecs.tier;
                if (seedBrandsEl) seedBrandsEl.textContent = brandRecs.seeds;
                if (fertilizerOptionsEl) fertilizerOptionsEl.textContent = brandRecs.fertilizer;
                if (budgetTipsEl) budgetTipsEl.textContent = brandRecs.tips;
            }
        }
    }
}

// Add event listener for language toggle
languageToggle.addEventListener('change', switchLanguage);


