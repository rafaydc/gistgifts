(() => {
const products = [
    {
        "image": "https://www.mygiftstop.com/cdn/shop/files/luminox-3051-bo-men-s-navy-seal-colormark-dive-watch-rugged-blackout-swiss-made-timepiece-my-gift-stop-3_600x.jpg?v=1716807510",
        "brand": "LUMINOX",
        "description": "Luminox 3051.BO Men's Navy SEAL Colormark Dive Watch ",
        "oldPrice": "$495.00",
        "newPrice": "$185.94",
        "save": "SAVE 62%"
    },
    {
        "image": "https://www.mygiftstop.com/cdn/shop/files/luminox-3051-bo-men-s-navy-seal-colormark-dive-watch-rugged-blackout-swiss-made-timepiece-my-gift-stop-2_600x.jpg?v=1716807509",
        "brand": "CASIO",
        "description": "Casio GA100-1A1 Men's G-Shock Black resin Strap Watch",
        "oldPrice": "$110.00",
        "newPrice": "$74.84",
        "save": "SAVE 32%"
    },
    {
        "image": "https://www.mygiftstop.com/cdn/shop/products/luminox-3059-evo-navy-seal-colormark-dive-watch-my-gift-stop-2_600x.jpg?v=1716800914",
        "brand": "Luminox",
        "description": "Luminox 3059 EVO Navy SEAL Colormark Dive Watch",
        "oldPrice": "$$445.00",
        "newPrice": "$198.94",
        "save": "SAVE 55%"
    },
    {
        "image": "https://www.mygiftstop.com/cdn/shop/products/swarovski-women-s-bangle-swarovski-symbolic-blue-and-white-crystals-or-5171991-my-gift-stop-3_600x.jpg?v=1716713912",
        "brand": "Swarovski",
        "description": "Swarovski Women's Bangle - Swarovski Symbolic Blue and White Crystals | 5171991",
        "oldPrice": "$$125.00",
        "newPrice": "$76.60",
        "save": "SAVE 39%"
    },
    {
        "image": "https://www.mygiftstop.com/cdn/shop/products/swarovski-women-s-pendant-with-chain-eternal-flower-crystals-or-5512662-my-gift-stop-4_600x.jpg?v=1716745761",
        "brand": "Swarovski",
        "description": "Swarovski Women's Bracelet - Melt Your Heart Yellow Gold Plated",
        "oldPrice": "$129.00",
        "newPrice": "$94.94",
        "save": "SAVE 26%"
    },
    {
        "image": "https://www.mygiftstop.com/cdn/shop/products/swarovski-women-s-bracelet-melt-your-heart-yellow-gold-plated-or-5446015-my-gift-stop-4_600x.jpg?v=1716772444",
        "brand": "Swarovski",
        "description": "Swarovski Women's Bracelet - Melt Your Heart Yellow Silver Plated",
        "oldPrice": "$110.00",
        "newPrice": "$74.84",
        "save": "SAVE 32%"
    },
    {
        "image": "https://www.mygiftstop.com/cdn/shop/products/sterling-silver-anchor-by-the-yard-bracelet-my-gift-stop_600x.jpg?v=1716771462",
        "brand": "Swarovski",
        "description": "Swarovski Women's Bracelet - Melt Your Heart Gold Plated",
        "oldPrice": "$99.00",
        "newPrice": "$39.94",
        "save": "SAVE 60%"
    },
        {
        "image": "https://theflowerstudio.pk/wp-content/uploads/2017/06/anniversary-3.webp",
        "brand": "Greeting Card",
        "description": "Add a FREE Anniversary Greeting Card to your order.",
        "oldPrice": "",
        "newPrice": "Free",
        "save": ""
    },
];


const container = document.querySelector('.card-container');

products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    card.innerHTML = `
        <a href="#"> <img src="${product.image}" alt="${product.brand}"> </a>
        <div class="details">
            <a href="#" class="brand-link"><h4>${product.brand}</h4></a>
            <p>${product.description}</p>
            <div class="price-container">
                <p class="old-price">${product.oldPrice}</p>
                <p class="price">${product.newPrice}</p>
                <p class="save">${product.save}</p>
            </div>
        </div>
    `;
    
    container.appendChild(card);
});

let isDragging2 = false;
let startX2;
let scrollLeft2;

container.addEventListener('mousedown', (e) => {
    isDragging2 = true;
    startX2 = e.pageX - container.offsetLeft;
    scrollLeft2 = container.scrollLeft;
    container.classList.add('no-select'); 
});

container.addEventListener('mouseleave', () => {
    if (isDragging2) {
        isDragging2 = false;
        container.classList.remove('no-select'); // Enable text selection
    }
});

container.addEventListener('mouseup', () => {
    if (isDragging2) {
        isDragging2 = false;
        container.classList.remove('no-select'); // Enable text selection
    }
});

container.addEventListener('mousemove', (e) => {
    if (!isDragging2) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX2) * 1; // Adjust scroll speed
    container.scrollLeft = scrollLeft2 - walk;
});
})();