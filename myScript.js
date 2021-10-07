products = [
    {
        name: "Macbook Air",
        img: "img\\Macbook-Aidr--M1-d-1.jpg",
        price: 121000,
    },
    {
        name: "Macbook Air M1",
        img: "img\\Macbook-Aidr--M1-d-1.jpg",
        price: 160000,
    },
    {
        name: "Macbook Air M1 d",
        img: "img\\Macbook-Aidr--M1-d-1.jpg",
        price: 14000,
    },
    {
        name: "Macbook Air M1 d",
        img: "img\\Macbook-Aidr--M1-d-1.jpg",
        price: 14000,
    },
    {
        name: "Macbook Air M1 d",
        img: "img\\Macbook-Aidr--M1-d-1.jpg",
        price: 14000,
    },
    {
        name: "Macbook Air M1 d",
        img: "img\\Macbook-Aidr--M1-d-1.jpg",
        price: 14000,
    },
    {
        name: "Macbook Air M1 d",
        img: "img\\Macbook-Aidr--M1-d-1.jpg",
        price: 14000,
    },
    {
        name: "Macbook Air M1 d",
        img: "img\\Macbook-Aidr--M1-d-1.jpg",
        price: 14000,
    },
    {
        name: "Macbook Air M1 d",
        img: "img\\Macbook-Aidr--M1-d-1.jpg",
        price: 14000,
    },
    {
        name: "Macbook Air M1 d",
        img: "img\\Macbook-Aidr--M1-d-1.jpg",
        price: 14000,
    },
]
var i=0
products.forEach(product => {
	var div = document.getElementById("pimg")
    i=i+1
  
	div.innerHTML = div.innerHTML + `          
              <div class="product-details" onclick="addItem(this.id)" id="${i}">
              <div class="item">
              <img src="${product.img}" alt="Macbook" width="100" height="100">
              <div class="product-name" id="${i}n">${product.name}</div>     
                      <div class="product-price" id="${i}p">
                        ${product.price}
                      </div>                   
              </div>
              </div>
  `
})


function addItem(item){
var s = item+'p';
var sn = item+'n';
var p =parseFloat(document.getElementById(s).innerHTML);
var itemName =document.getElementById(sn).innerHTML;
console.log(p);
var obj = products.find(o => o.name === itemName);
var itemshow = document.getElementById("plist");
itemshow.innerHTML = itemshow.innerHTML + `
                <div class="label" id="${item}list"><img src="${obj.img}" alt="Macbook" width="40" height="40"> ${itemName}
                    <div class="price" id="p${i}"> BDT${p}
                    <div class="delete" onclick="deleteItem(this.id)" id="${item}delete"> <i class="fas fa-trash-alt"></i></div>
                    </div>
                    
                </div>
`

sTaka+=p; subtotal.innerHTML = "BDT" + sTaka.toFixed(2);
totalTaka+=p; total.innerHTML = "BDT" + totalTaka.toFixed(2);
pTaka+=p; pay.innerHTML = "BDT" + pTaka.toFixed(2);

}

function deleteItem(id){
    var idfordelete = id.slice(0,-6)+"list";
    console.log("slice " + idfordelete);
    var rp = id.slice(0,-6) + "p";
    var rprice = parseFloat(document.getElementById(rp).innerHTML);

    sTaka-=rprice; subtotal.innerHTML = "BDT" + sTaka.toFixed(2);
    totalTaka-=rprice; total.innerHTML = "BDT" + totalTaka.toFixed(2);
    pTaka-=rprice; pay.innerHTML = "BDT" + pTaka.toFixed(2);

    var deletethis = document.getElementById(idfordelete);
    deletethis.remove();
   


}

var discount = document.getElementById("discount");
var dTaka = 0.00;
discount.innerHTML = "BDT" + dTaka.toFixed(2);

var subtotal = document.getElementById("subtotal");
var sTaka = 0.00;
subtotal.innerHTML = "BDT" + sTaka.toFixed(2);

var tax = document.getElementById("tax");
var tTaka = 0.00;
tax.innerHTML = "BDT" + tTaka.toFixed(2);

var total = document.getElementById("total");
var totalTaka = 0.00;
total.innerHTML = "BDT" + totalTaka.toFixed(2);

var pay = document.getElementById("pay");
var pTaka = 0.00;
pay.innerHTML = "BDT" + pTaka.toFixed(2);