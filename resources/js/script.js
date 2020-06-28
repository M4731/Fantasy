window.onload=function(){
	//creez un obiect de tip XMLHttpRequest cu care pot transmite cereri catre server
	var ajaxRequest = new XMLHttpRequest();

	ajaxRequest.onreadystatechange = function() {
			//daca am primit raspunsul (readyState==4) cu succes (codul status este 200)
			if (this.readyState == 4 && this.status == 200) {
					//in proprietatea responseText am contintul fiserului JSON
                    var obJson = JSON.parse(this.responseText);
                    afiseajaJsonTemplate(obJson);
                    afiseajaJsonTemplateSpecials(obJson);
			}
	};
	//deschid o conexiune cu o cerere de tip get catre server
	//json e pus in folderul static "resurse" deci calea e relativa la acel folder (fisierul e la calea absoluta /resurse/json/studenti.json)
	ajaxRequest.open("GET", "/json/games.json", true);
	//trimit catre server cererea
	ajaxRequest.send();

    //functie de sortare dupa relevanta
    function sortAfterRel (a, b)
    {
        return b.nrOfBuys - a.nrOfBuys;
    }

    function afiseajaJsonTemplate(obJson) { 
        //in acets div voi afisa template-urile   
        let container=document.getElementById("afisTemplate");

        //creem copie
        let v = obJson.games.slice();
        
        //sortam dupa nr de cumparari
        v.sort(sortAfterRel)
       
        //in textTemplate creez continutul (ce va deveni innerHTML-ul) divului "afisTemplate"
        let textTemplate ="";

        //parcurg vetorul de studenti din obJson
        for(let i=0;i<10;i++){
            //creez un template ejs (primul parametru al lui ejs.render)
            //acesta va primi ca parametru un student din vectorul de studenti din json {student: obJson.studenti[i]}
            //practic obJson.studenti[i]=v[i] e redenumit ca "student" in template si putem sa ii accesam proprietatile: student.id etc
            if( v[i].price != v[i].discount )
            {
                //daca exista discount afisez pretul produsului taiat si apoi discount-ul
                textTemplate+=ejs.render(
                "<li class='poze'>\
                    <a onclick='addproduct(<%=game.id%>,<%=game.discount%>,<%=name%>)' class='Buy'>BUY</a>\
                    <figure>\
                        <img src=<%=game.image%> alt='.' class='imagine1'>\
                        <figcaption data-id = '<%=game.id%>' data-price = '<%=game.discount%>' data-name = '<%=game.name%>' data-red = '<%=game.price - game.discount%>'><del><%=game.price%></del> EUR -> <%=game.discount%> EUR</figcaption>\
                    </figure>\
                </li>", 
                {game: v[i], name:"'"+String(v[i].name)+"'"});
            }
            else 
            {
                //daca nu exista discount afisez direct pretul produsului
                textTemplate+=ejs.render(
                "<li class='poze'>\
                    <a onclick='addproduct(<%=game.id%>,<%=game.discount%>,<%=name%>)' class='Buy'>BUY</a>\
                    <figure>\
                        <img src=<%=game.image%> alt='.' class='imagine1'>\
                        <figcaption data-id = '<%=game.id%>' data-price = '<%=game.discount%>' data-name = '<%=game.name%>' data-red = '<%=game.price - game.discount%>'> <%=game.discount%> EUR</figcaption>\
                    </figure>\
                </li>", 
                {game: v[i], name:"'"+String(v[i].name)+"'"});
            }
        } 
        //adaug textul cu afisarea studentilor in container
        if(container)
            container.innerHTML=textTemplate;
    }


    //functie de sortare dupa discount
    function sortAfterDiscount (a, b)
    {
        return - a.price + a.discount + b.price - b.discount;
    }

    function afiseajaJsonTemplateSpecials(obJson) { 
        //in acets div voi afisa template-urile   
        let container=document.getElementById("afisTemplateSpecials");

         //face copie dupa games
        let v = obJson.games.slice();
       
        //sortam dupa discount
        v.sort(sortAfterDiscount);

        //in textTemplate creez continutul (ce va deveni innerHTML-ul) divului "afisTemplate"
        let textTemplate ="";

        //parcurg vetorul de studenti din obJson
        for(let i=0;i<10;i++){
            //creez un template ejs (primul parametru al lui ejs.render)
            //acesta va primi ca parametru un student din vectorul de studenti din json {student: obJson.studenti[i]}
            //practic obJson.studenti[i]=v[i] e redenumit ca "student" in template si putem sa ii accesam proprietatile: student.id etc
            if( v[i].price != v[i].discount )
            {
                //daca exista discount afisez pretul produsului taiat si apoi discount-ul
                textTemplate+=ejs.render(
                "<li class='poze'>\
                    <a onclick='addproduct(<%=game.id%>,<%=game.discount%>,<%=name%>)' class='Buy'>BUY</a>\
                    <figure>\
                        <img src=<%=game.image%> alt='.' class='imagine1'>\
                        <figcaption data-id = '<%=game.id%>' data-price = '<%=game.discount%>' data-name = '<%=game.name%>' data-red = '<%=game.price - game.discount%>'><del><%=game.price%></del> EUR -> <%=game.discount%> EUR</figcaption>\
                    </figure>\
                </li>", 
                {game: v[i], name:"'"+String(v[i].name)+"'"});
            }
            else 
            {
                //daca nu exista discount afisez direct pretul produsului
                textTemplate+=ejs.render(
                "<li class='poze'>\
                    <a onclick='addproduct(<%=game.id%>,<%=game.discount%>,<%=name%>)' class='Buy'>BUY</a>\
                    <figure>\
                        <img src=<%=game.image%> alt='.' class='imagine1'>\
                        <figcaption data-id = '<%=game.id%>' data-price = '<%=game.discount%>' data-name = '<%=game.name%>' data-red = '<%=game.price - game.discount%>'> <%=game.discount%> EUR</figcaption>\
                    </figure>\
                </li>", 
                {game: v[i], name:"'"+String(v[i].name)+"'"});
            }
        } 
        //adaug textul cu afisarea studentilor in container
        if(container)
            container.innerHTML=textTemplate;
    }
    
    document.body.addEventListener("contextmenu", rightclick);
    document.body.addEventListener("click", hideContextMenu);

    document.getElementById("con1").onclick = q1;
    document.getElementById("con2").onclick = q2;
    document.getElementById("con3").onclick = q3;
}