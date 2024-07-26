(() => {
    const trending = [
        {
            "image": "https://www.mygiftstop.com/cdn/shop/files/luminox-3051-bo-men-s-navy-seal-colormark-dive-watch-rugged-blackout-swiss-made-timepiece-my-gift-stop-3_600x.jpg?v=1716807510",
            "brand": "LUMINOX",
            "description": "Luminox 3051.BO Men's Navy SEAL Colormark Dive Watch ",
            "oldPrice": "$495.00",
            "newPrice": "$185.94",
            "save": "SAVE 62%"
        },
    ];

    const container1 = document.querySelector('.card-container1');

    trending.forEach(product => {
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
        
        container1.appendChild(card);
    });

    let isDragging1 = false;
    let startX1;
    let scrollLeft1;

    container1.addEventListener('mousedown', (e) => {
        isDragging1 = true;
        startX1 = e.pageX - container1.offsetLeft;
        scrollLeft1 = container1.scrollLeft;
        container1.classList.add('no-select'); 
    });

    container1.addEventListener('mouseleave', () => {
        if (isDragging1) {
            isDragging1 = false;
            container1.classList.remove('no-select'); // Enable text selection
        }
    });

    container1.addEventListener('mouseup', () => {
        if (isDragging1) {
            isDragging1 = false;
            container1.classList.remove('no-select'); // Enable text selection
        }
    });

    container1.addEventListener('mousemove', (e) => {
        if (!isDragging1) return;
        e.preventDefault();
        const x = e.pageX - container1.offsetLeft;
        const walk = (x - startX1) * 1; // Adjust scroll speed
        container1.scrollLeft = scrollLeft1 - walk;
    });
})();
