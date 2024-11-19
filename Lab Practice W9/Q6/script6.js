/**
 * Filters products by category and calculates the total price.
 * @param {Array} products - Array of product objects, each with name, price, and category.
 * @param {string} category - The category to filter products by.
 * @returns {number} - The total price of the filtered products.
 */
function filterAndCalculateTotal(products, category) {
    return products
        .filter(product => product.category === category) // Filter products by category
        .reduce((total, product) => total + product.price, 0); // Calculate total price
}

// Example input
const products = [
    { name: 'Laptop', price: 1000, category: 'Electronics' },
    { name: 'Shirt', price: 50, category: 'Clothing' },
    { name: 'Phone', price: 500, category: 'Electronics' },
    { name: 'Pants', price: 60, category: 'Clothing' }
];

// Example function call
const totalElectronicsPrice = filterAndCalculateTotal(products, 'Electronics');
console.log(totalElectronicsPrice); // Output: 1500
