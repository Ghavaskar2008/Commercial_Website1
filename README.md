# Ex02 Commercial Website
## Date:

## AIM
To create a commercial website using CSS Flexbox.

## ALGORITHM
### STEP 1
Create an HTML file (index.html)

### STEP 2
Create a CSS file (style.css)

### STEP 3
Include a navigation bar with links to different sections.

### STEP 4
Add structured sections for Homepage, Products / Services, About Us, Contact Details and User Account.

### STEP 5
Include social media links at the footer with copyright information.

### STEP 6
Define global styles for fonts, colors, and layout.

### STEP 7
Style the header, navigation bar, and sections.

### STEP 8
Use Flexbox for layout design.

### STEP 9
Add hover effects and transitions for interactivity.

### STEP 10
Add Images and Media.

### STEP 11
Use optimized images for a professional look.

### STEP 12
Open the HTML file in a browser to check layout and functionality.

### STEP 13
Fix styling issues and refine content placement.

### STEP 14
Deploy the website.

### STEP 15
Upload to GitHub Pages for free hosting.

## PROGRAM
```

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MotoMart | Motorcycle Sales</title>

<style>
* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #f4f4f1;
    color: #17191b;
}

header {
    background: white;
    padding: 18px 6%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    position: sticky;
    top: 0;
    z-index: 5;
    border-bottom: 1px solid #ddd;
}

.logo {
    font-size: 25px;
    font-weight: bold;
    color: #17191b;
    text-decoration: none;
}

.logo span {
    color: #e84b2c;
}

nav {
    display: flex;
    gap: 22px;
}

nav a {
    text-decoration: none;
    color: #333;
}

nav a:hover {
    color: #e84b2c;
}

button, input, select, textarea {
    font: inherit;
}

button, .button {
    cursor: pointer;
}

.cart-button {
    border: 0;
    border-radius: 25px;
    background: #17191b;
    color: white;
    padding: 12px 17px;
}

.hero {
    background: #171b1d;
    color: white;
    padding: 75px 9%;
    min-height: 430px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 35px;
}

.eyebrow {
    color: #e84b2c;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 3px;
}

.hero h1 {
    font-size: clamp(44px, 6vw, 78px);
    line-height: 1;
    letter-spacing: -3px;
    margin: 18px 0;
}

.hero h1 span {
    color: #ff765b;
}

.hero p {
    color: #c9cecf;
    line-height: 1.8;
    max-width: 450px;
}

.hero img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
}

.button {
    display: inline-block;
    padding: 14px 20px;
    border: 0;
    border-radius: 4px;
    background: #e84b2c;
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.highlights {
    background: white;
    display: flex;
    justify-content: space-around;
    gap: 20px;
    padding: 25px 7%;
}

.highlights span {
    display: block;
    color: #70777b;
    margin-top: 5px;
    font-size: 13px;
}

section.content {
    padding: 70px 9%;
}

h2 {
    font-size: clamp(30px, 4vw, 45px);
    letter-spacing: -1.5px;
    margin: 10px 0 25px;
}

.section-intro {
    color: #687078;
    line-height: 1.7;
}

.filters {
    display: grid;
    grid-template-columns: 1fr 190px 190px;
    gap: 12px;
    margin: 25px 0;
}

input, select, textarea {
    width: 100%;
    padding: 13px;
    border: 1px solid #d5d8d6;
    border-radius: 4px;
    background: white;
}

.bike-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
}

.bike-card {
    background: white;
    border: 1px solid #e1e2df;
    border-radius: 7px;
    overflow: hidden;
}

.bike-photo {
    height: 195px;
    background: #e7e8e5;
    overflow: hidden;
}

.bike-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s;
}

.bike-card:hover .bike-photo img {
    transform: scale(1.04);
}

.bike-info {
    padding: 19px;
}

.bike-type {
    color: #e84b2c;
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.bike-info h3 {
    margin: 9px 0;
    font-size: 21px;
}

.bike-info p {
    color: #687078;
    line-height: 1.6;
    font-size: 14px;
    min-height: 45px;
}

.price-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 18px;
}

.price {
    font-size: 20px;
    font-weight: bold;
}

.add-button {
    background: white;
    border: 1px solid #17191b;
    padding: 10px;
    border-radius: 4px;
}

.add-button:hover {
    background: #17191b;
    color: white;
}

.disclaimer {
    font-size: 12px;
    line-height: 1.6;
    color: #777;
    margin-top: 20px;
}

.offer {
    margin: 0 9%;
    padding: 40px;
    background: #e84b2c;
    color: white;
    border-radius: 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
}

.offer h2 {
    margin-bottom: 10px;
}

.offer p {
    line-height: 1.7;
}

.offer .button {
    background: white;
    color: #17191b;
    white-space: nowrap;
}

.three-columns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.three-columns article {
    border-top: 1px solid #bbb;
    padding-top: 18px;
}

.three-columns p {
    color: #687078;
    line-height: 1.7;
}

.contact {
    background: #e9eae7;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8%;
}

.contact form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.contact label {
    font-size: 14px;
    font-weight: bold;
}

#formStatus {
    color: #236b42;
    line-height: 1.5;
}

footer {
    text-align: center;
    padding: 35px 8%;
    background: #171b1d;
    color: #c9cecf;
}

footer p {
    font-size: 13px;
    line-height: 1.6;
}

footer .logo {
    color: white;
}

.footer-note {
    max-width: 800px;
    margin: auto;
    color: #9da5a8;
}

/* Enquiry cart */

.overlay {
    position: fixed;
    inset: 0;
    z-index: 10;
    background: #0008;
    display: flex;
    justify-content: flex-end;
}

.overlay[hidden] {
    display: none;
}

.cart-panel {
    background: white;
    width: min(430px, 100%);
    height: 100%;
    padding: 25px;
    overflow-y: auto;
}

.cart-heading,
.cart-line,
.cart-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
}

.cart-heading h2 {
    font-size: 25px;
}

.close-button {
    background: none;
    border: 0;
    font-size: 30px;
}

.cart-line {
    border-bottom: 1px solid #ddd;
    padding: 15px 0;
}

.cart-line small {
    display: block;
    color: #777;
    margin-top: 5px;
}

.remove-button {
    background: none;
    border: 0;
    color: #e84b2c;
}

.cart-total {
    border-top: 1px solid #ddd;
    padding: 20px 0;
    font-weight: bold;
}

.full-button {
    width: 100%;
}

.small-note {
    font-size: 12px;
    color: #777;
    line-height: 1.6;
}

@media (max-width: 800px) {
    header {
        flex-wrap: wrap;
    }

    nav {
        order: 3;
        width: 100%;
        justify-content: space-between;
        gap: 10px;
        font-size: 14px;
    }

    .hero {
        padding: 55px 7%;
    }

    section.content {
        padding: 55px 7%;
    }

    .bike-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .filters {
        grid-template-columns: 1fr;
    }

    .contact {
        gap: 35px;
    }
}

@media (max-width: 550px) {
    .hero {
        grid-template-columns: 1fr;
    }

    .hero img {
        height: 220px;
    }

    .highlights {
        flex-direction: column;
    }

    .bike-grid,
    .three-columns,
    .contact {
        grid-template-columns: 1fr;
    }

    .offer {
        margin: 0 5%;
        padding: 28px;
        display: block;
    }

    .offer .button {
        margin-top: 10px;
    }
}
</style>
</head>

<body>

<header>
    <a class="logo" href="#home">MOTO<span>MART</span></a>

    <nav>
        <a href="#home">Home</a>
        <a href="#bikes">Bikes</a>
        <a href="#offers">Offers</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </nav>

    <button class="cart-button" id="cartButton">
        Enquiry cart (<span id="cartCount">0</span>)
    </button>
</header>

<main>

<section class="hero" id="home">
    <div>
        <p class="eyebrow">FIND YOUR NEXT RIDE</p>
        <h1>Ride beyond<br><span>the ordinary.</span></h1>
        <p>
            Explore motorcycles for daily commutes, weekend escapes
            and everything in between. Compare models and enquire today.
        </p>
        <a class="button" href="#bikes">Explore Bikes</a>
    </div>

    <img
        src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85"
        alt="Motorcycle on the road">
</section>

<div class="highlights">
    <div><b>Wide choice</b><span>Different riding styles</span></div>
    <div><b>Clear pricing</b><span>Sample prices displayed</span></div>
    <div><b>Easy enquiry</b><span>Ask about availability</span></div>
</div>

<section class="content" id="bikes">
    <p class="eyebrow">OUR COLLECTION</p>
    <h2>Find the right bike</h2>
    <p class="section-intro">
        Search the collection, filter by category and compare indicative prices.
    </p>

    <div class="filters">
        <input id="searchInput" type="search"
               placeholder="Search by bike name or type..."
               aria-label="Search bikes">

        <select id="categoryFilter" aria-label="Filter bike category">
            <option value="all">All categories</option>
            <option value="commuter">Commuter</option>
            <option value="sport">Sport</option>
            <option value="cruiser">Cruiser</option>
            <option value="adventure">Adventure</option>
        </select>

        <select id="sortFilter" aria-label="Sort bikes">
            <option value="featured">Sort: Featured</option>
            <option value="low">Price: Low to high</option>
            <option value="high">Price: High to low</option>
        </select>
    </div>

    <div class="bike-grid" id="bikeGrid"></div>
    <p id="emptyMessage" hidden>No bikes found. Try another search.</p>

    <p class="disclaimer">
        *All prices shown are sample demonstration prices in Indian rupees.
        They are not verified dealer quotations or guaranteed on-road prices.
        Confirm current prices, taxes, specifications and availability with a dealer.
    </p>
</section>

<section class="offer" id="offers">
    <div>
        <p class="eyebrow" style="color:#ffe2da">MOTOMART OFFERS</p>
        <h2>Make your next move.</h2>
        <p>
            Ask our sales team about finance plans, exchange options
            and test-ride availability.
        </p>
    </div>
    <a class="button" href="#contact">Enquire Now</a>
</section>

<section class="content" id="about">
    <p class="eyebrow">WHY MOTOMART</p>
    <h2>A simpler way to choose.</h2>

    <div class="three-columns">
        <article>
            <h3>01. Compare options</h3>
            <p>Review motorcycle categories and indicative prices in one place.</p>
        </article>

        <article>
            <h3>02. Know the details</h3>
            <p>Read model highlights before contacting the sales team.</p>
        </article>

        <article>
            <h3>03. Talk to us</h3>
            <p>Send an enquiry about a model, price or test ride.</p>
        </article>
    </div>
</section>

<section class="content contact" id="contact">
    <div>
        <p class="eyebrow">GET IN TOUCH</p>
        <h2>Let's find your ride.</h2>
        <p class="section-intro">
            Send an enquiry to ask about bike availability and final on-road pricing.
        </p>

        <p>
            <b>Business address:</b> Add your store address<br><br>
            <b>Phone:</b> Add your business phone number<br><br>
            <b>Email:</b> Add your business email
        </p>
    </div>

    <form id="contactForm">
        <label for="customerName">Your name</label>
        <input id="customerName" required placeholder="Enter your name">

        <label for="customerEmail">Email address</label>
        <input id="customerEmail" type="email" required
               placeholder="you@example.com">

        <label for="customerPhone">Phone number</label>
        <input id="customerPhone" type="tel" placeholder="Optional">

        <label for="customerMessage">Your enquiry</label>
        <textarea id="customerMessage" rows="4" required
                  placeholder="Which bike are you interested in?"></textarea>

        <button class="button" type="submit">Submit Enquiry</button>
        <p id="formStatus" role="status"></p>

        <p class="small-note">
            This demonstration form does not send customer details to a server.
        </p>
    </form>
</section>

</main>

<footer>
    <a class="logo" href="#home">MOTO<span>MART</span></a>
    <p>© <span id="year"></span> MotoMart. Motorcycle sales website.</p>
    <p class="footer-note">
        Demo store. Replace sample inventory, prices and contact details before
        publishing. Use properly licensed images and verify all product details.
    </p>
</footer>

<div class="overlay" id="cartOverlay" hidden>
    <aside class="cart-panel" role="dialog" aria-modal="true"
           aria-labelledby="cartTitle">

        <div class="cart-heading">
            <h2 id="cartTitle">Your enquiry cart</h2>
            <button class="close-button" id="closeCart"
                    aria-label="Close cart">×</button>
        </div>

        <div id="cartItems">Your cart is empty.</div>

        <div class="cart-total">
            <span>Estimated total</span>
            <span id="cartTotal">₹0</span>
        </div>

        <p class="small-note">
            This is an enquiry estimate, not a confirmed purchase or booking.
        </p>

        <button class="button full-button" id="enquireCart">
            Enquire About Selected Bikes
        </button>
    </aside>
</div>

<script>
const bikes = [
    {
        id: 1,
        name: "Metro 125",
        category: "commuter",
        type: "City commuter",
        price: 95000,
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=85",
        description: "A lightweight sample motorcycle for everyday city travel."
    },
    {
        id: 2,
        name: "Street 160",
        category: "commuter",
        type: "Daily commuter",
        price: 125000,
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85",
        description: "An everyday motorcycle with a practical riding position."
    },
    {
        id: 3,
        name: "Racer 200",
        category: "sport",
        type: "Sport",
        price: 185000,
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=85",
        description: "A sporty sample model with an energetic design."
    },
    {
        id: 4,
        name: "Classic 350",
        category: "cruiser",
        type: "Classic cruiser",
        price: 195000,
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85",
        description: "A classic-inspired motorcycle for relaxed rides."
    },
    {
        id: 5,
        name: "Trail 250",
        category: "adventure",
        type: "Adventure",
        price: 220000,
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=85",
        description: "An adventure-style sample bike for touring."
    },
    {
        id: 6,
        name: "Sport X 300",
        category: "sport",
        type: "Sport motorcycle",
        price: 275000,
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85",
        description: "A dynamic sport-inspired sample motorcycle."
    }
];

let cart = [];

const bikeGrid = document.getElementById("bikeGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");

function formatPrice(price) {
    return "₹" + price.toLocaleString("en-IN");
}

function renderBikes() {
    const search = searchInput.value.trim().toLowerCase();
    const category = categoryFilter.value;

    let filteredBikes = bikes.filter(function(bike) {
        const matchesSearch =
            bike.name.toLowerCase().includes(search) ||
            bike.type.toLowerCase().includes(search);

        const matchesCategory =
            category === "all" || bike.category === category;

        return matchesSearch && matchesCategory;
    });

    if (sortFilter.value === "low") {
        filteredBikes.sort((a, b) => a.price - b.price);
    } else if (sortFilter.value === "high") {
        filteredBikes.sort((a, b) => b.price - a.price);
    }

    bikeGrid.innerHTML = filteredBikes.map(function(bike) {
        return `
            <article class="bike-card">
                <div class="bike-photo">
                    <img
                        src="${bike.image}"
                        alt="${bike.name} motorcycle"
                        loading="lazy"
                        onerror="this.onerror=null;this.src='https://placehold.co/800x500/e7e8e5/17191b?text=Motorcycle+Photo';">
                </div>

                <div class="bike-info">
                    <span class="bike-type">${bike.type}</span>
                    <h3>${bike.name}</h3>
                    <p>${bike.description}</p>

                    <div class="price-row">
                        <span class="price">${formatPrice(bike.price)}</span>
                        <button class="add-button" data-add="${bike.id}">
                            Add to enquiry
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");

    document.getElementById("emptyMessage").hidden =
        filteredBikes.length !== 0;
}

function addToCart(id) {
    const bike = bikes.find(item => item.id === id);
    const existingBike = cart.find(item => item.id === id);

    if (existingBike) {
        existingBike.quantity++;
    } else {
        cart.push({...bike, quantity: 1});
    }

    renderCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
}

function renderCart() {
    const itemCount = cart.reduce(
        (total, item) => total + item.quantity, 0
    );

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    document.getElementById("cartCount").textContent = itemCount;
    document.getElementById("cartTotal").textContent = formatPrice(total);

    const cartItems = document.getElementById("cartItems");

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cartItems.innerHTML = cart.map(function(item) {
        return `
            <div class="cart-line">
                <div>
                    <b>${item.name}</b>
                    <small>${item.quantity} × ${formatPrice(item.price)}</small>
                </div>

                <button class="remove-button" data-remove="${item.id}">
                    Remove
                </button>
            </div>
        `;
    }).join("");
}

function openCart() {
    document.getElementById("cartOverlay").hidden = false;
}

function closeCart() {
    document.getElementById("cartOverlay").hidden = true;
}

bikeGrid.addEventListener("click", function(event) {
    const button = event.target.closest("[data-add]");

    if (button) {
        addToCart(Number(button.dataset.add));
    }
});

document.getElementById("cartItems").addEventListener("click", function(event) {
    const button = event.target.closest("[data-remove]");

    if (button) {
        removeFromCart(Number(button.dataset.remove));
    }
});

searchInput.addEventListener("input", renderBikes);
categoryFilter.addEventListener("change", renderBikes);
sortFilter.addEventListener("change", renderBikes);

document.getElementById("cartButton").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);

document.getElementById("cartOverlay").addEventListener("click", function(event) {
    if (event.target.id === "cartOverlay") {
        closeCart();
    }
});

document.getElementById("enquireCart").addEventListener("click", function() {
    if (cart.length === 0) {
        alert("Please add a bike to your enquiry cart first.");
        return;
    }

    const summary = cart.map(function(item) {
        return item.name + " x " + item.quantity;
    }).join(", ");

    document.getElementById("customerMessage").value =
        "I would like to enquire about: " + summary;

    closeCart();

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("formStatus").textContent =
        "Demo form checked successfully. To receive real enquiries, connect a backend or form service.";

    this.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();

renderBikes();
renderCart();
</script>

</body>
</html>
```

## OUTPUT

## RESULT
The program for creating commercial website using CSS Flexbox is executed successfully.
