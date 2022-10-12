/**
 * 
 */
 
 function searchFunc() {
	var ul = document.getElementById('ul');
	var totItems = ul.children.length;
	var map = new Map();
	console.log(ul.children.length);
	
	for(var i = 0; i < totItems; i++){
		var itemName = ul.children[i].children[0].children[2].children[2].children[0].children[0].innerHTML;
		itemName = itemName.toLowerCase();
		map.set(itemName, ul.children[i].id);
		console.log(itemName);
		//alert(itemName);
	}
	console.log(map);
	
	var s = document.search.searchItem.value;
/*	
	
	let pattern1 = '[a-z]*'+s+'[a-z]*';
let string1 = "veg pizza";

// check if the phone number is valid
    let result = s.match(pattern1);
    
    console.log("bigggggggggg taskkkkkk : " + s.match(map.get(this)));
    if (result) {
        console.log('The number is valid.');
    }
    else {
       console.log('Enter number in XXX-XXX-XXXX format:');
        //validatePhone(num);
    }
	
	console.log("s " + s.toLowerCase());
	s = s.toLowerCase();
	console.log("map.has : " + map.has(s));
	
	*/
	
	
	if(s == ""){
		alert("Enter a name to search");
	}
	if(map.has(s)) {
		var imgId = document.getElementById('logoImg');
		var cn = imgId.children[0];
		imgId.removeChild(cn);
		var backLink = document.createElement('i');
		backLink.setAttribute('class', 'fa-solid fa-arrow-left-long');
		backLink.setAttribute('style', 'position: initial');
		imgId.setAttribute('onclick', 'showAll()');
		imgId.appendChild(backLink);
		
		console.log("inside if : ");
		console.log(map.get(s));
		
		for(var i = 0; i < totItems; i++){
			var itemNameId = ul.children[i].id;
			var itemName = document.getElementById(itemNameId);
		
			console.log("itemName type " + typeof(itemNameId));
			//alert("1");
			//console.log("itemName " + itemName);
			if(map.get(s) != itemNameId) {
				//alert("2");
				document.getElementById(itemNameId).style.display = 'none';
				document.getElementById(itemNameId).removeAttribute('class');
			}
			else {
				document.getElementById(itemNameId).style.display = 'block';
				document.getElementById(itemNameId).setAttribute('class', 'dropdown list-group-item d-flex justify-content-between align-items-start');
			}
			//alert("3");
			//console.log(itemName);
		}
	}
	else {
		alert("No such item exists!!");
	}
	
	console.log(map);
}

function showAll() {
	
	var ul = document.getElementById('ul');
	var totItems = ul.children.length;
	
	for(var i = 0; i < totItems; i++){
		var itemNameId = ul.children[i].id;
		document.getElementById(itemNameId).style.display = 'block';
		document.getElementById(itemNameId).setAttribute('class', 'dropdown list-group-item d-flex justify-content-between align-items-start');		
	}
	
}