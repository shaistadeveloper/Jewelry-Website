// ============================================
// JEWELRY DATA - 18 ITEMS WITH REALISTIC PRICES
// ============================================
const jewelryItems = [
    { name: "Diamond Solitaire Ring", desc: "0.5 carat certified diamond in 18K white gold setting. Perfect for engagements.", price: 185000, img: "images/download (1).jpg" },
    { name: "18K Gold Necklace", desc: "Classic 18K yellow gold chain necklace, 20 grams, perfect for daily wear.", price: 480000, img: "images/download.jpg" },
    { name: "South Sea Pearl Earrings", desc: "Cultured South Sea pearls with diamond studs, 14K gold.", price: 95000, img: "images/Silver Elegant,Vintage Collar  Copper….jpg" },
    { name: "Ruby Tennis Bracelet", desc: "Natural ruby and diamond bracelet, 18K rose gold, 3 carats total.", price: 165000, img: "images/We're a jewelry manufacturer based in USA and….jpg" },
    { name: "Blue Sapphire Ring", desc: "Ceylon blue sapphire 1.5 carat with diamond halo, 18K white gold.", price: 225000, img: "images/Blue Sapphire Silver ring for every occasion.jpg" },
    { name: "Gold Bangle Set", desc: "Traditional 22K gold bangles, 25 grams, intricate handmade design.", price: 575000, img: "images/Yellow Gold  Collar  Copper   Embellished   Women….jpg" },
    { name: "Diamond Stud Earrings", desc: "0.75 carat total weight diamond studs, GIA certified, 18K gold.", price: 165000, img: "images/Discover the enduring beauty of diamond stud….jpg" },
    { name: "Emerald Pendant", desc: "Colombian emerald 2 carats with diamond accents, 18K gold chain.", price: 145000, img: "images/Elegant Green Emerald With Diamond Accents Charm….jpg" },
    { name: "Platinum Ring", desc: "Platinum band with diamond accent, minimalist modern design.", price: 125000, img: "images/Imagine the subtle brilliance wrapping your….jpg" },
    { name: "Gold Jhumka Earrings", desc: "Traditional 22K gold jhumkas, 12 grams, perfect for weddings.", price: 285000, img: "images/These gold hoop jhumkis are meticulously crafted….jpg" },
    { name: "Diamond Tennis Bracelet", desc: "2 carat total weight diamond tennis bracelet, 18K white gold.", price: 295000, img: "images/This stunning bracelet is set with 8_5 total….jpg" },
    { name: "Rose Gold Ring", desc: "14K rose gold band with pink sapphire, contemporary design.", price: 85000, img: "images/download (3).jpg" },
    { name: "Pearl Necklace", desc: "Freshwater pearl necklace with 18K gold clasp, 18 inches.", price: 125000, img: "images/🖤.jpg" },
    { name: "Gold Cufflinks", desc: "18K gold cufflinks with black onyx, formal collection.", price: 95000, img: "images/Real 10K Yellow Gold With Amazing Round Engagement Casual Cufflinks For Men's _ eBay.jpg" },
    { name: "Opal Pendant", desc: "Australian opal pendant with diamond halo, 14K gold.", price: 79000, img: "images/18k Gold Australian Opal Necklace, Opal Pendant.jpg" },
    { name: "Bridal Jewelry Set", desc: "Complete bridal set: necklace, earrings, tikka, bangles. 22K gold.", price: 1250000, img: "images/Traditional Gold Necklace Set with jhumka earrings _ Indian Bridal Jewelry _Temple Style Statement Choker Set with Earrings & Maang Tikka.jpg" },
    { name: "Gold Anklet", desc: "22K gold anklet with charms, 10 grams, traditional design.", price: 235000, img: "images/Tiny beads antique gold plain anklet  is a….jpg" },
    { name: "Nose Ring", desc: "22K gold nose ring with pearl drop, classic style.", price: 45000, img: "images/download (4).jpg" }
];

// ============================================
// GALLERY IMAGES
// ============================================
const galleryImages = [
    "images/1pc Simple & Versatile Wave Patterned Bell Anklet For Women, Jewelry Gift.jpg",
    "images/Bridal Jewelry Sets- Wedding Jewelry Clear CZ….jpg",
    "images/8 Most Popular Engagement Ring Designers.jpg",
    "images/download (5).jpg",
    "images/Conjunto de 6 Pulseiras Vintage Luxuosas com Padrão Gravado Banhado em Ouro 24k, Presente Perfeito de Joias para Casamento.jpg",
    "images/Comment _Link_ to get the product link sent….jpg"
];

// ============================================
// HELPER FUNCTIONS
// ============================================
function formatPKR(price) {
    return "PKR " + price.toLocaleString('en-PK');
}

// ============================================
// RENDER JEWELRY CARDS
// ============================================
function renderJewelryCards() {
    const container = document.getElementById('cardsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    jewelryItems.forEach((item, index) => {
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 col-sm-12';
        col.innerHTML = `
            <div class="card h-100" data-index="${index}">
                <img src="${item.img}" class="card-img-top" alt="${item.name}" onerror="this.src='https://placehold.co/500x500?text=ZAVIYA'">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.desc.substring(0, 80)}</p>
                    <div class="price">${formatPKR(item.price)}</div>
                    <div class="mt-2">
                        <span class="order-badge"><i class="fas fa-shopping-cart"></i> Click to Order</span>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
    
    // Add click event to cards
    document.querySelectorAll('.card[data-index]').forEach(card => {
        card.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const item = jewelryItems[index];
            openOrderModal(item);
        });
    });
}

// ============================================
// OPEN ORDER MODAL
// ============================================
function openOrderModal(item) {
    const modal = document.getElementById('orderModal');
    if (!modal) return;
    
    document.getElementById('orderModalName').innerText = item.name;
    document.getElementById('orderModalDesc').innerText = item.desc;
    document.getElementById('orderModalPrice').innerHTML = formatPKR(item.price);
    document.getElementById('orderModalImg').src = item.img;
    
    // Reset form
    const orderForm = document.getElementById('orderForm');
    if (orderForm) orderForm.reset();
    const successMsg = document.getElementById('orderSuccessMsg');
    if (successMsg) successMsg.style.display = 'none';
    
    const orderNameError = document.getElementById('orderNameError');
    const orderPhoneError = document.getElementById('orderPhoneError');
    if (orderNameError) orderNameError.style.display = 'none';
    if (orderPhoneError) orderPhoneError.style.display = 'none';
    
    new bootstrap.Modal(modal).show();
}

// ============================================
// RENDER GALLERY
// ============================================
function renderGallery() {
    const galleryRow = document.getElementById('galleryRow');
    if (!galleryRow) return;
    
    galleryRow.innerHTML = '';
    galleryImages.forEach(url => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-sm-6';
        col.innerHTML = `<img src="${url}" class="gallery-img" alt="Gallery" loading="lazy" onerror="this.src='https://placehold.co/600x400?text=ZAVIYA+GALLERY'">`;
        galleryRow.appendChild(col);
    });
}

// ============================================
// FEEDBACK FORM VALIDATION
// ============================================
function setupFeedbackForm() {
    const form = document.getElementById('feedbackForm');
    if (!form) return;
    
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const contactInput = document.getElementById('contactInput');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const contactError = document.getElementById('contactError');
    const successMsg = document.getElementById('formSuccessMsg');
    
    function isValidName(str) {
        return /^[A-Za-z\s]+$/.test(str.trim());
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(email);
    }
    
    function isValidContact(contact) {
        return /^\d{11}$/.test(contact);
    }
    
    function validateName() {
        const val = nameInput.value.trim();
        if (val === "") {
            nameError.style.display = "block";
            nameError.innerText = "❌ Name required.";
            return false;
        }
        if (!isValidName(val)) {
            nameError.style.display = "block";
            nameError.innerText = "❌ Only alphabets & spaces allowed.";
            return false;
        }
        nameError.style.display = "none";
        return true;
    }
    
    function validateEmail() {
        const val = emailInput.value.trim();
        if (val === "") {
            emailError.style.display = "block";
            emailError.innerText = "❌ Email required.";
            return false;
        }
        if (!isValidEmail(val)) {
            emailError.style.display = "block";
            emailError.innerText = "❌ Invalid email format.";
            return false;
        }
        emailError.style.display = "none";
        return true;
    }
    
    function validateContact() {
        const val = contactInput.value.trim();
        if (val === "") {
            contactError.style.display = "block";
            contactError.innerText = "❌ 11-digit contact required.";
            return false;
        }
        if (!isValidContact(val)) {
            contactError.style.display = "block";
            contactError.innerText = "❌ Exactly 11 digits.";
            return false;
        }
        contactError.style.display = "none";
        return true;
    }
    
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    contactInput.addEventListener('input', validateContact);
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateName() && validateEmail() && validateContact()) {
            successMsg.style.display = 'block';
            form.reset();
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 4000);
        } else {
            alert("Please fix errors: name (letters only), valid email, 11-digit contact.");
        }
    });
}

// ============================================
// ORDER FORM VALIDATION
// ============================================
function setupOrderForm() {
    const orderForm = document.getElementById('orderForm');
    if (!orderForm) return;
    
    const orderName = document.getElementById('orderName');
    const orderPhone = document.getElementById('orderPhone');
    const orderNameError = document.getElementById('orderNameError');
    const orderPhoneError = document.getElementById('orderPhoneError');
    const orderSuccess = document.getElementById('orderSuccessMsg');
    
    function validateOrderName() {
        const val = orderName.value.trim();
        if (val === "" || !/^[A-Za-z\s]+$/.test(val)) {
            orderNameError.style.display = 'block';
            return false;
        }
        orderNameError.style.display = 'none';
        return true;
    }
    
    function validateOrderPhone() {
        const val = orderPhone.value.trim();
        if (!/^\d{11}$/.test(val)) {
            orderPhoneError.style.display = 'block';
            return false;
        }
        orderPhoneError.style.display = 'none';
        return true;
    }
    
    orderName.addEventListener('input', validateOrderName);
    orderPhone.addEventListener('input', validateOrderPhone);
    
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateOrderName() && validateOrderPhone()) {
            orderSuccess.style.display = 'block';
            orderForm.reset();
            setTimeout(() => {
                orderSuccess.style.display = 'none';
                const modal = bootstrap.Modal.getInstance(document.getElementById('orderModal'));
                if (modal) modal.hide();
            }, 2000);
        } else {
            alert("Please correct errors: Name (alphabets only) and 11-digit phone.");
        }
    });
}

// ============================================
// NAVBAR ACTIVE LINK
// ============================================
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });
}

// ============================================
// INITIALIZE ALL
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    renderJewelryCards();
    renderGallery();
    setupFeedbackForm();
    setupOrderForm();
    setActiveNavLink();
});