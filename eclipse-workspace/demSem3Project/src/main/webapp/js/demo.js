/**
 * 
 */
var myToggleContainer1 = document.getElementsByClassName("myToggleContainer1");

var temp = document.getElementsByName("span");

var myToggleAction = document.getElementById('myToggleAction');

var myToggleAction = document.querySelector('.myToggleAction');
var mainToggle = document.getElementById('mainToggle');
var totalItemsOrdered = 0;
var ul = document.getElementById('ul');

function myFnc(el) {
/*
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
*/

	var parentPar = el.parentNode;

    var child = parentPar.children[0].children[2].id;

    var myToggleAction = document.getElementById(child);
    
    var mainToggleParent = el.parentNode;

    var mainToggleChild = mainToggleParent.id;
   console.log("myToggleAction " + myToggleAction.className);
    console.log("mainToggleParent " + mainToggleParent);
    console.log("mainToggleChild " + mainToggleChild);


	var ulId = document.getElementById(mainToggleChild);
	ulClassName = ulId.className;
	
	if(ulClassName == "dropdown list-group-item d-flex justify-content-between align-items-start") {
		//alert("1");
		myToggleAction.style.display = 'none'
		document.getElementById(mainToggleChild).setAttribute('class', 'dropup list-group-item d-flex justify-content-between align-items-start');
		//alert("12");
	}
	if(ulClassName == "dropup list-group-item d-flex justify-content-between align-items-start") {
		//alert("2");
		myToggleAction.style.display = 'block';
		document.getElementById(mainToggleChild).setAttribute('class', 'dropdown list-group-item d-flex justify-content-between align-items-start');
	}
	
}

// Fixed Bottom BUtton 
var bottomButtonIcon1 = document.getElementById('bottomButtonIcon1');
var fixedbottomButton = document.getElementById('fixedbottomButton');
var demo = document.getElementById('demo')
var fixedbottomButtonCount = 0;

var scrollsyLinks = document.getElementById('scrollsyLinks');

var totItems = ul.children.length;

fixedbottomButton.onclick = function () {
    var flag = fixedbottomButtonCount;
	for(var i = 0; i < totItems; i++){ 
		
	var itemNameId = scrollsyLinks.children[i].children[0].className;
	console.log(itemNameId);
		if(itemNameId == "nav-link2 active") {
			scrollsyLinks.children[i].children[0].setAttribute('style', 'background-color:red;color:white;text-decoration:none;');
		}
		else {
			scrollsyLinks.children[i].children[0].setAttribute('style','');
		}
	}
	

    if (flag == 0) {
       // demo.style.display = 'block'
        bottomButtonIcon1.className = "fa-solid fa-xmark"
        window.fixedbottomButtonCount++;
    }

    if (flag > 0) {
        window.fixedbottomButtonCount--;
       // demo.setAttribute('style', '    display: block;position: absolute;bottom: -32rem;height: 11rem;')
        //demo.style.display = 'none'
        bottomButtonIcon1.className = "fas fa-utensils"
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
 

	
//var scrollsyLinks = document.getElementById('scrollsyLinks');

function navLinksActive(par) {
	
	var bottomButtonIcon1 = document.getElementById('bottomButtonIcon1');
	bottomButtonIcon1.className = 'fas fa-utensils';
	
	//var ulClass = ul.children[0].className;
	
	var mf = par.getAttribute('href').split('#')[1];
	var ulId = document.getElementById(mf);
	console.log(ulId)
	
	if(ulId.className == "dropup list-group-item d-flex justify-content-between align-items-start") {
		document.getElementById(mf).children[0].children[2].setAttribute('style', 'display:block');
		ulId.setAttribute('class', 'dropdown list-group-item d-flex justify-content-between align-items-start');
	}
	
	
	//alert(mf);

	if(par.classname == "nav-item2 active") {
		alert("active")
	}
}
	
for(var i = 0; i < totItems; i++){
	var itemNameId = ul.children[i].id;
	var itemName = ul.children[i].children[0].children[2].children[2].children[0].children[0].innerHTML;
	var scrollsyID = "scrollsy" + i;
	var scrollsyLinkID = "#" + itemNameId;
	
	
	var li = document.createElement('li');
	li.setAttribute('class', 'nav-item2');
	li.setAttribute('style', 'margin:25px;');
	li.setAttribute('id', scrollsyID);
	li.setAttribute('data-bs-dismiss', 'modal');
	
	var a = document.createElement('a');
	a.setAttribute('class', 'nav-link2');
	li.setAttribute('style', 'margin: 10px 0px;border-bottom: 1px dashed black;width: -webkit-fill-available;')
	a.setAttribute('onclick', 'navLinksActive(this)')
	a.setAttribute('href', scrollsyLinkID);
	
	var text = document.createTextNode(itemName);
	
	a.appendChild(text);
	li.appendChild(a);
	document.getElementById('scrollsyLinks').appendChild(li);
	
}















///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

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
	var arr = [];
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
	//console.log('ic decrFunc : ' + ic);
    



	//console.log("myMap length " + myMap.size);

}

function btnMiniCart(par) {

	var directToCart = document.getElementById('directToCart');
	var btnMini = document.getElementById(par.parentNode.id).children[0].children[1].id;
	var itemCount = document.getElementById(par.parentNode.id).children[0].children[1].innerHTML;
	var itemName = document.getElementById(par.parentNode.parentNode.children[0].children[0].children[0].id).innerHTML;
	var singleItemPrice = document.getElementById(par.parentNode.parentNode.children[0].children[0].children[1].id).innerHTML.split(' ')[1];
	
	console.log("itemName " + itemName);
	console.log("itemName " + itemName);
	console.log("singleItemPrice : " + singleItemPrice);
	var btnMini2 = par.innerHTML.split(' ');
	var noOfItems = document.getElementById('noOfItems');
	var totalCostItems = document.getElementById('totalCostItems');
	 
	console.log(btnMini2[3]);
	
	myMap.set(btnMini, [itemCount ,btnMini2[3], itemName, singleItemPrice]);
	
    	if(myMap.size > 0) {
			directToCart.style.display = 'block';
		} 
		if(myMap.size == 0) {
			directToCart.style.display = 'none';
		}
	
	let ic = 0;
	let tc = 0;
	//let text = ""
    for (const x of myMap.values()) {
        ic = ic  + parseInt(x[0]);
        tc = tc  + parseInt(x[1]);
        //text += x;
        //console.log("text values " + x);
    }
    
    //console.log("MyMap values " + myMap);
    
    let text2 = ""
    for (const x of myMap.entries()) {
        text2 += x;
        //console.log("text entries " + x);
    }
    //console.log("MyMap entries " + myMap);
    
    noOfItems.innerHTML = ic + " Items";
    totalCostItems.innerHTML = tc + " Rs";
	//console.log('ic : ' + ic);
	//console.log('tc : ' + tc);
	
	//console.log("part " +  itemCount.split(' ')[0]);
	
	var ele = par.parentNode.parentNode.children[0].children[1].id;
	//console.log("eleeeeeeeeee " + ele);
	document.getElementById(ele).click();
	
	
	var obj = Object.fromEntries(myMap);
	var jsonString = JSON.stringify(obj);
	localStorage.setItem('obj', jsonString);

	//localStorage.setItem('myMap', JSON.stringify(myMap));
	//alert(ic);
}

function toBiltingPage() {
	
}

// --------------------------------------------- billing.jsp ---------------------------------------------------
