function sortarePret(){
    let container = document.getElementById("afisTemplateStore");
    var produse = container.getElementsByClassName("poze");
    var vproduse = Array.prototype.slice.call(produse);

    vproduse.sort(function(a,b)
    {
        return a.children[1].children[1].dataset.price - (b.children[1].children[1].dataset.price);
    });
    for(let produs of vproduse)
    {
        container.appendChild(produs);
    }
}
function sortarePretD(){
    let container = document.getElementById("afisTemplateStore");
    var produse = container.getElementsByClassName("poze");
    var vproduse = Array.prototype.slice.call(produse);

    vproduse.sort(function(a,b)
    {
        return b.children[1].children[1].dataset.price - (a.children[1].children[1].dataset.price);
    });
    for(let produs of vproduse)
    {
        container.appendChild(produs);
    }
}
function sortareReducere(){
    let container = document.getElementById("afisTemplateStore");
    var produse = container.getElementsByClassName("poze");
    var vproduse = Array.prototype.slice.call(produse);

    vproduse.sort(function(a,b)
    {
        return b.children[1].children[1].dataset.red - (a.children[1].children[1].dataset.red);
    });
    for(let produs of vproduse)
    {
        container.appendChild(produs);
    }
}
function cheap(){
    let container = document.getElementById("afisTemplateStore");
    var checkbox1 = document.getElementById('checkCheap');
    var checkbox2 = document.getElementById('checkDiscount');
    if (checkbox1.checked == true)
    {
        var produse = container.getElementsByClassName("poze");
        var vproduse = Array.prototype.slice.call(produse);
    
        for(let produs of vproduse)
        {
            if(produs.children[1].children[1].dataset.price > 15)
            {
                produs.style.display="none";
            }
        }
    }
    else
    {
        var produse = container.getElementsByClassName("poze");
        var vproduse = Array.prototype.slice.call(produse);
    
        for(let produs of vproduse)
        {
            if(checkbox2.checked == true)
            {
                if(produs.children[1].children[1].dataset.red == 0 && produs.children[1].children[1].dataset.price > 15)
                {
                    produs.style.display="block";
                }
            }
            else
            {
                if(produs.children[1].children[1].dataset.price > 15)
                {
                    produs.style.display="block";
                }
            }
        }
    }

    if (checkbox2.checked == true)
    {
        var produse = container.getElementsByClassName("poze");
        var vproduse = Array.prototype.slice.call(produse);
    
        for(let produs of vproduse)
        {
            if(produs.children[1].children[1].dataset.red == 0)
            {
                produs.style.display="none";
            }
        }
    }
    else
    {
        var produse = container.getElementsByClassName("poze");
        var vproduse = Array.prototype.slice.call(produse);
    
        for(let produs of vproduse)
        {
            if(checkbox1.checked == true)
            {
                if(produs.children[1].children[1].dataset.red != 0 && produs.children[1].children[1].dataset.price < 15)
                {
                    produs.style.display="block";
                }
            }
            else
            {
                if(produs.children[1].children[1].dataset.red == 0)
                {
                    console.log(produs.children[1].children[1].dataset.name);
                    produs.style.display="block";
                }
            }
        }
    }
}
function reset(){
    let container = document.getElementById("afisTemplateStore");
    var produse = container.getElementsByClassName("poze");
    var vproduse = Array.prototype.slice.call(produse);

    vproduse.sort(function(a,b)
    {
        return a.children[1].children[1].dataset.id - (b.children[1].children[1].dataset.id);
    });
    for(let produs of vproduse)
    {
        container.appendChild(produs);
        produs.style.display="block";
    }
}

function addproduct(id, price, name)
{
    if(!localStorage.getItem(id))
    {
        let count = 1;
        let vector = [name, price, count];
        localStorage.setItem(id, JSON.stringify(vector));
    }
    else
    {
        let vector = [];
        vector = JSON.parse(localStorage.getItem(id));
        vector[2]++;
        localStorage.setItem(id,null);
        localStorage.setItem(id, JSON.stringify(vector));
    }
}






















































// window.onload=function(){
//     var ajaxRequest = new XMLHttpRequest();

// 	ajaxRequest.onreadystatechange = function() {
// 			//daca am primit raspunsul (readyState==4) cu succes (codul status este 200)
// 			if (this.readyState == 4 && this.status == 200) {
// 					//in proprietatea responseText am contintul fiserului JSON
//                     var obJson = JSON.parse(this.responseText);
//                     afiseajaJsonTemplateStore(obJson);
// 			}
//     };
    
// 	//deschid o conexiune cu o cerere de tip get catre server
// 	//json e pus in folderul static "resurse" deci calea e relativa la acel folder (fisierul e la calea absoluta /resurse/json/studenti.json)
// 	ajaxRequest.open("GET", "/json/games.json", true);
// 	//trimit catre server cererea
// 	ajaxRequest.send();

//     function sort(){
//         var temp = document.getElementById("afisTemplateStore");
//         //ul ul care retine toate li-urile de jocuri

//         var jocuri = temp.children;
//         var arrayjocuri = Array.prototype.slice.call(jocuri);
//     }
    
// }