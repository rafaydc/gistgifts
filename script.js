const products = [
    {
        id: 1,
        name: 'PRODUCT 1',
        description: 'Description for product 1',
        image: 'https://d16aymak0y9zsb.cloudfront.net/Tesoro/product/1080x1080/07122023/189_1701935858_65717af244f57_9414_2-40624440192-1341552884839.jpg',
        price: 1100,
        oldPrice: 1400,
        sale: true
    },
    {
        id: 2,
        name: 'PRODUCT 2',
        description: 'Description for product 2',
        image: 'https://d16aymak0y9zsb.cloudfront.net/Tesoro/product/1080x1080/07122023/232_1701935858_65717af28a7a9_9415_2-744935917087-1607653211875.jpg',
        price: 900,
        oldPrice: 1200,
        sale: true
    },
    {
        id: 2,
        name: 'PRODUCT 3',
        description: 'Description for product 2',
        image: 'https://d16aymak0y9zsb.cloudfront.net/Tesoro/product/1080x1080/07122023/917_1701935755_65717a8be081a_2165_2-1369905397740-114433303075.jpeg',
        price: 900,
        oldPrice: 1200,
        sale: true
    },
    {
        id: 2,
        name: 'PRODUCT 4',
        description: 'Description for product 2',
        image: 'https://d16aymak0y9zsb.cloudfront.net/Tesoro/product/1080x1080/07122023/9_1701935756_65717a8c39ffe_2166_2-549500243293-129591180524.jpeg',
        price: 900,
        oldPrice: 1200,
        sale: true
    },
    {
        id: 1,
        name: 'PRODUCT 1',
        description: 'Description for product 1',
        image: 'https://d16aymak0y9zsb.cloudfront.net/Tesoro/product/1080x1080/07122023/800_1701935756_65717a8c7e7dd_2167_2-1109913221643-1587565671134.jpeg',
        price: 1100,
        oldPrice: 1400,
        sale: true
    },
    {
        id: 2,
        name: 'PRODUCT 2',
        description: 'Description for product 2',
        image: 'https://d16aymak0y9zsb.cloudfront.net/Tesoro/product/1080x1080/07122023/9_1701935756_65717a8c39ffe_2166_2-549500243293-129591180524.jpeg',
        price: 900,
        oldPrice: 1200,
        sale: true
    },
    {
        id: 2,
        name: 'PRODUCT 3',
        description: 'Description for product 2',
        image: 'https://d16aymak0y9zsb.cloudfront.net/Tesoro/product/1080x1080/07122023/186_1701935768_65717a98c113f_3462_2-621850738797-1357977030593.jpeg',
        price: 900,
        oldPrice: 1200,
        sale: true
    },
    {
        id: 2,
        name: 'PRODUCT 4',
        description: 'Description for product 2',
        image: 'https://d16aymak0y9zsb.cloudfront.net/Tesoro/product/1080x1080/07122023/953_1701935769_65717a9919cc2_3463_2-608697426434-1168216653796.jpeg',
        price: 900,
        oldPrice: 1200,
        sale: true
    },
];

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.dataset.id = product.id;

    card.innerHTML = `
        ${product.sale ? "<span class='sale'>sale</span>" : ""}
        <i class='bx bx-heart heart'></i>
        <img src="${product.image}" alt="${product.name}">
        <button class="quick-buy">QUICK BUY</button>
        <div class="details">
            <a href="/product-details.html?id=${product.id}">
                <h3 id="pname">${product.name}</h3>
                <p>${product.description}</p>
                <div>
                    <span class="price">$${product.price}</span>
                    ${product.oldPrice ? `<span class="old-price">$${product.oldPrice}</span>` : ""}
                </div>
            </a>
        </div>
    `;

    // Add event listeners
    card.querySelector('.quick-buy').addEventListener('click', function() {
        document.getElementById('popup').classList.add('active');
    });

    card.querySelector('.heart').addEventListener('click', function() {
        this.classList.toggle('active');
    });

    return card;
}

function populateProductGrid(products) {
    const productGrid = document.getElementById('product-grid');
    products.forEach(product => {
        const card = createProductCard(product);
        productGrid.appendChild(card);
    });
}

// Initialize the product grid
populateProductGrid(products);

// Popup close functionality
document.querySelector('.popup .close-popup').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('active');
});

document.querySelector('.popup-overlay').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('active');
});
