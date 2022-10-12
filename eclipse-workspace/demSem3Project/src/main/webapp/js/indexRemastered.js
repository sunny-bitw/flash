var st = localStorage.getItem("obj");
st = JSON.parse(st);

const map1 = new Map(Object.entries(st));
console.log("map1 " + map1); 
console.log("st " + st)
////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

var mainCotainer = document.getElementById('mainCotainer');
var quantity = document.getElementById('quantity');
var ppi = document.getElementById('ppi');
var subTotal = document.getElementById('subTotal');

let text2 = "";
var i = 1;
var sum = 0;
    for (const x of map1.values()) {
        //text2 += x;
        //console.log("text entries " + x);
        
        ////////////////////// FOR Quantity  ?????????????????????????????????????
        var div = document.createElement('div');
        div.setAttribute('class', 'billingContent');
        var id = "quantity" + i;
        div.setAttribute('id', id);
        
        var span = document.createElement('span');
        var spanText = document.createTextNode(x[2]); 
        span.appendChild(spanText);
        div.appendChild(span);
        
        var span2 = document.createElement('span');
        var spanText2 = document.createTextNode(x[0]);
        span2.appendChild(spanText2);
        div.appendChild(span2);
        
        quantity.insertAdjacentElement("afterend", div)
        //mainCotainer.appendChild(div);
        
        ////////////////////// FOR PRICE PER ITEM  ?????????????????????????????????????
        var div = document.createElement('div');
        div.setAttribute('class', 'billingContent');
        var id = "ppi" + i;
        div.setAttribute('id', id);
        
        var span = document.createElement('span');
        var spanText = document.createTextNode(x[2]); 
        span.appendChild(spanText);
        div.appendChild(span);
          
        var span2 = document.createElement('span');
        var spanText2 = document.createTextNode(x[3]);
        span2.appendChild(spanText2);
        div.appendChild(span2);
        
        ppi.insertAdjacentElement("afterend", div)
        
        ////////////////////// FOR SUBTOTAL  ?????????????????????????????????????
        var div = document.createElement('div');
        div.setAttribute('class', 'billingContent');
        var id = "subTotal" + i;
        div.setAttribute('id', id);
        
        var span = document.createElement('span');
        var spanText = document.createTextNode(x[2]); 
        span.appendChild(spanText);
        div.appendChild(span);
        
        var span2 = document.createElement('span');
        var spanText2 = document.createTextNode(parseInt(x[0]) * parseInt(x[3]));
        span2.appendChild(spanText2);
        div.appendChild(span2);
        
        subTotal.insertAdjacentElement("afterend", div);
        
        sum += (parseInt(x[0]) * parseInt(x[3]));
        
        console.log(x);
        i++;
    }
    
    console.log("sum " + sum);
    document.getElementById('gtp').innerHTML = "Grand-Total (in Rs) : " + sum ;

console.log(map1.size);
