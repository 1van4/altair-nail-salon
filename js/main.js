//prefiksi//prefiksi
let prefixOffers = "img/offer";
let prefixService = "img/servicebg.jpg"
//objekti za dinamicko kreiranje
let links = [
    {
        path: "index.html",
        text: "Home",
        isActive: true
    },
    {
        path: "index.html#about",
        text: "About",
        isActive: false
    },
    {
        path: "index.html#secSer",
        text: "Services",
        isActive: false
    },
    {
        path: "index.html#secGall",
        text: "Gallery",
        isActive: false
    },
    {
        path: "index.html#secContact",
        text: "Contact",
        isActive: false
    },
    {
        path: "author.html",
        text: "Author",
        isActive: false
    },
    {
        path: "Projektnizadatak.pdf",
        text: "Doc",
        isActive: false
    },
    {
        path: "altair-beauty-zip",
        text: "Zip",
        isActive: false
    }
];

const productObj = [
    {
        path: "nude.jpg",
        heading: "Spa treatments"

    },
    {
        path: "blue.jpg",
        heading: "Various colors, styles & designs"

    },
    {
        path: "colors.jpg",
        heading: "Premium nail care products"

    },
    {
        path: "polish.jpg",
        heading: "High-quality gels & polishes"

    }

];
let navObj = [
    {
        path: "index.html",
        text: "Home",
        isActive: true
    },
    {
        path: "index.html#about",
        text: "About",
        isActive: false
    },
    {
        path: "index.html#secSer",
        text: "Services",
        isActive: false
    },
    {
        path: "index.html#secGall",
        text: "Gallery",
        isActive: false
    },
    {
        path: "index.html#secContact",
        text: "Contact",
        isActive: false
    },
    {
        path: "author.html",
        text: "Author",
        isActive: false
    }
];


var Services = [
    {
        header: 'Classic Manicure',
        text: 'Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage with cuticle oil treatment and a hot towel, topped off with the perfect paint. (40 min)',
        price: '$15'
    },
    {
        header: 'Deluxe Manicure',
        text: 'If you want a more premium service. Our classic manicure- with an additional hand scrub and mask, add optional Shellac for a more longer-lasting look. (60 min).',
        price: '$25'
    },
    {
        header: 'Gel Manicure',
        text: 'Using premium gel polish, your nails are cured under UV light for a smooth, shiny finish. This longer-lasting option is perfect for busy individuals who still want their nails to look flawless.(60min)',
        price: '$20'
    },
    {
        header: 'Acrylic Nail Extensions',
        text: 'Achieve beautiful, strong nails with this service. It adds length and durability, is customizable to your desired shape and size. Perfect for those who want long-lasting, flawless nails.(90min)',
        price: '$25'
    },
    {
        header: 'French Manicure',
        text: 'A look that offers a clean, classic design with white tips and a natural pink or nude base. Perfect when you want a polished, sophisticated appearance for any occasion.(90min)',
        price: '$25'
    },
    {
        header: 'Nail Art',
        text: 'Add a personal touch to your nails with custom nail art. Whether you want simple designs or intricate patterns, our nail artists can create stunning designs that match your style.(90min)',
        price: '$30'
    }
];

const galleries = [
    {
        id: "popular",
        title: "Popular",
        images: [
            "img/french.jpg",
            "img/nude2.jpeg",
            "img/square-french.jpeg",
            "img/red1.jpeg",
            "img/nude.jpg",
            "img/white1.jpeg",
            "img/red-french.jpg",

        ]
    },
    {
        id: "art",
        title: "Nail Art",
        images: [
            "img/gold.jpeg",
            "img/red.jpg",
            "img/black-card.jpeg",
            "img/red-card.jpeg",
            "img/blue-pink.JPG",
            "img/blue-sparkle.jpg",
            "img/kiss.JPG"
        ]
    },
    {
        id: "festive",
        title: "Festive Nails",
        images: [
            "img/x-mas4.jpg",
            "img/x-mas1.jpeg",
            "img/x-mas2.jpeg",
            "img/x-mas-bear.jpeg",
            "img/x-mas.jpg",
            "img/pink-xmas.jpg",
            "img/logo-x-mas.JPG"
        ]
    }
];

const footerAboutObj = [
    {
        name: "Author",
        path: "author.html"
    },
    {
        name: "Documentation",
        path: "documentation.pdf"
    },
    {
        name: "Contact",
        path: "#form"
    },
    {
        name: "Download",
        path: "#altair-beauty-salon.zip"
    }
];



function makeLi(link) {
    let html = `<a class="nav-link  mx-1 fs-5" href="${link.path}" class="nav-item nav-link ${link.isActive ?
        'active' : ''}">${link.text}</a>`;
    return html
}
let navList = ""
for (let link of links) {
    navList += makeLi(link)
}
let navs = document.querySelector("#myNav")
if (navs) {
    navs.innerHTML = navList
}
//ELEMENTI ZA DINAMICKO ISPISIVANJE



const slideTextArr = ["Loyalty Rewards Program",
    "Easy Online Booking", "Student Discount Available", "Premium Products Only"];


window.onload = function () {




    var divServices = document.getElementById('services');

    function createService(objService) {
        return `
    <div class="col-lg-4 col-md-6 servicecol " data-wow-delay="0.1s">
        <div class="service-item rounded d-flex h-100">
            <div class="service-img rounded">
                <img class="img-fluid" src="${prefixService}" alt="background">
            </div>
            <div class="service-text rounded p-5 text-center">
               <h4 class="mb-5">${objService.header}</h4>
                <p >${objService.text}</p>
                 <div class="service-price">${objService.price}</div>
            </div>
        </div>
    </div>`;
    }

    for (let objService of Services) {
        divServices.innerHTML += createService(objService);
    }


    const filterBox = document.getElementById("gallery-filters");
    const galleryContent = document.getElementById("gallery-content");

    // gallery btns
    galleries.forEach((g, index) => {
        filterBox.innerHTML += `<button class="btn btn-outline-dark ${index === 0 ? "active" : ""}" data-gallery="${g.id}""> ${g.title} </button>`;

        galleryContent.innerHTML +=
            ` <div class="gallery-wrapper ${index !== 0 ? "d-none" : ""}"id="${g.id}">
            <div class="gallery-container d-flex justify-content-center gap-2">
                ${g.images.map(img => ` <img src="${img}" class="gallery-img" alt="">`).join("")}
            </div>
        </div> `;
    });

    filterBox.addEventListener("click", e => {
        if (!e.target.matches("button")) return;

        document.querySelectorAll("#gallery-filters button")
            .forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");

        document.querySelectorAll(".gallery-wrapper")
            .forEach(g => g.classList.add("d-none"));

        document.getElementById(e.target.dataset.gallery)
            .classList.remove("d-none");
    });

    document.addEventListener("mouseover", e => {
        if (!e.target.classList.contains("gallery-img")) return;

        const gallery = e.target.closest(".gallery-container");

        gallery.querySelectorAll(".gallery-img")
            .forEach(img => img.classList.remove("active"));

        e.target.classList.add("active");
    });

    document.addEventListener("mouseout", e => {
        if (!e.target.classList.contains("gallery-img")) return;
        e.target.classList.remove("active");
    });

    const form = document.getElementById("apt-form");
    const serviceSelect = document.getElementById("apt-service");
    const successMsg = document.querySelector(".sent-message");
    const errorMsg = document.querySelector(".error-message");



    const services = [
        "Classic Manicure",
        "Gel Manicure",
        "Pedicure",
        "Nail Art",
        "Acrylic Nails",
        "Spa Treatment"
    ];

    serviceSelect.innerHTML = `<option value="">Select service</option>`;
    services.forEach(service => {
        const option = document.createElement("option");
        option.value = service;
        option.textContent = service;
        serviceSelect.appendChild(option);
    });


    const nameRegex = /^[A-Za-z]{2,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9]{7,15}$/;
    const dateRegex = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    const timeRegex = /^([01]\d|1[0-8]):[0-5]\d$/;

    ///////////////

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        errorMsg.textContent = "";
        successMsg.style.display = "none";

        const name = document.getElementById("apt-name").value.trim();
        const lastname = document.getElementById("apt-lastname").value.trim();
        const email = document.getElementById("apt-email").value.trim();
        const phone = document.getElementById("apt-phone").value.trim();
        const date = document.getElementById("apt-date").value;
        const time = document.getElementById("apt-time").value;
        const message = document.getElementById("apt-message").value.trim();
        const service = serviceSelect.value;

        if (!nameRegex.test(name)) {
            errorMsg.textContent = "Name must contain only letters (2-20).";
            return;
        }

        if (!nameRegex.test(lastname)) {
            errorMsg.textContent = "Last name must contain only letters (2-20).";
            return;
        }


        if (!emailRegex.test(email)) {
            errorMsg.textContent = "Please enter a valid email address.";
            return;
        }


        if (!phoneRegex.test(phone)) {
            errorMsg.textContent = "Phone number must contain 7-15 digits.";
            return;
        }


        if (!date || !time) {
            errorMsg.textContent = "Please select date and time.";
            return;
        }

        const selectedDateTime = new Date(`${date}T${time}`);
        const now = new Date();

        if (selectedDateTime <= now) {
            errorMsg.textContent = "Appointment must be in the future.";
            return;
        }

        if (service === "") {
            errorMsg.textContent = "Please select a service.";
            return;
        }

        if (message.length > 300) {
            errorMsg.textContent = "Message must be 300 characters or shorter.";
            return;
        }
        else {
            successMsg.style.display = "block";
            form.reset();
        }

    });

    //preloader
    $(document).ready(function () {
        setTimeout(function () {
            $("#preloader").animate(
                {
                    opacity: 0
                }, 1000, function () {
                    $(this).css("display", "none");

                    $("body").animate({ opacity: 1 }, 1900);
                });
        }, 1200);
    });



    //slide text iznad headera
    var currentIndex = 0;
    function slideText() {

        slideTextHeaderBlock.innerHTML = `<p class="text-center ">${slideTextArr[currentIndex]}</p>`;

        currentIndex = (currentIndex + 1) % slideTextArr.length;

    }

    setInterval(slideText, 2000);

    //offers blokovi
    for (const product of productObj) {
        card += `<div class="col-lg-3 col-sm-6 col-11">
            <div class="card mt-5">
            <img src="${prefixOffers + product.path}" class="card-img-top" alt="${product.heading}">
                <div class="card-body">
                <h3 class="card-title fs-5 fw-bold">${product.heading}</h3>
   
                </div>
            </div>
        </div>`;
    }
    productCardBlock.innerHTML = card;
    //hover za .card
    $(".card").hover(
        function () {
            $(this).addClass("cardhover");
        },
        function () {
            $(this).removeClass("cardhover");
        }
    );
    //footer
    for (const link of footerAboutObj) {
        footerAboutText += `<li class="pt-1"><a href="${link.path}">${link.name}</a></li>`
    }
    footerAbout.innerHTML = footerAboutText;

    for (const link of navObj) {
        footerNavText += `<li class="pt-1"><a href="${link.path}">${link.text}</a></li>`;
    }
    footerNav.innerHTML = footerNavText;
}
//text slides, dinamicki ispisan tekst, menja se na 2 sekunde
let slideTextHeaderBlock = document.getElementById("slideTextHeader");


// offers kartice, dinamicki ispisani
let productCardBlock = document.getElementById("productCard");

let card = "";


//swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


let footerAbout = document.getElementById("footerAbout");
let footerAboutText = "";

let footerNav = document.getElementById("footerNav");
let footerNavText = "";

const footerSocialObj = [{
    icon: "fa-brands fa-instagram",
    path: "https://instagram.com"
},
{
    icon: "fa-brands fa-facebook",
    path: "https://facebook.com"
},
{
    icon: "fa-brands fa-linkedin",
    path: "https://linkedin.com"
},
{
    icon: "fa-brands fa-youtube",
    path: "https://youtube.com"
}
];

let footerSocials = document.getElementById("footerSocials");
let footerSocialsText = "";

for (const link of footerSocialObj) {
    footerSocialsText += `<li class="ps-3"><a href="${link.path}"><i class="${link.icon}"></i></a></li>`
}
footerSocials.innerHTML = footerSocialsText;





