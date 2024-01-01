let productsContainer = document.getElementById('productsContainer')
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => {
        let products = json.products;
        products.forEach((product, index) => {
            console.log(product);
            let productCard = document.createElement('div')
            let productLink = document.createElement('a')
            productLink.setAttribute('href', '#')
            if (product.category == 'smartphones') {
                productLink.setAttribute('href', 'smartphones.html')
            }
            if (product.category == 'laptops') {
                productLink.setAttribute('href', 'laptops.html')
            }
            if (product.category == 'fragrances') {
                productLink.setAttribute('href', 'fragrances.html')
            }
            if (product.category == 'groceries') {
                productLink.setAttribute('href', 'groceries.html')
            }
            if (product.category == 'skincare') {
                productLink.setAttribute('href', 'skincare.html')
            }
            if (product.category == 'home-decoration') {
                productLink.setAttribute('href', 'home-decoration.html')
            }
            productCard.classList.add('m-4')
            productCard.classList.add('card')
            productCard.classList.add('productCard')
            let title = document.createElement('h4')
            let brand = document.createElement('h5')
            let price = document.createElement('div')
            let rating = document.createElement('div')
            rating.innerHTML = `<div>Rating ${product.rating}⭐</div>`
            let img = document.createElement('img')
            title.innerHTML = `${product.title}`
            brand.innerHTML = `${product.brand}`
            price.innerHTML = `M.R.P. $${product.price}`
            img.setAttribute('src', product.images[0])
            img.setAttribute('id', 'productImage')
            img.style.width = '250px'
            img.style.height = '250px'
            productLink.appendChild(img)
            productLink.appendChild(title)
            productLink.appendChild(brand)
            productLink.appendChild(price)
            productLink.appendChild(rating)
            productCard.appendChild(productLink)
            productsContainer.appendChild(productCard)
        });
    })
    .catch((error) => {
        let productsContainer = document.getElementById('productsContainer')
        let err = document.createElement('h5')
        err.innerHTML = `Please check your network connection and try again!`
        err.classList.add('err')
        productsContainer.appendChild(err)
        console.log('error');
        console.log(error);
    })