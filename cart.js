

var data_div = document.getElementById("data");

function appendProduct(el) {
    var div = document.createElement("div");

    let p_name = document.createElement("p");

    p_name.innerHTML = el.name;

    let p_price = document.createElement("p");

    p_price.innerHTML = "₹"+el.price;

    let image = document.createElement("img");
 
    image.src = el.image;

    div.append(p_name, p_price, image);

    data_div.append(div);
}

function showProducts() {
    let data = JSON.parse(localStorage.getItem("AddedToCart"));

    data_div.innerHTML = null;

    data.forEach(function (el) {
        appendProduct(el);
    });

    let noOfProduct = document.getElementById("totalNo");
    let totalPrice = document.getElementById("totalPrice")

    let sum = 0;
    for (let i = 0; i < data.length; i++){
        sum += +data[`${i}`].price;
    }

    noOfProduct.innerHTML += " : " + data.length;
    totalPrice.innerHTML += " : ₹" + sum;
    
}

showProducts();
