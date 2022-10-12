/**
 * 
 */
var myToggleContainer1 = document.getElementsByClassName("myToggleContainer1");

var temp = document.getElementsByName("span");

var myToggleAction = document.getElementById('myToggleAction');

var myToggleAction = document.querySelector('.myToggleAction');
var mainToggle = document.getElementById('mainToggle');
var totalItemsOrdered = 0;

function myFnc(el) {

    var parentPar = el.parentNode;

    var child = parentPar.children[0].children[2].id;

    var myToggleAction = document.getElementById(child);

    var mainToggleParent = el.parentNode;

    var mainToggleChild = mainToggleParent.id;
    var mainToggle = document.getElementById(mainToggleChild);

    if (myToggleAction.style.display == 'block') {
        //console.log("1");
        myToggleAction.style.display = 'none'
        mainToggle.className = "dropdown list-group-item d-flex justify-content-between align-items-start"

    }
    else {
        console.log("2");
        myToggleAction.style.display = 'block';
        mainToggle.className = "dropup list-group-item d-flex justify-content-between align-items-start";
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
        window.fixedbottomButtonCount++;
    }

    if (flag > 0) {
        window.fixedbottomButtonCount--;
        demo.style.display = 'none'
        bottomButtonIcon1.className = "fas fa-utensils"
    }
}


let myModal;
function btnFun(par) {
    //let modal = par.className.split(" ")[1];
    //let modalLabel = document.getElementById(modal).children[0].children[0].children[0].children[0].children[0].id;
    //let modalPrice = document.getElementById(modal).children[0].children[0].children[0].children[0].children[1].id;

    //let modalLabelName = document.getElementById(modalLabel).innerHTML;
    //let modalPriceName = document.getElementById(modalPrice).innerHTML

    //console.log("modal " + modal);
    //console.log("modalLabelName " + modalLabelName);
    //console.log("modalPriceName " + modalPriceName);

    //console.log("oops");
}

var count;
var totalAmount;
var myMap = new Map();

function incrementFunc(par) {
    var countId = par.parentNode.children[1].id;
    var count = parseInt(document.getElementById(countId).innerHTML);
    var totalItemPrice = document.getElementById(par.parentNode.parentNode.id).children[1].id;

    var singleItemPrice = document.getElementById(par.parentNode.parentNode.parentNode.id);
    singleItemPrice = document.getElementById(singleItemPrice.children[0].children[0].children[1].id).innerHTML.split(' ');
    var innerHtmlTotalItemPrice = document.getElementById(totalItemPrice).innerHTML.split(' ');
    //var ogPrice = innerHtmlTotalItemPrice[3];
    //console.log("innerHtmlTotalItemPrice[3] " + innerHtmlTotalItemPrice[3]);
    //console.log("IncPrice " + totalItemPrice);
    //console.log("singleItemPrice " + singleItemPrice[1]);

    var id2 = document.getElementById(par.id).parentNode.children[0].id;
    var i = document.getElementById(id2);

    if (i.hasAttribute('data-bs-dismiss')) {
        //console.log("26");
        i.removeAttribute('data-bs-dismiss');
    }
    var inc = count;
    inc = inc + 1;
    document.getElementById(countId).innerHTML = (inc);
    document.getElementById(totalItemPrice).innerHTML = "Add Item Rs " + singleItemPrice[1] * inc;

    myMap.set(countId, singleItemPrice[1] * inc);
    let text = "";
    for (const x of myMap.entries()) {
        text += x;
        console.log('myMap : ' + text);
    }

}

function decrementFunc(par) {
    var countId = par.parentNode.children[1].id;
    var count = parseInt(document.getElementById(countId).innerHTML);
    var totalItemPrice = document.getElementById(par.parentNode.parentNode.id).children[1].id;

    var singleItemPrice = document.getElementById(par.parentNode.parentNode.parentNode.id);
    singleItemPrice = document.getElementById(singleItemPrice.children[0].children[0].children[1].id).innerHTML.split(' ');
    //var innerHtmlTotalItemPrice = document.getElementById(totalItemPrice).innerHTML.split(' ');
	
	var noOfItems = document.getElementById('noOfItems');
	var totalCostItems = document.getElementById('totalCostItems');
    var id = document.getElementById(par.id);
    var inc = count;
    var del = "false";
    if (id.hasAttribute('data-bs-dismiss')) {
        console.log("Wow");
        id.removeAttribute('data-bs-dismiss');
    }

    if (inc <= 2) {
        count = 2;
        id.setAttribute('data-bs-dismiss', 'modal');
        
        if(inc == 1) {
			console.log("yesssssssss " + inc);
			myMap.delete(countId);
        	del = "true";
		}
        
        inc = 2;
    }

    inc = inc - 1;
    document.getElementById(countId).innerHTML = (inc);
    document.getElementById(totalItemPrice).innerHTML = "Add Item Rs " + singleItemPrice[1] * inc;
    if (del == "false") {
        console.log("if false myMap : " + myMap);
        //myMap.set(countId, singleItemPrice[1] * inc);
    }
    
    if(myMap.size == 0) {
		directToCart.style.display = 'none';
	}

	let ic = 0;
	let tc = 0;
    for (const x of myMap.values()) {
        ic = ic  + parseInt(x[0]);
        tc = tc  + parseInt(x[1]);
    }
    noOfItems.innerHTML = ic + " Items";
    totalCostItems.innerHTML = tc + " Rs";
	console.log('ic decrFunc : ' + ic);
    



	console.log("myMap length " + myMap.size);

}

function btnMiniCart(par) {

	var directToCart = document.getElementById('directToCart');
	var btnMini = document.getElementById(par.parentNode.id).children[0].children[1].id;
	var itemCount = document.getElementById(par.parentNode.id).children[0].children[1].innerHTML;
	var itemName = par.parentNode.parentNode.children[0].children[0].children[0].id;
	console.log("itemName " + itemName);
	console.log("itemCount : " + itemCount);
	var btnMini2 = par.innerHTML.split(' ');
	var noOfItems = document.getElementById('noOfItems');
	var totalCostItems = document.getElementById('totalCostItems');
	 
	console.log(btnMini2[3]);
	
	myMap.set(btnMini, [itemCount ,btnMini2[3]]);
	
    	if(myMap.size > 0) {
			directToCart.style.display = 'block';
		} 
		if(myMap.size == 0) {
			directToCart.style.display = 'none';
		}
	
	let ic = 0;
	let tc = 0
    for (const x of myMap.values()) {
        ic = ic  + parseInt(x[0]);
        tc = tc  + parseInt(x[1]);
    }
    noOfItems.innerHTML = ic + " Items";
    totalCostItems.innerHTML = tc + " Rs";
	console.log('ic : ' + ic);
	console.log('tc : ' + tc);
	
	console.log("part " +  itemCount.split(' ')[0]);
	
	var ele = par.parentNode.parentNode.children[0].children[1].id;
	console.log("eleeeeeeeeee " + ele);
	document.getElementById(ele).click();

}
