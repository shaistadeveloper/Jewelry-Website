// Jewelry Items Data
const jewelryItems = [
    { name: "Diamond Solitaire Ring", desc: "0.5 carat certified diamond in 18K white gold setting.", price: 185000, img: "images/download (1).jpg" },
    { name: "18K Gold Necklace", desc: "Classic 18K yellow gold chain necklace, 20 grams.", price: 480000, img: "images/download.jpg" },
    { name: "South Sea Pearl Earrings", desc: "Cultured South Sea pearls with diamond studs.", price: 95000, img: "images/Silver Elegant,Vintage Collar  Copper….jpg" },
    { name: "Ruby Tennis Bracelet", desc: "Natural ruby and diamond bracelet, 18K rose gold.", price: 165000, img: "images/We're a jewelry manufacturer based in USA and….jpg" },
    { name: "Blue Sapphire Ring", desc: "Ceylon blue sapphire 1.5 carat with diamond halo.", price: 225000, img: "images/Blue Sapphire Silver ring for every occasion.jpg" },
    { name: "Gold Bangle Set", desc: "Traditional 22K gold bangles, 25 grams.", price: 575000, img: "images/Yellow Gold  Collar  Copper   Embellished   Women….jpg" },
    { name: "Diamond Stud Earrings", desc: "0.75 carat total weight diamond studs.", price: 165000, img: "images/Discover the enduring beauty of diamond stud….jpg" },
    { name: "Emerald Pendant", desc: "Colombian emerald 2 carats with diamond accents.", price: 145000, img: "images/Elegant Green Emerald With Diamond Accents Charm….jpg" },
    { name: "Platinum Ring", desc: "Platinum band with diamond accent.", price: 125000, img: "images/Imagine the subtle brilliance wrapping your….jpg" },
    { name: "Gold Jhumka Earrings", desc: "Traditional 22K gold jhumkas, 12 grams.", price: 285000, img: "images/These gold hoop jhumkis are meticulously crafted….jpg" },
    { name: "Diamond Tennis Bracelet", desc: "2 carat total weight diamond tennis bracelet.", price: 295000, img: "images/This stunning bracelet is set with 8_5 total….jpg" },
    { name: "Rose Gold Ring", desc: "14K rose gold band with pink sapphire.", price: 85000, img: "images/download (3).jpg" },
    { name: "Pearl Necklace", desc: "Freshwater pearl necklace with 18K gold clasp.", price: 125000, img: "images/🖤.jpg" },
    { name: "Gold Cufflinks", desc: "18K gold cufflinks with black onyx.", price: 95000, img: "images/Real 10K Yellow Gold With Amazing Round Engagement Casual Cufflinks For Men's _ eBay.jpg" },
    { name: "Opal Pendant", desc: "Australian opal pendant with diamond halo.", price: 79000, img: "images/18k Gold Australian Opal Necklace, Opal Pendant.jpg" },
    { name: "Bridal Jewelry Set", desc: "Complete bridal set: necklace, earrings, tikka, bangles.", price: 1250000, img: "images/Traditional Gold Necklace Set with jhumka earrings _ Indian Bridal Jewelry _Temple Style Statement Choker Set with Earrings & Maang Tikka.jpg" },
    { name: "Gold Anklet", desc: "22K gold anklet with charms, 10 grams.", price: 235000, img: "images/Tiny beads antique gold plain anklet  is a….jpg" },
    { name: "Nose Ring", desc: "22K gold nose ring with pearl drop.", price: 45000, img: "images/download (4).jpg" }
];

function formatPKR(price) {
    return "PKR " + price.toLocaleString('en-PK');
}

// Render Cards
const container = document.getElementById('cardsContainer');
if (container) {
    jewelryItems.forEach((item, idx) => {
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 col-sm-12';
        col.innerHTML = `
            <div class="card h-100" data-index="${idx}">
                <img src="${item.img}" class="card-img-top" alt="${item.name}" onerror="this.src='https://placehold.co/500x500?text=ZAVIYA'">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.desc.substring(0, 80)}</p>
                    <div class="price">${formatPKR(item.price)}</div>
                    <div class="mt-2"><span class="order-badge"><i class="fas fa-shopping-cart"></i> Click to Order</span></div>
                </div>
            </div>
        `;
        container.appendChild(col);
    });

    // Add click event to cards
    document.querySelectorAll('.card[data-index]').forEach(card => {
        card.addEventListener('click', () => {
            const idx = parseInt(card.getAttribute('data-index'));
            const item = jewelryItems[idx];
            document.getElementById('orderModalName').innerText = item.name;
            document.getElementById('orderModalDesc').innerText = item.desc;
            document.getElementById('orderModalPrice').innerHTML = formatPKR(item.price);
            document.getElementById('orderModalImg').src = item.img;
            new bootstrap.Modal(document.getElementById('orderModal')).show();
            document.getElementById('orderForm').reset();
            document.getElementById('orderSuccessMsg').style.display = 'none';
        });
    });
}

// Order Form Validation
const orderForm = document.getElementById('orderForm');
if (orderForm) {
    const orderName = document.getElementById('orderName');
    const orderPhone = document.getElementById('orderPhone');
    const orderNameError = document.getElementById('orderNameError');
    const orderPhoneError = document.getElementById('orderPhoneError');
    const orderSuccess = document.getElementById('orderSuccessMsg');

    function validateOrderName() {
        let val = orderName.value.trim();
        if (val === "" || !/^[A-Za-z\s]+$/.test(val)) {
            orderNameError.style.display = 'block';
            return false;
        }
        orderNameError.style.display = 'none';
        return true;
    }

    function validateOrderPhone() {
        let val = orderPhone.value.trim();
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
                bootstrap.Modal.getInstance(document.getElementById('orderModal')).hide();
            }, 2000);
        } else {
            alert("Please correct errors: Name (alphabets only) and 11-digit phone.");
        }
    });
}