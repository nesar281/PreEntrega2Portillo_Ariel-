// e-commerce 
let products = [
    { id: 1, name: "Rock Nacional", price: 25, type: "Remeras" },
    { id: 2, name: "Lisas", price: 20, type: "Remeras" },
    { id: 3, name: "Manga Corta", price: 18, type: "Remeras" },
    { id: 4, name: "Manga Larga", price: 22, type: "Remeras" },
    { id: 5, name: "Musculosa", price: 15, type: "Remeras" },
    { id: 6, name: "Vestir", price: 80, type: "Zapatos" },
    { id: 7, name: "Botas", price: 90, type: "Zapatos" },
    { id: 8, name: "Borcegos", price: 85, type: "Zapatos" },
    { id: 9, name: "Mocasines", price: 70, type: "Zapatos" },
    { id: 10, name: "Clásicos", price: 75, type: "Zapatos" },
    { id: 11, name: "Jeans", price: 50, type: "Pantalones" },
    { id: 12, name: "Cortos", price: 30, type: "Pantalones" },
    { id: 13, name: "Largos", price: 40, type: "Pantalones" },
    { id: 14, name: "Bermudas", price: 35, type: "Pantalones" },
    { id: 15, name: "Jogging", price: 45, type: "Pantalones" }
];

// función para definir productos 
function displayProducts() {
    let productList = "Productos disponibles:\n";
    for (let product of products) {
        productList += `${product.id}. ${product.name} - $${product.price}\n`;
    }
    alert(productList);
}

// función para agregar productos 
function addToCart() {
    const productId = parseInt(prompt("Ingrese código de articulo:"));
    const product = products.find(item => item.id === productId);
    if (!product) {
        alert("Articulo no encontrado!");
        return;
    }

    const quantity = parseInt(prompt(`Ingrese la cantidad de ${product.name}(s) que desea agregar al carrito:`));
    if (isNaN(quantity) || quantity <= 0) {
        alert("Número de items invalido!");
        return;
    }

    const totalPrice = product.price * quantity;
    alert(`Agregados ${quantity} ${product.name}(s) al carrito. Total: $${totalPrice}`);
}

// función para calcular el precio total 
function calculateTotalPrice(cart) {
    let totalPrice = 0;
    for (let item of cart) {
        const product = products.find(p => p.id === item.productId);
        if (product) {
            totalPrice += product.price * item.quantity;
        }
    }
    return totalPrice;
}

// función para buscar por precio máximo
function searchByMaxPrice(maxPrice) {
    const filteredProducts = products.filter(product => product.price <= maxPrice);
    return filteredProducts;
}

// función para buscar por letra contenida 
function searchByNameContaining(letter) {
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(letter.toLowerCase()));
    return filteredProducts;
}

// función para agregar un nuevo producto 
function addNewProduct(newProduct) {
    products.push(newProduct);
}

// menú inicial 
function initialMenu() {
    const choice = parseInt(prompt("Seleccione una opción:\n1: Filtrar por precio máximo\n2: Filtrar por letras\n3: Agregar un producto al listado"));
    switch (choice) {
        case 1:
            const maxPrice = parseInt(prompt("Ingrese el precio máximo:"));
            const filteredByPrice = searchByMaxPrice(maxPrice);
            alert("Productos filtrados por precio máximo:");
            displayProducts(filteredByPrice);
            break;
        case 2:
            const letter = prompt("Ingrese la letra para filtrar por nombre:");
            const filteredByName = searchByNameContaining(letter);
            alert("Productos filtrados por letras en el nombre:");
            displayProducts(filteredByName);
            break;
        case 3:
            const newProductName = prompt("Ingrese el nombre del nuevo producto:");
            const newProductPrice = parseInt(prompt("Ingrese el precio del nuevo producto:"));
            const newProductType = prompt("Ingrese el tipo del nuevo producto:");
            const newProduct = {
                id: products.length + 1,
                name: newProductName,
                price: newProductPrice,
                type: newProductType
            };
            addNewProduct(newProduct);
            alert("Nuevo producto agregado!");
            break;
        default:
            alert("Opción no válida.");
    }
}

// menú
initialMenu();
