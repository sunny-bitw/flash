// var myToggleContainer1 = document.getElementById('myToggleContainer1');
var myToggleContainer1 = document.getElementsByClassName("myToggleContainer1");
// console.log(myToggleContainer1[0].innerHTML);
// console.log(myToggleContainer1[1].innerHTML);

var temp = document.getElementsByName("span");
   console.log(temp[0]);
   console.log(temp[1]);
   console.log(temp.length);
//    console.log(temp[2]);
var myToggleAction = document.getElementById('myToggleAction');

var myToggleAction = document.querySelector('.myToggleAction');
var mainToggle = document.getElementById('mainToggle');
var counter = 0;
var totalItemsOrdered = 0;


    console.log("count : " + counter);
// myToggleContainer1.onclick = 
function myFnc (el) {
    // alert("HELLO")
    //let collection = document.getElementById("mainToggle1");
    //let person = document.get('person');  
	//let children = collection.children;  
	//console.log("byTagName : " + children[0].id);
    //console.log(el.className);
    
    var parentPar = el.parentNode;
	console.log(parentPar);
	
	var child = parentPar.children[0].children[2].id;
	console.log(child)
	
	var myToggleAction = document.getElementById(child);
	
	
	var mainToggleParent = el.parentNode;
	console.log(mainToggleParent);
	
	var mainToggleChild = mainToggleParent.id;
	console.log(mainToggleChild)
	var mainToggle = document.getElementById(mainToggleChild);
    /*console.log(el.innerHTML);
    console.log(myFnc.id);
    console.log(document.documentElement.Class);
    console.log(document.getElementsByTagName('HTML')[0].id);
    */
    var flag = counter;
    console.log("flag : " + flag);
    console.log("count : " + counter);

//console.log(myToggleAction);
    if (flag == 0) {
        myToggleAction.style.display = 'block';
        mainToggle.className = "dropup list-group-item d-flex justify-content-between align-items-start";
        window.counter++;
        console.log("Hello");
    } 
    
    if (flag > 0) {
            window.counter--;
            myToggleAction.style.display = 'none'
            mainToggle.className = "dropdown list-group-item d-flex justify-content-between align-items-start"
    }
}

// Fixed Bottom BUtton 
var bottomButtonIcon1 = document.getElementById('bottomButtonIcon1');
var fixedbottomButton = document.getElementById('fixedbottomButton');
var demo = document.getElementById('demo')
var fixedbottomButtonCount = 0;

fixedbottomButton.onclick = function () {
    var flag = fixedbottomButtonCount;


    if (flag == 0) {
        demo.style.display = 'block'
        bottomButtonIcon1.className = "fa-solid fa-xmark"
        // fixedbottomButton.innerHTML ="";
        window.fixedbottomButtonCount++;
    }
    
    if (flag > 0) {
            window.fixedbottomButtonCount--;
            demo.style.display = 'none'
            bottomButtonIcon1.className = "fas fa-utensils"
    }
}

// Add to Cart Button
// var btnCart = document.getElementById('btnCart');

// btnCart.addEventListener('click', () => {
//     // alert('Hello');

// })

var incrementBtn = document.getElementById('incrementBtn1');
//var incrementBtn = document.getElementsByClassName("incrementBtn");
var decrementBtn = document.getElementById('decrementBtn1');
//var decrementBtn = document.getElementsByClassName("decrementBtn");
var price = document.getElementById('price');

//var totalItemPrice = document.getElementById('totalItemPrice');
var totalItemPrice = document.getElementsByClassName("totalItemPrice");

incrementBtn.onclick = function(){
	alert("WTFFF");
}
decrementBtn.onclick = function(){
	alert("WTFFF");
}
/*
var count;
var totalAmount;

count = parseInt(document.getElementById('counter').innerHTML);
var totalPrice = price.innerHTML.split(' ');
totalItemPrice.innerHTML = "Add Item Rs " + count*totalPrice[1]

incrementBtn.addEventListener('click', () => {
	alert("Hello");
    count = parseInt(document.getElementById('counter').innerHTML);
    count++;
    var totalPrice = price.innerHTML.split(' ');
    totalItemPrice.innerHTML = "Add Item Rs " + count*totalPrice[1]
    document.getElementB
    yId('counter').innerHTML = count.toString();
    window.totalAmount = count*totalPrice[1];
})

decrementBtn.addEventListener('click', () => {
	alert("Hello");
    count = parseInt(document.getElementById('counter').innerHTML);
    count--;
    var totalPrice = price.innerHTML.split(' ');
    totalItemPrice.innerHTML = "Add Item ₹ " + count*totalPrice[1]
    document.getElementById('counter').innerHTML = count.toString();
    window.totalAmount = count*totalPrice[1];
})
totalItemPrice.addEventListener('click', () => {
	alert("Hiiiiii");
	var toi = window.totalItemsOrdered;
    // var ModelLabel = document.getElementById('ModelLabel');
    var menuItems = document.getElementsByClassName('menuItems');
    var totalPrice = price.innerHTML.split(' ');
    var myMap = new Map();
    console.log(window.totalItemsOrdered);
    //console.log("Item name : " + menuItems.children[1].innerHTML);
    //myMap.set(toi, [menuItems.children[1].innerHTML, totalPrice[1], count*totalPrice[1]])
    
    // window.location.href = './confirmOrder.html'
    console.log(Array.from(myMap.entries(), ([k, v]) => [k, [...v]]));
    console.log(myMap);
    window.totalItemsOrdered++;
})

*/