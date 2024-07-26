// let arrProduct = [];
class Product {
    constructor(id, name, color, quantity, price, img) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.quantity = quantity;
        this.price = price;
        this.img = img;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getColor(){
        return this.color;
    }
    getQuantity(){
        return this.quantity;
    }
    getPrice(){
        return this.price;
    }
    getImg(){
        return this.img;
    }
    setImg(img){
        this.img = img;
    }
    setName(name){
        this.name = name;
    }
    setColor(color){
        this.color = color;
    }
    setQuantity(quantity){
        this.quantity = quantity;
    }
    setPrice(price){
        this.price = price;
    }
    setImg(img){
        this.img = img;
    }
    edit(id, name, color, quantity, price, img) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.quantity = quantity;
        this.price = price;
        this.img = img;
    }
}
let myProduct1 = new Product("ad123", "Giày đá bóng adidas", "Trắng", "40", "1900000", "<img src='adidas.webp' style='width: 250px; height: 200px'>");
let myProduct2 = new Product("mz165", "Giày đá bóng mizuno", "Trắng xanh", "41", "2100000","<img src='mizuno.webp' style='width: 250px; height: 200px'>");
let myProduct3 = new Product("pt152", "Giày đá bóng phantom", "Xanh dương", "39", "2500000", "<img src='phantom-gx-2-academy-_____________-km3ftn.png' style='width: 250px; height: 200px'>");
let arrProduct = [myProduct1, myProduct2, myProduct3]
function display() {
    let str = "";
    for (let i = 0; i < arrProduct.length; i++) {
        str += "<tr>";
        str += `<td>${arrProduct[i].id}</td>`;
        str += `<td>${arrProduct[i].name}</td>`;
        str += `<td>${arrProduct[i].color}</td>`;
        str += `<td>${arrProduct[i].quantity}</td>`;
        str += `<td>${arrProduct[i].price}</td>`;
        str += `<td>${arrProduct[i].img}</td>`;
        str += "<td><button onclick='del(" + i +")'>Xoá</button></td>"
        str += "<td><button onclick='fix(" + i +")'>Sửa</button></td>"
        str += "</tr>";
    }
    document.getElementById("body").innerHTML = str;
}
display();
function addProduct() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let color = document.getElementById("color").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("price").value;
    let temp = document.getElementById("img").value;
    let array = temp.split("\\");
    let img = array[2];
    let newProduct = new Product(id, name, color, quantity, price, img);
    arrProduct.push(newProduct);
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("color").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
    document.getElementById("img").value = "";
    display(arrProduct);
}
function clear() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("color").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
    document.getElementById("img").value = "";
    document.getElementById("saveButton").style.body = "none";
}
function del(index) {
    let product = arrProduct[index];
    let check = confirm("Bạn có thực sự muốn xoá" + '"' + product.name + '"' + " không?");
    if (check === true) {
        arrProduct.splice(index, 1);
        display(arrProduct);
    } else {
        alert("Không đùa");
    }
}
function fix(index) {
    let product = arrProduct[index];
    document.getElementById("id").value = product.id;
    document.getElementById("name").value = product.name;
    document.getElementById("color").value = product.color;
    document.getElementById("quantity").value = product.quantity;
    document.getElementById("price").value = product.price;
    // document.getElementById("img").value = product.img;
    document.getElementById("currentIndex").value = index;
    document.getElementById("saveButton").style.body = "inline-block";
}
function save() {
    let index = document.getElementById("currentIndex").value;
    let newId = document.getElementById("id").value;
    let newName = document.getElementById("name").value;
    let newColor = document.getElementById("color").value;
    let newQuantity = document.getElementById("quantity").value;
    let newPrice = document.getElementById("price").value;
    let newImg = document.getElementById("img").files;
    arrProduct[index].edit(newId, newName, newColor, newQuantity, newPrice, newImg);
    display();
    clear();
    document.getElementById("currentIndex").value = "";
}