import { auth } from './firebase.auth.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

// 2. CAR DATA DATABASE
const carData = [
    {
        id: 1,
        brand: "Konigsegg",
        name: "Konigsegg Jesko Absolut (2020)",
        fullPrice: "$3,000,000",
        preOrderPrice: "$300,000",
        image: "img/products/f1 jesko.jpeg",
        description: "The Jesko Absolut is the fastest Koenigsegg ever made and will ever be made.",
        history: "Named after Jesko von Koenigsegg, the father of founder Christian von Koenigsegg, the Absolut was engineered for ultimate top speed by reducing drag to 0.278 Cd.",
        specs: { speed: "531 km/h+", accel: "2.5s", engine: "5.0L V8 Bi-Turbo", weight: "1,390 kg" },
        editions: {
            "standard": { m: 3000000, p: 300000, img: "img/products/f1 jesko.jpeg" },
            "Primium":  { m: 4300000, p: 430000, img: "img/products/kprimiumed.png" },
            "Spacial":  { m: 4800000, p: 480000, img: "img/products/kjspecialed.png" },
            "Collector": { m: 6500000, p: 650000, img: "img/products/kjcollectored.png" }
        }
    },
    {
        id: 2,
        brand: "Bugatti",
        name: "Bugatti Chiron Super Sport 300+ (2021)",
        fullPrice: "$4,300,000",
        preOrderPrice: "$430,000",
        image: "img/products/Bugatti.jpeg",
        description: "The Bugatti Chiron Super Sport is the ultimate grand tourer, combining brutal power with absolute luxury.",
        history: "The 300+ edition celebrates Bugatti becoming the first manufacturer to break the 300mph barrier with a production-based car.",
        specs: { speed: "490 km/h", accel: "2.4s", engine: "8.0L W16 Quad-Turbo", weight: "1,977 kg" },
        editions: {
            "standard": { m: 4300000, p: 430000, img: "img/products/Bugatti.jpeg" },
            "Primium":  { m: 5100000, p: 510000, img: "img/products/buggatiprimiumed.png" },
            "Spacial":  { m: 6200000, p: 620000, img: "img/products/spacialedition.png" },
            "Collector": { m: 7500000, p: 750000, img: "img/products/Bugatticollector.png" }
        }
    },
    {
        id: 3,
        brand: "Lamborghini",
        name: "Lamborghini Veneno (2014)",
        fullPrice: "$4,500,000",
        preOrderPrice: "$450,000",
        image: "img/products/Lambo.jpeg",
        description: "One of the rarest cars in the world, designed to celebrate Lamborghini's 50th anniversary.",
        history: "With only a handful of units ever produced, the Veneno focuses on optimum aerodynamics to provide the feel of a racing prototype.",
        specs: { speed: "355 km/h", accel: "2.8s", engine: "6.5L V12", weight: "1,490 kg" },
        editions: {
            "standard": { m: 4500000, p: 450000, img: "img/products/Lambo.jpeg" },
            "Primium":  { m: 4800000, p: 480000, img: "img/products/LAMBOPRED.png" },
            "Spacial":  { m: 5500000, p: 550000, img: "img/products/LAMBOSPED.png" },
            "Collector": { m: 6200000, p: 620000, img: "img/products/LAMBOCOLLECTED.png" }
        }
    },
    {
        id: 4,
        brand: "Mclaren",
        name: "Mclaren Senna (2018)",
        fullPrice: "$1,200,000",
        preOrderPrice: "$120,000",
        image: "img/products/senna.jpeg",
        description: "Named after the legendary F1 driver, built for the track.",
        history: "The Senna is the personification of McLaren’s DNA at its most extreme, creating the purest connection between car and driver.",
        specs: { speed: "335 km/h", accel: "2.8s", engine: "4.0L V8 Twin-Turbo", weight: "1,198 kg" },
        editions: {
            "standard": { m: 1200000, p: 120000, img: "img/products/senna.jpeg" },
            "Primium":  { m: 1800000, p: 180000, img: "img/products/SENNAPRED.png" },
            "Spacial":  { m: 2300000, p: 230000, img: "img/products/SENNASPED.png" },
            "Collector": { m: 3000000, p: 300000, img: "img/products/SENNACOLLECTED.png" }
        }
    },
    {
        id: 5,
        brand: "Ferrari",
        name: "Ferrari F40 (1992)",
        fullPrice: "$2,200,000",
        preOrderPrice: "$220,000",
        image: "img/products/Ferrari.jpeg",
        description: "The last car personally approved by Enzo Ferrari. A raw, analog masterpiece.",
        history: "Launched in 1987 for Ferrari's 40th anniversary, it was the first production car to break the 200 mph barrier.",
        specs: { speed: "324 km/h", accel: "4.1s", engine: "2.9L Twin-Turbo V8", weight: "1,250 kg" },
        editions: {
            "standard": { m: 2200000, p: 220000, img: "img/products/Ferrari.jpeg" },
            "Primium":  { m: 2500000, p: 250000, img: "img/products/ff40PRED.png" },
            "Spacial":  { m: 2800000, p: 280000, img: "img/products/ff40SPED.png" },
            "Collector": { m: 3900000, p: 390000, img: "img/products/ff40CED.png" }
        }
    },
    {
        id: 6,
        brand: "BMW",
        name: "BMW M3 GTR (2001)",
        fullPrice: "$2,000,000",
        preOrderPrice: "$200,000",
        image: "img/products/nfs.jpeg",
        description: "The hero car of Need for Speed: Most Wanted.",
        history: "A race car for the road, the E46 M3 GTR featured a powerful V8, a rarity for the M3 lineup at the time.",
        specs: { speed: "295 km/h", accel: "4.0s", engine: "4.0L V8", weight: "1,350 kg" }
    },
    {
        id: 7,
        brand: "MITSUBISHI",
        name: "Mitsubishi Lancer Evolution MR (2005)",
        fullPrice: "$185,000",
        preOrderPrice: "$18,500",
        image: "img/products/EVO.jpeg",
        description: "A rally legend for the road.",
        history: "The Evo IX MR represents the pinnacle of Mitsubishi's rally-inspired performance sedans.",
        specs: { speed: "250 km/h", accel: "4.8s", engine: "2.0L Turbo I4", weight: "1,400 kg" }
    },
    {
        id: 8,
        brand: "Nissan",
        name: "Nissan GTR R35 Nismo SE (2022)",
        fullPrice: "$300,000",
        preOrderPrice: "$30,000",
        image: "img/products/nissan nismo.jpeg",
        description: "The ultimate evolution of the R35 platform.",
        history: "Nismo engineering brings GT3 racing tech to the street, featuring carbon fiber components and enhanced turbos.",
        specs: { speed: "315 km/h", accel: "2.5s", engine: "3.8L V6 Twin-Turbo", weight: "1,703 kg" }
    },
    {
        id: 9,
        brand: "Nissan",
        name: "Nissan Sky-line GTR R34 (2002)",
        fullPrice: "$3,000,000",
        preOrderPrice: "$300,000",
        image: "img/products/r34.jpeg",
        description: "The icon of JDM culture, known as Godzilla.",
        history: "Famous for its RB26 engine and advanced ATTESA E-TS AWD system, it dominated Group A racing.",
        specs: { speed: "250 km/h", accel: "4.7s", engine: "2.6L Twin-Turbo I6", weight: "1,560 kg" }
    },
    {
        id: 10,
        brand: "Honda",
        name: "Honda Civic Type R (2026)",
        fullPrice: "$48,000",
        preOrderPrice: "$4,800",
        image: "img/products/honda.png",
        description: "The most powerful Civic ever built.",
        history: "A continuation of Honda's quest for the fastest front-wheel-drive production car title.",
        specs: { speed: "275 km/h", accel: "5.4s", engine: "2.0L Turbo I4", weight: "1,430 kg" }
    },
    {
        id: 11,
        brand: "Porsche",
        name: "Porsche 911 GT3 RS (2016)",
        fullPrice: "$245,000",
        preOrderPrice: "$24,500",
        image: "img/products/poshe.jpeg",
        description: "Precision engineering for the perfect driving experience.",
        history: "Designed for maximum track performance while remaining street legal, the GT3 RS is a masterpiece of balance.",
        specs: { speed: "310 km/h", accel: "3.3s", engine: "4.0L Flat-6", weight: "1,420 kg" }
    },
    {
        id: 12,
        brand: "Aston Martin",
        name: "Aston Martin DB-10 Bond Edition (2016)",
        fullPrice: "$3,500,000",
        preOrderPrice: "$350,000",
        image: "img/products/aston martin db -10.png",
        description: "The secret agent's car of choice.",
        history: "Specifically built for the film 'Spectre', only 10 were made, making it one of the rarest Aston Martins.",
        specs: { speed: "305 km/h", accel: "4.7s", engine: "4.7L V8", weight: "1,550 kg" }
    },
    {
        id: 13,
        brand: "Buggatti",
        name: "Buggatti RV Motohome (2026)",
        fullPrice: "$23,500,000",
        preOrderPrice: "$2,300,000",
        image: "img/products/bugati rv.jpeg",
        description: "Unparalleled luxury and performance in a motorhome.",
        history: "A concept reimagining luxury travel with the heart of a hypercar.",
        specs: { speed: "200 km/h", accel: "8.0s", engine: "Quad-Turbo W16", weight: "12,000 kg" }
    },
    {
        id: 14,
        brand: "Fleetwood",
        name: "Bounder Breaking Bad Edition (1986)",
        fullPrice: "$85,000",
        preOrderPrice: "$8,500",
        image: "img/products/breaking bad rv.png",
        description: "A piece of television history.",
        history: "The iconic rolling laboratory from Albuquerque, now a collector's dream.",
        specs: { speed: "120 km/h", accel: "25s", engine: "V8 Gas Engine", weight: "6,500 kg" }
    },
    {
        id: 15,
        brand: "Land Rover",
        name: "Land Rover Defender Station Wagon (2016)",
        fullPrice: "$110,000",
        preOrderPrice: "$11,000",
        image: "img/products/suv land rover.png",
        description: "Go anywhere, do anything.",
        history: "The final production year of the original classic Defender shape.",
        specs: { speed: "145 km/h", accel: "14s", engine: "2.2L Diesel", weight: "2,050 kg" }
    },
    {
        id: 16,
        brand: "Land Rover",
        name: "Range Rover Sport (2025)",
        fullPrice: "$210,000",
        preOrderPrice: "$21,000",
        image: "img/products/rr suv.png",
        description: "The pinnacle of modern luxury SUVs.",
        history: "Redefining performance luxury with advanced suspension and hybrid power.",
        specs: { speed: "250 km/h", accel: "4.3s", engine: "3.0L Hybrid I6", weight: "2,300 kg" }
    }
];


// 3. PRODUCT PAGE LOGIC
let slideIndex = 0;
let slideTimer;

window.updatePrices = function(selectElement) {
    const carID = localStorage.getItem('carID') || "1"; 
    const selectedEdition = selectElement ? selectElement.value : "standard";
    const currentCar = carData.find(car => car.id == carID);

    if (currentCar) {
        let marketPrice, prePrice, displayImg;

        if (currentCar.editions && currentCar.editions[selectedEdition]) {
            marketPrice = currentCar.editions[selectedEdition].m;
            prePrice = currentCar.editions[selectedEdition].p;
            displayImg = currentCar.editions[selectedEdition].img;
        } else {
            const basePrice = Number(currentCar.fullPrice.toString().replace(/[^0-9.-]+/g, ""));
            const basePre = Number(currentCar.preOrderPrice.toString().replace(/[^0-9.-]+/g, ""));
            let mult = 1;
            if (selectedEdition === "Primium") mult = 1.2;
            else if (selectedEdition === "Spacial") mult = 1.5;
            else if (selectedEdition === "Collector") mult = 2.0;

            marketPrice = basePrice * mult;
            prePrice = basePre * mult;
            displayImg = currentCar.image;
        }

        const mainImg = document.getElementById('MainImg');
        if(mainImg) mainImg.src = displayImg;

        const overviewImg = document.getElementById('overview-img');
        if(overviewImg) overviewImg.src = displayImg;

        if(document.getElementById('marketPrice')) document.getElementById('marketPrice').innerText = "$" + Math.round(marketPrice).toLocaleString();
        if(document.getElementById('prePrice')) document.getElementById('prePrice').innerText = "$" + Math.round(prePrice).toLocaleString();
        if(document.getElementById('car-brand')) document.getElementById('car-brand').innerText = "Home / " + currentCar.brand;
        if(document.getElementById('car-name')) document.getElementById('car-name').innerText = currentCar.name;
        if(document.getElementById('car-description')) document.getElementById('car-description').innerText = currentCar.description;

        if (currentCar.specs) {
            if(document.getElementById('spec-speed')) document.getElementById('spec-speed').innerText = currentCar.specs.speed;
            if(document.getElementById('spec-accel')) document.getElementById('spec-accel').innerText = currentCar.specs.accel;
            if(document.getElementById('spec-engine')) document.getElementById('spec-engine').innerText = currentCar.specs.engine;
            if(document.getElementById('spec-weight')) document.getElementById('spec-weight').innerText = currentCar.specs.weight;
        }

        const smallImgs = document.getElementsByClassName("smallimg");
        const editionKeys = currentCar.editions ? Object.keys(currentCar.editions) : [];
        for (let i = 0; i < smallImgs.length; i++) {
            smallImgs[i].src = (currentCar.editions && editionKeys[i]) ? currentCar.editions[editionKeys[i]].img : currentCar.image;
        }

        const ovThumbs = document.getElementsByClassName("ov-thumb");
        for (let i = 0; i < ovThumbs.length; i++) {
            ovThumbs[i].src = (currentCar.editions && editionKeys[i]) ? currentCar.editions[editionKeys[i]].img : currentCar.image;
        }
        
        startAutoSlide();
    }
}

function startAutoSlide() {
    clearInterval(slideTimer);
    slideTimer = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 3000);
}

window.manualSlide = function(n) {
    slideIndex = n;
    showSlides(slideIndex);
    startAutoSlide();
}

function showSlides(n) {
    const ovThumbs = document.getElementsByClassName("ov-thumb");
    const mainOverview = document.getElementById('overview-img');
    
    if (ovThumbs.length === 0 || !mainOverview) return;
    if (n >= ovThumbs.length) slideIndex = 0;
    if (n < 0) slideIndex = ovThumbs.length - 1;

    for (let i = 0; i < ovThumbs.length; i++) {
        ovThumbs[i].classList.remove("active");
        ovThumbs[i].style.borderColor = "transparent";
    }

    mainOverview.src = ovThumbs[slideIndex].src;
    ovThumbs[slideIndex].classList.add("active");
    ovThumbs[slideIndex].style.borderColor = "#a01705";
}


// 4. REVIEWS & FEEDBACK
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('carz-form');
    const displayArea = document.getElementById('display-area');

    if (form && displayArea) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); 
            const nameValue = document.getElementById('user-name').value;
            const msgValue = document.getElementById('user-msg').value;

            const newReview = document.createElement('div');
            newReview.style.border = "1px solid #088178";
            newReview.style.padding = "20px";
            newReview.style.margin = "10px 0";
            newReview.style.borderRadius = "10px";
            newReview.style.background = "#f0f8f0"; 
            
            newReview.innerHTML = `
                <p>"${msgValue}"</p>
                <h4 style="color:#088178;">- ${nameValue}</h4>
            `;

            displayArea.prepend(newReview);

            fetch(this.action, {
                method: 'POST',
                body: new FormData(this),
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) form.reset();
            })
            .catch(error => console.error("Network Error:", error));
        });
    }

    const select = document.getElementById('edition-select');
    if (select) {
        select.value = "standard";
        updatePrices(select);
    }

    const smallImgs = document.getElementsByClassName("smallimg");
    for (let i = 0; i < smallImgs.length; i++) {
        smallImgs[i].onclick = function() {
            document.getElementById('MainImg').src = this.src;
            const overviewImg = document.getElementById('overview-img');
            if(overviewImg) overviewImg.src = this.src;
        };
    }
});


import { auth } from './firebase.auth.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

// SIGN UP LOGIC
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('reg-email').value;
        const pass = document.getElementById('reg-pass').value;
        const confirmPass = document.getElementById('reg-pass-confirm').value;

        if (pass !== confirmPass) {
            alert("Passwords do not match!");
            return;
        }

        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                alert("Account created! Welcome to CARZ.");
                window.location.href = "login.html";
            })
            .catch((error) => {
                console.error(error);
                alert(error.message);
            });
    });
}

// LOGIN LOGIC
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-username').value; // Ensure this ID matches your HTML
        const password = document.getElementById('login-password').value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Login Successful!");
                window.location.href = "index.html";
            })
            .catch((error) => {
                console.error(error);
                alert("Login failed: " + error.message);
            });
    });
}
