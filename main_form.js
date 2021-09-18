
var data_div = document.getElementById("data");


function addProduct() {
    let newForm = document.getElementById("newForm");

    let name = newForm.name.value;
    let price = newForm.price.value;
    let image = newForm.img.value;

    let product = {
        name,
        price,
        image,
    } 

    let prod;

    prod = localStorage.getItem("products");

    if (prod == null) {
        prod = [];
    } else {
        prod = JSON.parse(localStorage.getItem("products"));
    }

    prod.push(product);

    localStorage.setItem("products", JSON.stringify(prod));

    showProducts();
}

function appendProduct(el) {
    var div = document.createElement("div");

    let p_name = document.createElement("p");

    p_name.innerHTML = el.name;

    let p_price = document.createElement("p");

    p_price.innerHTML = "₹"+el.price;

    let image = document.createElement("img");

    image.src = el.image;

    let btn = document.createElement("button");

    btn.textContent = "Add to Cart";

    btn.addEventListener("click", function () {
        addToCart(el);
    })

    btn.style.display = "block";

    div.append(p_name, p_price, image, btn);

    data_div.append(div);
}

function showProducts() {
    let data = JSON.parse(localStorage.getItem("products"));

    data_div.innerHTML = null;

    data.forEach(function (el) {
        appendProduct(el);
    });
}

function addToCart(obj) {
    let cart;    
    
    cart = localStorage.getItem("AddedToCart")

    if (cart == null) {
        cart = [];
    } else {
        cart = JSON.parse(localStorage.getItem("AddedToCart"));
    }

    for (let i = 0; i < cart.length; i++){
        if (cart[`${i}`].name == obj.name) {
            alert("Product is already present in the cart!")
            return;
        }
    }

    cart.push(obj)

    localStorage.setItem("AddedToCart", JSON.stringify(cart));

}


showProducts();