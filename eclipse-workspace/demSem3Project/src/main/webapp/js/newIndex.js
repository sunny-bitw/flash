/**
 * 
 */
var myToggleContainer1 = document.getElementsByClassName("myToggleContainer1");

var temp = document.getElementsByName("span");

var myToggleAction = document.getElementById('myToggleAction');

var myToggleAction = document.querySelector('.myToggleAction');
var mainToggle = document.getElementById('mainToggle');
var totalItemsOrdered = 0;
 
function myFnc (el) {
    
    var parentPar = el.parentNode;
	
	var child = parentPar.children[0].children[2].id;
	
	var myToggleAction = document.getElementById(child);
	
	var mainToggleParent = el.parentNode;
	
	var mainToggleChild = mainToggleParent.id;
	var mainToggle = document.getElementById(mainToggleChild);

	if(myToggleAction.style.display == 'block'){
		console.log("1");
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
	let modal = par.className.split(" ")[1];
	let modalLabel = document.getElementById(modal).children[0].children[0].children[0].children[0].children[0].id;
	let modalPrice = document.getElementById(modal).children[0].children[0].children[0].children[0].children[1].id;
	
	let modalLabelName = document.getElementById(modalLabel).innerHTML;
	let modalPriceName = document.getElementById(modalPrice).innerHTML
	
	console.log("modal " + modal);
	console.log("modalLabelName " + modalLabelName);
	console.log("modalPriceName " + modalPriceName);
	
	//alert("Let's fo this!!");
/*	var div1 = document.createElement('div')
	div1.setAttribute('id', 'modalBackdrop1');
	var div2 = document.createElement('div')
	div2.setAttribute('id', 'modalBackdrop2');
	var body = document.getElementById('body');
	body.appendChild(div1);
	body.appendChild(div2);
*/
	var body = document.getElementById('body');
	console.log("lastChild : " + body.lastChild());
	console.log("lastElementChild : " + body.lastElementChild());
	var modalBackdrop1 = document.getElementById('modalBackdrop1');
	var modalBackdrop2 = document.getElementById('modalBackdrop2');

	if(modalBackdrop1) {
		modalBackdrop1.setAttribute('class', 'modal-backdrop fade show');
		modalBackdrop2.setAttribute('class', 'modal-backdrop fade show');
		//modalBackdrop1.setAttribute('style', 'display:block;');
		//modalBackdrop2.setAttribute('style', 'display:block;');
	}
		
	console.log("oops");
}

var count;
var totalAmount;

function incrementFunc(par) {

	var countId = par.parentNode.children[1].id;
	var count = parseInt(document.getElementById(countId).innerHTML);

	var inc = count;
	document.getElementById(countId).innerHTML = (inc + 1);
}

function decrementFunc(par) {
	var countId = par.parentNode.children[1].id;
	var count = parseInt(document.getElementById(countId).innerHTML);
	var ele = document.getElementsByClassName("modal-backdrop");
	var ele2 = document.getElementsByClassName("show");
	
	console.log(ele[0].setAttribute('id', 'modalBackdrop1'));
	console.log(ele[1].setAttribute('id', 'modalBackdrop2'));
	
	if(ele == undefined) {
			console.log("ele[0] inside if " + ele[0]);
			console.log(ele[0].setAttribute('id', 'modalBackdrop1'));
			console.log(ele[1].setAttribute('id', 'modalBackdrop2'));
	}
	
	
	if (count == 1) {
		alert("Stop");
		count = 2;
		console.log("ele2 : " + ele2);
		console.log("ele2[0] : " + ele2[0].className);
		if(ele2[0].className == "show"){
			console.log(ele2[0].removeAttribute('class'));
			console.log(ele2[0].removeAttribute('class'));
		}
		
			console.log(ele[0].removeAttribute('class'));
			console.log(ele[0].removeAttribute('class'));
		
		
		console.log(par.parentNode.parentNode.parentNode.parentNode.parentNode.style.cssText = `
  			display: none; opacity:none;
		`)
		//console.log(par.parentNode.parentNode.parentNode.parentNode.parentNode.className = "modal fade")
		//console.log(par.parentNode.parentNode.parentNode.parentNode.parentNode.role = "none")
		console.log(par.parentNode.parentNode.parentNode.parentNode.parentNode.setAttribute('aria-hidden', 'true'));
		console.log(par.parentNode.parentNode.parentNode.parentNode.parentNode.removeAttribute('aria-modal'));
		console.log(par.parentNode.parentNode.parentNode.parentNode.parentNode.removeAttribute('role'));
		console.log("Working or not?");
		//console.log(ele[0].setAttribute('class', 'modal-backdrop fade show'));
		//console.log(ele[0].setAttribute('class', 'modal-backdrop fade show'));
		
		var body = document.getElementById('body');
		body.className = "bg.light";
		body.removeAttribute('style');
		body.removeAttribute('data-bs-overflow');
		body.removeAttribute('data-bs-padding-right');
		
		var modalBackdrop1 = document.getElementById('modalBackdrop1');
		var modalBackdrop2 = document.getElementById('modalBackdrop2');

	 if(modalBackdrop1) {
		//modalBackdrop1.setAttribute('style', 'display:none;');
		//modalBackdrop2.setAttribute('style', 'display:none;');
	}	
		
		//body.removeAttribute('style');
	}
	
	var inc = count;
	document.getElementById(countId).innerHTML = (inc - 1);
}
