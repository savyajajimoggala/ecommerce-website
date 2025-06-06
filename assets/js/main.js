const products=[{
    category: "Clothing",
    title: "Floral Print Summer T-Shirt",
    images: {
        default: "./img/product-1-1.png",
        hover: "./img/product-1-2.png"
    },
    rating: 5,
    prices: {
        new: "$125.69",
        old: "$138.47"
    },
},
{
    category: "Clothing",
    title: "White Shoes",
    images: {
        default: "./img/product-2-1.png",
        hover: "./img/product-2-1.png"
    },
    rating: 5,
    prices: {
        new: "$125.69",
        old: "$138.47"
    },
},
{
    category: "Clothing",
    title: "Kurtis",
    images: {
        default: "./img/product-3-1.png",
        hover: "./img/product-3-2.png"
    },
    rating: 5,
    prices: {
        new: "$125.69",
        old: "$138.47"
    },
    
},
{
    category: "Clothing",
    title: "Sandals",
    images: {
        default: "./img/product-4-1.png",
        hover: "./img/product-4-2.png"
    },
    rating: 5,
    prices: {
        new: "$125.69",
        old: "$138.47"
    },
    
},
{
    category: "Clothing",
    title: "Sandals",
    images: {
        default: "./img/product-5-1.png",
        hover: "./img/product-5-2.png"
    },
    rating: 5,
    prices: {
        new: "$125.69",
        old: "$138.47"
    },
    
},
{
    category: "Clothing",
    title: "Jeans",
    images: {
        default: "./img/product-6-1.png",
        hover: "./img/product-6-2.png"
    },
    rating: 5,
    prices: {
        new: "$125.69",
        old: "$138.47"
    },
},
{
    category: "Clothing",
    title: "Jumpsuit",
    images: {
        default: "./img/product-7-1.png",
        hover: "./img/product-7-2.png"
    },
    rating: 5,
    prices: {
        new: "$125.69",
        old: "$138.47"
    },
},
{
    category: "Clothing",
    title: "pillows and bedsheets",
    images: {
        default: "./img/product-8-1.png",
        hover: "./img/product-8-2.png"
    },
    rating: 5,
    prices: {
        new: "$125.69",
        old: "$138.47"
    },
}
]

const productContainer = document.getElementsByClassName("product-list")[0];

function renderProducts() {
    productContainer.innerHTML = "";
    products.forEach(product => {
        productContainer.innerHTML += `
            <div class="product__item">
                <div class="product__banner">
                    <a href="details.html" class="product__images">
                        <img src="${product.images.default}" alt="${product.title}" class="product__img default">
                        <img src="${product.images.hover}" alt="${product.title}" class="product__img hover">
                    </a>
                    <div class="product__actions">
                        <a href="#" class="action__btn" aria-label="Quick View"><i class="fi fi-rs-eye"></i></a>
                        <a href="#" class="action__btn" aria-label="Add To Wishlist"><i class="fi fi-rs-heart"></i></a>
                        <a href="#" class="action__btn" aria-label="Compare"><i class="fi fi-rs-shuffle"></i></a>
                    </div>
                </div> <!-- ✅ Closing tag for product__banner -->

                <div class="product__content">
                    <span class="product__category">${product.category}</span>
                    <a href="details.html"><h2 class="product__title">${product.title}</h2></a>
                    <div class="product__rating">
                        ${'<i class="fi fi-rs-star"></i>'.repeat(product.rating)}
                    </div>
                    <div class="product__price flex">
                        <span class="new__price">${product.prices.new}</span>
                        <span class="old__price">${product.prices.old}</span>
                    </div>
                    <a href="#" class="action_btn cart_btn" aria-label="Add To Cart">
                        <i class="fi fi-rs-shopping-bag-add"></i>
                    </a>
                </div>
            </div>
        `;
    });
}
renderProducts();
const popularContainer = document.getElementsByClassName("popular")[0];

function renderPopularProducts() {
    popularContainer.innerHTML = "";
    products.forEach(product => {
        popularContainer.innerHTML += `
            <div class="product__item">
                <div class="product__banner">
                    <a href="details.html" class="product__images">
                        <img src="${product.images.default}" alt="${product.title}" class="product__img default">
                        <img src="${product.images.hover}" alt="${product.title}" class="product__img hover">
                    </a>
                    <div class="product__actions">
                        <a href="#" class="action__btn" aria-label="Quick View"><i class="fi fi-rs-eye"></i></a>
                        <a href="#" class="action__btn" aria-label="Add To wishlist"><i class="fi fi-rs-heart"></i></a>
                        <a href="#" class="action__btn" aria-label="Compare"><i class="fi fi-rs-shuffle"></i></a>
                    </div>
                    <div class="product__badge light-pink">${product.badge}</div>
                </div>
                <div class="product__content">
                    <span class="product__category">${product.category}</span>
                    <a href="details.html"><h2 class="product__title">${product.title}</h2></a>
                    <div class="product__rating">
                        ${'<i class="fi fi-rs-star"></i>'.repeat(product.rating)}
                    </div>
                    <div class="product__price flex">
                        <span class="new__price">${product.prices.new}</span>
                        <span class="old__price">${product.prices.old}</span>
                    </div>
                    <a href="#" class="action_btn cart_btn" aria-label="Add To Cart">
                        <i class="fi fi-rs-shopping-bag-add"></i>
                    </a>
                </div>
            </div>
        `;
    });
}


const newlyAddedContainer = document.getElementsByClassName("newlyAdded")[0];

function renderNewlyAddedProducts() {
    newlyAddedContainer.innerHTML = "";
    products.forEach(product => {
        newlyAddedContainer.innerHTML += `
            <div class="product__item">
                <div class="product__banner">
                    <a href="details.html" class="product__images">
                        <img src="${product.images.default}" alt="${product.title}" class="product__img default">
                        <img src="${product.images.hover}" alt="${product.title}" class="product__img hover">
                    </a>
                    <div class="product__actions">
                        <a href="#" class="action__btn" aria-label="Quick View"><i class="fi fi-rs-eye"></i></a>
                        <a href="#" class="action__btn" aria-label="Add To wishlist"><i class="fi fi-rs-heart"></i></a>
                        <a href="#" class="action__btn" aria-label="Compare"><i class="fi fi-rs-shuffle"></i></a>
                    </div>
                    <div class="product__badge light-pink">${product.badge}</div>
                </div>
                <div class="product__content">
                    <span class="product__category">${product.category}</span>
                    <a href="details.html"><h2 class="product__title">${product.title}</h2></a>
                    <div class="product__rating">
                        ${'<i class="fi fi-rs-star"></i>'.repeat(product.rating)}
                    </div>
                    <div class="product__price flex">
                        <span class="new__price">${product.prices.new}</span>
                        <span class="old__price">${product.prices.old}</span>
                    </div>
                    <a href="#" class="action_btn cart_btn" aria-label="Add To Cart">
                        <i class="fi fi-rs-shopping-bag-add"></i>
                    </a>
                </div>
            </div>
        `;
    });
}

let productContainer1=productContainer;
productContainer1 = document.getElementsByClassName("product-list")[0];

const newArrivals=[{
    category: "Clothing",
    title: "Floral Print Summer T-Shirt",
    images: {
        default: "./img/product-1-1.png",
        hover: "./img/product-1-2.png"
    },
    rating: 5,
    prices: {
        new: "$125.69",
        old: "$138.47"
    },
    badge: "Hot"
},
{
    category: "Clothing",
    title: "White Shoes",
    images: {
        default: "./img/product-2-1.png",
        hover: "./img/product-2-1.png"
    },
    rating: 5,
    prices: {
        new: "$125.69",
        old: "$138.47"
    },
},
{
    category: "Clothing",
    title: "Kurtis",
    images: {
        default: "./img/product-3-1.png",
        hover: "./img/product-3-2.png"
    },
    rating: 5,
    prices: {
        new: "$125.69",
        old: "$138.47"
    },
},
{
    category: "Clothing",
    title: "Sandals",
    images: {
        default: "./img/product-4-1.png",
        hover: "./img/product-4-2.png"
    },
    rating: 5,
    prices: {
        new: "$125.69",
        old: "$138.47"
    },
}]
const newArrivalContainer = document.getElementById("new-arrival");


function renderArrivals() {
    newArrivalContainer.innerHTML = "";
    products.forEach(product => {
        newArrivalContainer.innerHTML += `
            <div class="product__item swiper-slide">
                <div class="product__banner">
                    <a href="details.html" class="product__images">
                        <img src="${product.images.default}" alt="${product.title}" class="product__img default">
                        <img src="${product.images.hover}" alt="${product.title}" class="product__img hover">
                    </a>
                    <div class="product__actions">
                        <a href="#" class="action__btn" aria-label="Quick View"><i class="fi fi-rs-eye"></i></a>
                        <a href="#" class="action__btn" aria-label="Add To wishlist"><i class="fi fi-rs-heart"></i></a>
                        <a href="#" class="action__btn" aria-label="Compare"><i class="fi fi-rs-shuffle"></i></a>
                    </div>
                    <div class="product__badge light-pink">${product.badge}</div>
                </div>
                <div class="product__content">
                    <span class="product__category">${product.category}</span>
                    <a href="details.html"><h2 class="product__title">${product.title}</h2></a>
                    <div class="product__rating">
                        ${'<i class="fi fi-rs-star"></i>'.repeat(product.rating)}
                    </div>
                    <div class="product__price flex">
                        <span class="new__price">${product.prices.new}</span>
                        <span class="old__price">${product.prices.old}</span>
                    </div>
                    <a href="#" class="action_btn cart_btn" aria-label="Add To Cart">
                        <i class="fi fi-rs-shopping-bag-add"></i>
                    </a>
                </div>
            </div>
        `;
    });
}

renderArrivals();


var swiperCategories = new Swiper(".categories__container", {
    spaceBetween: 24,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 24,
        },
    },
});

var swiperProducts = new Swiper(".new__container", {
    spaceBetween: 24,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
});


const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[content]');

    tabs.forEach((tab) => {
     tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('active-tab');
        });

        target.classList.add('active-tab');

        tabs.forEach((tab) => {
            tab.classList.remove('active-tab');
        });

       tab.classList.add('active-tab');
    });
});
