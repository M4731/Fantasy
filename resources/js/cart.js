window.onload=function(){
    var tabelash = document.getElementsByTagName("tbody")[0];
    var sum = 0;
    for (let i=0; i<localStorage.length; i++)
    {
        if(localStorage.key(i) != "randid")
        {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let vector = JSON.parse(localStorage.getItem(localStorage.key(i)));
            td1.innerHTML = vector[0];
            td2.innerHTML = vector[2];
            td3.innerHTML = vector[1]+"€";
            sum += parseFloat(vector[1])*parseFloat(vector[2]);
            // console.log( td1.innerHTML);
            // console.log( td2.innerHTML);
            // console.log( td3.innerHTML);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tabelash.appendChild(tr);
        }
    }
    sum = sum.toFixed(2);
    document.getElementById("total_pret").innerHTML = sum+"€";

    //rightclick
    document.body.addEventListener("contextmenu", rightclick);
    document.body.addEventListener("click", hideContextMenu);

    document.getElementById("con1").onclick = q1;
    document.getElementById("con2").onclick = q2;
    document.getElementById("con3").onclick = q3;
}

function emptycart()
{
    localStorage.clear();
    location.reload();
}