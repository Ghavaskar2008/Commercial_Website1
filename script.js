
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
