const loadBtn = document.querySelector('#load-btn')
const productsDropdown = document.querySelector('.dropdown-content')
const dropBtn = document.querySelector('.dropbtn')

const req = new XMLHttpRequest();
req.open('GET', 'https://fakestoreapi.com/products');

loadBtn.addEventListener('click', function (e) {
        req.send();
})

req.addEventListener('load', function () {
        if (req.status != 200) {
                console.log('Error: ' + req.status);
                return;
        }
        const products = JSON.parse(req.response)
        displayProducts(products)
})

function displayProducts(products) {
        loadBtn.remove()
        dropBtn.textContent = 'Products'
        dropBtn.style.width = '500px'
        dropBtn.disabled = false
        let html = ''
        function createHTML(product) {
                html += `<div id=${product.id} class='product-item'><p>${product.title}</p> 
                <button class='details-btn'>Load details</button></div>`;
        }
        products.forEach(createHTML);
        productsDropdown.insertAdjacentHTML('afterbegin', html)
}

productsDropdown.addEventListener('click', function (e) {
        if (e.target.matches('.details-btn')) {
                const id = e.target.closest('.product-item').id

                const productReq = new XMLHttpRequest();
                productReq.open('GET', `https://fakestoreapi.com/products/${id}`);
                productReq.send()

                productReq.addEventListener('load', function () {
                        if (productReq.status != 200) {
                                console.log('Error: ' + productReq.status);
                                return;
                        }
                        const product = JSON.parse(productReq.response)
                        displayProduct(product)
                })
        }
})

function displayProduct(product) {
        let html = `
        <div class='product-card'>
                <h2>${product.title}</h2>
                <img src="${product.image}" alt="${product.title}">
                <p>${product.description}</p>
                <h3>$${product.price}</h3>
        </div>`;
        productsDropdown.insertAdjacentHTML('afterend', html)
} 