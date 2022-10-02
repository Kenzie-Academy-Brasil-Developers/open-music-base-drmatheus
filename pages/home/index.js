/* Desenvolva sua lógica aqui ... */

const productList = document.querySelector("#productList")
const buttonsFilters = document.querySelectorAll("#filter input")
const Filters = [...buttonsFilters]
const maxPrice = document.querySelector(".maxPrice")
      maxPrice.max = biggerPrice(products)
const maxPriceShow = document.querySelector(".maxPriceShow")

maxPrice.addEventListener("mousemove", () => {
    maxPriceShow.innerHTML = `Até R$ ${(maxPrice.value * 1).toFixed(2)}`
    products.forEach(filterProductsByPriceAndCategory)    
})

buttonsFilters.forEach((button) => button.addEventListener("click", () => {    
    products.forEach(filterProductsByPriceAndCategory)
}))

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
            <div class="flex spaceBetween alignCenter">
              <h3 class="title3">R$ ${(product.price).toFixed(2)}</h3>
              <button class="button id="${product.id}" buttonBuy">Comprar</button>
            </div>        
          </div>        
    </li>
    `)
}

function filterProductsByPrice(product) {
    if (maxPrice.value >= product.price) {
        return true
    }
    return false
}

function filterProductsByPriceAndCategory(product) {

    productList.innerHTML = ""

    ButtonSelected = Filters.find((button)=>button.checked == true)

    if (ButtonSelected.id == categories[0]) {
        products.forEach((product)=>{
        if (filterProductsByPrice(product)) {
            showProduct(product)
        }})
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

function biggerPrice(array){
    let theGreater = 0
    array.forEach((product)=>{        
        if(product.price > theGreater){
            theGreater = product.price
        }
    })
    return theGreater
}

products.forEach(filterProductsByPriceAndCategory)