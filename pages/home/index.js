/* Desenvolva sua lógica aqui ... */

const productList = document.querySelector("#productList")
const buttonsFilters = document.querySelectorAll("#filter input")
const Filters = [...buttonsFilters]
const maxPrice = document.querySelector(".maxPrice")
const maxPriceShow = document.querySelector(".maxPriceShow")


console.dir(Filters)

maxPrice.addEventListener("click", () => {
    maxPriceShow.innerHTML = `Até R$ ${(maxPrice.value * 1).toFixed(2)}`
    productList.innerHTML = ""
    products.forEach((product) => {
        if (filterProductsByPrice(product)) {
            showProduct(product)
        }
    })
})

Filters.forEach((button) => button.addEventListener("click", () => {
    /*filterProductsByCategory(button)*/
    /*filterProductsByPriceAndCategory(product)*/
    products.forEach(filterProductsByPriceAndCategory)
}))

/*products.forEach(filterProductsByPriceAndCategory)*/

function showProduct(product) {
    productList.insertAdjacentHTML('afterbegin', `
    <li>
            <div class="imgFrame"><img class="imgItem" src="${product.img}" alt="${product.title}"></div>
            <div class="productInf flex column rowGap1">
            <div class="flex columnGap1">
              <span class="text1">${product.band}</span>
              <span class="text1">${product.year}</span>
            </div>        
            <h2 class="title2">${product.title}</h2>
            <div class="flex spaceBetween">
              <h3 class="title3">R$ ${product.price}</h3>
              <button class="button id="${product.id}" buttonBuy">Comprar</button>
            </div>        
          </div>        
    </li>
    `)
}

function filterProductsByCategory(button) {
    productList.innerHTML = ""
    if (button.id == categories[0]) {
        products.forEach((product) => {
            if (filterProductsByPrice(product)) {
                showProduct(product)
            }
        })
    }
    categories.forEach((categorie, index) => {
        if (button.id == categorie) {
            products.forEach((product) => {
                if (index == product.category) {
                    if (filterProductsByPrice(product)) {
                        showProduct(product)
                    }
                }
            })

        }
    })
}

function filterProductsByPrice(product) {
    if (maxPrice.value >= product.price) {
        return true
    }
    return false
}

function filterProductsByPriceAndCategory(product) {

    ButtonSelected = Filters.find((button)=>button.checked == true)

    console.dir(ButtonSelected)

    if (ButtonSelected.id == categories[0]) {
        if (filterProductsByPrice(product)) {
            showProduct(product)
        }
    } else {

        categories.forEach((categorie, index) => {
            if (ButtonSelected.id == categorie) {
                products.forEach((product) => {
                    if (index == product.category) {
                        if (filterProductsByPrice(product)) {
                            showProduct(product)
                        }
                    }
                })
            }
        })
    }
}
