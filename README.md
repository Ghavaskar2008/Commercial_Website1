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
## HTML CODE:
```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MotoMart | Motorcycle Showroom</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <a href="#" class="logo">Moto<span>Mart</span></a>

        <nav>
            <a href="#home">Home</a>
            <a href="#bikes">Motorcycles</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>

        <a href="#bikes" class="nav-button">Explore Bikes</a>
    </header>

    <section class="hero" id="home">
        <div class="hero-content">
            <p class="tagline">FIND YOUR NEXT RIDE</p>
            <h1>Ride Beyond<br>Every <span>Limit.</span></h1>
            <p class="hero-description">
                Discover motorcycles that match your style,
                passion and adventure.
            </p>
            <a href="#bikes" class="primary-button">Explore Collection →</a>
        </div>
    </section>

    <section class="bikes-section" id="bikes">
        <div class="section-heading">
            <p class="tagline">OUR COLLECTION</p>
            <h2>Find Your <span>Perfect Bike</span></h2>
            <p>Explore our collection of popular motorcycles.</p>
        </div>

        <div class="filters">
            <input
                type="search"
                id="searchInput"
                placeholder="Search motorcycle..."
            >

            <select id="categoryFilter">
                <option value="all">All Categories</option>
                <option value="sport">Sport</option>
                <option value="cruiser">Cruiser</option>
                <option value="street">Street</option>
                <option value="adventure">Adventure</option>
            </select>

            <select id="sortFilter">
                <option value="default">Sort by</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
            </select>
        </div>

        <div class="bike-grid" id="bikeGrid">

            <article class="bike-card" data-name="Yamaha R15 V4"
                data-category="sport" data-price="185000">
                <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85"
                    alt="Sport motorcycle">
                <div class="bike-info">
                    <span class="bike-category">SPORT</span>
                    <h3>Yamaha R15 V4</h3>
                    <p class="bike-description">Sporty design for exciting rides.</p>
                    <div class="bike-bottom">
                        <p class="price">₹1,85,000</p>
                        <button class="enquire-button"
                            onclick="addEnquiry('Yamaha R15 V4')">Enquire</button>
                    </div>
                </div>
            </article>

            <article class="bike-card" data-name="Royal Enfield Classic 350"
                data-category="cruiser" data-price="193000">
                <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=85"
                    alt="Classic motorcycle">
                <div class="bike-info">
                    <span class="bike-category">CRUISER</span>
                    <h3>Classic 350</h3>
                    <p class="bike-description">Classic styling and comfortable rides.</p>
                    <div class="bike-bottom">
                        <p class="price">₹1,93,000</p>
                        <button class="enquire-button"
                            onclick="addEnquiry('Royal Enfield Classic 350')">Enquire</button>
                    </div>
                </div>
            </article>

            <article class="bike-card" data-name="KTM Duke 390"
                data-category="street" data-price="310000">
                <img src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=85"
                    alt="Street motorcycle">
                <div class="bike-info">
                    <span class="bike-category">STREET</span>
                    <h3>KTM Duke 390</h3>
                    <p class="bike-description">Aggressive looks and thrilling performance.</p>
                    <div class="bike-bottom">
                        <p class="price">₹3,10,000</p>
                        <button class="enquire-button"
                            onclick="addEnquiry('KTM Duke 390')">Enquire</button>
                    </div>
                </div>
            </article>

            <article class="bike-card" data-name="Adventure Motorcycle"
                data-category="adventure" data-price="280000">
                <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85"
                    alt="Adventure motorcycle">
                <div class="bike-info">
                    <span class="bike-category">ADVENTURE</span>
                    <h3>Adventure 300</h3>
                    <p class="bike-description">Ready for long rides and exploration.</p>
                    <div class="bike-bottom">
                        <p class="price">₹2,80,000</p>
                        <button class="enquire-button"
                            onclick="addEnquiry('Adventure 300')">Enquire</button>
                    </div>
                </div>
            </article>

            <article class="bike-card" data-name="Street 200"
                data-category="street" data-price="165000">
                <img src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&w=900&q=85"
                    alt="Motorcycle on the road">
                <div class="bike-info">
                    <span class="bike-category">STREET</span>
                    <h3>Street 200</h3>
                    <p class="bike-description">A practical choice for everyday rides.</p>
                    <div class="bike-bottom">
                        <p class="price">₹1,65,000</p>
                        <button class="enquire-button"
                            onclick="addEnquiry('Street 200')">Enquire</button>
                    </div>
                </div>
            </article>

            <article class="bike-card" data-name="Sport 250"
                data-category="sport" data-price="220000">
                <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85"
                    alt="Sport bike">
                <div class="bike-info">
                    <span class="bike-category">SPORT</span>
                    <h3>Sport 250</h3>
                    <p class="bike-description">A sporty ride for motorcycle lovers.</p>
                    <div class="bike-bottom">
                        <p class="price">₹2,20,000</p>
                        <button class="enquire-button"
                            onclick="addEnquiry('Sport 250')">Enquire</button>
                    </div>
                </div>
            </article>

        </div>

        <p id="noResults" class="no-results" hidden>
            No motorcycles found. Try another search.
        </p>

        <div class="enquiry-box">
            <h3>Your Enquiry List</h3>
            <p id="enquiryList">No motorcycles selected yet.</p>
            <button class="primary-button" onclick="sendEnquiry()">
                Send Enquiry
            </button>
        </div>
    </section>

    <section class="about-section" id="about">
        <div>
            <p class="tagline">WHY MOTOMART?</p>
            <h2>Your Ride.<br><span>Your Rules.</span></h2>
        </div>
        <div class="about-text">
            <p>
                MotoMart is a motorcycle showroom website designed to help
                riders explore different styles of bikes, compare prices
                and send enquiries in one convenient place.
            </p>
            <div class="features">
                <div><strong>01</strong><p>Multiple Models</p></div>
                <div><strong>02</strong><p>Easy Bike Search</p></div>
                <div><strong>03</strong><p>Quick Enquiries</p></div>
            </div>
        </div>
    </section>

    <section class="contact-section" id="contact">
        <div class="section-heading">
            <p class="tagline">GET IN TOUCH</p>
            <h2>Let's Talk <span>Motorcycles</span></h2>
            <p>Interested in a bike? Send us your details.</p>
        </div>

        <form id="contactForm">
            <input type="text" id="customerName"
                placeholder="Your name" required>
            <input type="email" id="customerEmail"
                placeholder="Your email address" required>
            <textarea id="customerMessage"
                placeholder="Which motorcycle are you interested in?"
                required></textarea>
            <button type="submit" class="primary-button">Submit Enquiry</button>
            <p id="formMessage" role="status"></p>
        </form>
    </section>

    <footer>
        <a href="#home" class="logo">Moto<span>Mart</span></a>
        <p>Find your ride. Start your adventure.</p>
        <p class="copyright">© 2026 MotoMart. Demo website.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```
## CSS code:
```

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --background: #101010;
    --card: #1b1b1b;
    --orange: #ff6b24;
    --white: #ffffff;
    --muted: #aaaaaa;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: var(--background);
    color: var(--white);
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: inherit;
}

header {
    min-height: 76px;
    padding: 18px 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    background: #151515;
    border-bottom: 1px solid #292929;
    position: sticky;
    top: 0;
    z-index: 10;
}

.logo {
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -1px;
}

.logo span,
.tagline,
.section-heading h2 span,
.hero h1 span,
.about-section h2 span {
    color: var(--orange);
}

nav {
    display: flex;
    gap: 25px;
}

nav a {
    color: #dddddd;
    font-size: 14px;
    transition: color 0.3s;
}

nav a:hover {
    color: var(--orange);
}

.nav-button,
.primary-button {
    display: inline-block;
    background: var(--orange);
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}

.nav-button:hover,
.primary-button:hover,
.enquire-button:hover {
    background: #e6530e;
    transform: translateY(-2px);
}

.hero {
    min-height: 570px;
    padding: 100px 8%;
    display: flex;
    align-items: center;
    background:
        linear-gradient(90deg, rgba(0,0,0,0.94),
        rgba(0,0,0,0.62), rgba(0,0,0,0.18)),
        url("https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1800&q=90")
        center 55% / cover no-repeat;
}

.hero-content {
    max-width: 590px;
}

.tagline {
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 3px;
    margin-bottom: 14px;
}

.hero h1 {
    font-size: clamp(44px, 6vw, 76px);
    line-height: 1.08;
    margin-bottom: 22px;
}

.hero-description {
    color: #dddddd;
    max-width: 420px;
    margin-bottom: 30px;
}

.bikes-section,
.contact-section {
    padding: 85px 7%;
}

.section-heading {
    text-align: center;
    margin-bottom: 35px;
}

.section-heading h2,
.about-section h2 {
    font-size: clamp(30px, 4vw, 43px);
    line-height: 1.2;
    margin-bottom: 12px;
}

.section-heading > p:last-child {
    color: var(--muted);
}

.filters {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 15px;
    margin: 35px 0;
}

.filters input,
.filters select,
.contact-section input,
.contact-section textarea {
    width: 100%;
    background: #202020;
    color: white;
    border: 1px solid #383838;
    border-radius: 5px;
    padding: 14px;
    font-size: 14px;
    outline: none;
}

.filters input:focus,
.filters select:focus,
.contact-section input:focus,
.contact-section textarea:focus {
    border-color: var(--orange);
}

.filters select option {
    background: #202020;
}

.bike-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 25px;
}

.bike-card {
    overflow: hidden;
    background: var(--card);
    border: 1px solid #292929;
    border-radius: 10px;
    transition: transform 0.3s, border-color 0.3s;
}

.bike-card:hover {
    transform: translateY(-6px);
    border-color: var(--orange);
}

.bike-card img {
    display: block;
    width: 100%;
    height: 220px;
    object-fit: cover;
    background: #282828;
}

.bike-info {
    padding: 20px;
}

.bike-category {
    display: inline-block;
    color: var(--orange);
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 2px;
    margin-bottom: 8px;
}

.bike-info h3 {
    font-size: 20px;
    margin-bottom: 7px;
}

.bike-description {
    color: var(--muted);
    font-size: 13px;
    min-height: 42px;
}

.bike-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-top: 20px;
}

.price {
    font-size: 19px;
    font-weight: bold;
    color: var(--orange);
}

.enquire-button {
    padding: 10px 14px;
    color: white;
    background: var(--orange);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s;
}

.no-results {
    text-align: center;
    color: var(--muted);
    padding: 30px;
}

.enquiry-box {
    margin-top: 45px;
    padding: 25px;
    border: 1px solid #383838;
    background: #181818;
    border-radius: 8px;
}

.enquiry-box h3 {
    margin-bottom: 8px;
}

.enquiry-box p {
    color: var(--muted);
    margin-bottom: 18px;
    overflow-wrap: anywhere;
}

.about-section {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 50px;
    padding: 85px 9%;
    background: #191919;
}

.about-text > p {
    color: #cccccc;
    margin-bottom: 30px;
}

.features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}

.features div {
    padding: 15px;
    border-left: 2px solid var(--orange);
    background: #222222;
}

.features strong {
    color: var(--orange);
    font-size: 24px;
}

.features p {
    font-size: 12px;
    color: #cccccc;
}

.contact-section form {
    max-width: 600px;
    margin: 0 auto;
    display: grid;
    gap: 15px;
}

.contact-section textarea {
    min-height: 130px;
    resize: vertical;
}

.contact-section .primary-button {
    justify-self: start;
}

#formMessage {
    color: var(--orange);
}

footer {
    padding: 35px 7%;
    text-align: center;
    background: #080808;
    border-top: 1px solid #292929;
}

footer p {
    color: var(--muted);
    font-size: 13px;
    margin-top: 7px;
}

.copyright {
    margin-top: 20px;
}

/* Tablet screens */
@media (max-width: 900px) {
    header {
        flex-wrap: wrap;
    }

    nav {
        order: 3;
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
    }

    .bike-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .about-section {
        grid-template-columns: 1fr;
        gap: 25px;
    }
}

/* Mobile screens */
@media (max-width: 600px) {
    header {
        padding: 15px 5%;
    }

    .logo {
        font-size: 24px;
    }

    .nav-button {
        padding: 9px 12px;
        font-size: 12px;
    }

    nav {
        gap: 15px;
    }

    .hero {
        min-height: 470px;
        padding: 70px 6%;
        background-position: 60% center;
    }

    .bikes-section,
    .contact-section {
        padding: 60px 5%;
    }

    .filters {
        grid-template-columns: 1fr;
    }

    .bike-grid {
        grid-template-columns: 1fr;
    }

    .bike-card img {
        height: 240px;
    }

    .about-section {
        padding: 60px 6%;
    }

    .features {
        grid-template-columns: 1fr;
    }
}
```
## Java Script Code:
```

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const bikeGrid = document.getElementById("bikeGrid");
const noResults = document.getElementById("noResults");

let enquiries = [];

function filterBikes() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;
    const sortValue = sortFilter.value;

    const bikes = Array.from(
        bikeGrid.querySelectorAll(".bike-card")
    );

    bikes.forEach(function (bike) {
        const name = bike.dataset.name.toLowerCase();
        const category = bike.dataset.category;

        const matchesSearch = name.includes(searchText);
        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;

        bike.hidden = !(matchesSearch && matchesCategory);
    });

    const visibleBikes = bikes.filter(function (bike) {
        return !bike.hidden;
    });

    visibleBikes.sort(function (a, b) {
        const priceA = Number(a.dataset.price);
        const priceB = Number(b.dataset.price);

        if (sortValue === "low") {
            return priceA - priceB;
        }

        if (sortValue === "high") {
            return priceB - priceA;
        }

        return bikes.indexOf(a) - bikes.indexOf(b);
    });

    visibleBikes.forEach(function (bike) {
        bikeGrid.appendChild(bike);
    });

    noResults.hidden = visibleBikes.length !== 0;
}

searchInput.addEventListener("input", filterBikes);
categoryFilter.addEventListener("change", filterBikes);
sortFilter.addEventListener("change", filterBikes);

function addEnquiry(bikeName) {
    if (!enquiries.includes(bikeName)) {
        enquiries.push(bikeName);
    }

    updateEnquiryList();
}

function updateEnquiryList() {
    const enquiryList = document.getElementById("enquiryList");

    enquiryList.textContent = enquiries.length
        ? enquiries.join(", ")
        : "No motorcycles selected yet.";
}

function sendEnquiry() {
    if (enquiries.length === 0) {
        alert("Please select a motorcycle first.");
        return;
    }

    const message = "I am interested in: " + enquiries.join(", ");

    document.getElementById("customerMessage").value = message;

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });

    document.getElementById("customerName").focus({
        preventScroll: true
    });
}

document.getElementById("contactForm").addEventListener(
    "submit",
    function (event) {
        event.preventDefault();

        const name = document.getElementById("customerName").value.trim();
        const email = document.getElementById("customerEmail").value.trim();

        if (!name || !email) {
            alert("Please fill in your name and email.");
            return;
        }

        document.getElementById("formMessage").textContent =
            "Thank you, " + name +
            "! Your demo enquiry has been prepared. This form does not send data to a server.";

        this.reset();
    }
);
```

## OUTPUT
![alt text](<Screenshot 2026-11-03 084616.png>)
![alt text](<Screenshot 2026-11-03 084623.png>)
![alt text](<Screenshot 2026-11-03 084628.png>)
![alt text](<Screenshot 2026-11-03 084633.png>)
![alt text](<Screenshot 2026-11-03 084637.png>)
## RESULT
The program for creating commercial website using CSS Flexbox is executed successfully.
