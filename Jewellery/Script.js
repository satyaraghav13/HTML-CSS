document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Set Section Images (High Quality Unsplash) ---
    
    // Hero Section Images
    // Left side is background color, Right side is image
    document.getElementById('hero-img-2').style.backgroundImage = "url('https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=1000&auto=format&fit=crop')"; // Woman wearing gold bracelet
    
    // Winter Banner Image
    document.getElementById('winter-banner-img').style.backgroundImage = "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop')"; // Cozy winter jewelry
    
    // Occasion Images
    // --- Set Occasion Images ---
// Occasion Images (This is the part you requested)
    document.getElementById('occ-bday').src = "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1000&auto=format&fit=crop";
    document.getElementById('occ-anniv').src = "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop";
    document.getElementById('occ-engage').src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop";
    // --- 2. Product Data Simulation (For Bestsellers & Recent) ---

    const products = [
        {
            id: 1,
            name: "The Stella Solitaire Ring",
            price: "₹18,999",
            oldPrice: "₹21,500",
            colors: ["#c5a059", "#aaa", "#1a3c34"],
            image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400&auto=format&fit=crop",
            category: 'Rings'
        },
        {
            id: 2,
            name: "Classic Dewdrop Pendant",
            price: "₹12,499",
            oldPrice: "₹15,000",
            colors: ["#aaa", "#c5a059"],
            image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=400&auto=format&fit=crop",
            category: 'Pendants'
        },
        {
            id: 3,
            name: "Aurora Infinity Hoops",
            price: "₹9,999",
            oldPrice: "₹11,500",
            colors: ["#c5a059"],
            image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=400&auto=format&fit=crop",
            category: 'Earrings'
        },
        {
            id: 4,
            name: "Nova Link Bracelet",
            price: "₹22,999",
            oldPrice: "₹25,999",
            colors: ["#aaa", "#1a3c34"],
            image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=400&auto=format&fit=crop",
            category: 'Bracelets'
        },
        {
            id: 5,
            name: "Zenith Layered Necklace",
            price: "₹16,500",
            oldPrice: "₹19,000",
            colors: ["#c5a059"],
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400&auto=format&fit=crop",
            category: 'Pendants'
        },
        {
            id: 6,
            name: "Timeless Cuff Bangle",
            price: "₹24,999",
            oldPrice: "₹28,000",
            colors: ["#aaa", "#c5a059"],
            image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=400&auto=format&fit=crop",
            category: 'Bangles'
        }
    ];

    // --- 3. Rendering Functions ---

    const createProductCard = (product) => {
        const colorHtml = product.colors.map(color => `<span style="background-color: ${color};"></span>`).join('');
        
        return `
            <div class="product-card">
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-title">${product.name}</div>
                <div class="product-price">${product.price} <span>${product.oldPrice}</span></div>
                <div class="colors">${colorHtml}</div>
            </div>
        `;
    };

    const createRecentCard = (product) => {
      return `
            <div class="recent-card">
                <div class="recent-img">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="recent-name">${product.name}</div>
                <div class="recent-price">${product.price} <span>${product.oldPrice}</span></div>
            </div>
        `;
    }

    // Render Bestsellers (Example: First 3 products)
    const bestsellerGrid = document.getElementById('bestseller-grid');
    if (bestsellerGrid) {
        bestsellerGrid.innerHTML = products.slice(0, 3).map(createProductCard).join('');
    }

    // Render Recently Viewed (Example: Last 4 products)
    const recentGrid = document.getElementById('recent-grid');
    if (recentGrid) {
        recentGrid.innerHTML = products.slice(2, 6).map(createRecentCard).join('');
    }

    // Tab Functionality (Basic)
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove 'active' from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add 'active' to the clicked tab
            this.classList.add('active');

            // Find category to filter by (using inner text, e.g., "Rings")
            const category = this.textContent;

            // Filter products
            const filteredProducts = products.filter(p => p.category === category);
            
            // Render filtered products (or a default set if empty)
            if (bestsellerGrid) {
                if (filteredProducts.length > 0) {
                    bestsellerGrid.innerHTML = filteredProducts.slice(0, 3).map(createProductCard).join('');
                } else {
                    // Fallback/No products in this category
                    bestsellerGrid.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; padding: 30px;">No ${category} currently in the Bestseller collection.</p>`;
                }
            }
        });
    });

});