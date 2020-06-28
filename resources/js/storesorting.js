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
    showPopUp();
}

function showPopUp()
{
    document.getElementById("buypopup").style.display="block";
    setTimeout(removePopUp , 1500);
}
 
function removePopUp()
{
    document.getElementById("buypopup").style.display="none";
}


setInterval(() => {
    alert("not sure what to buy?")
}, 1000*60*5);