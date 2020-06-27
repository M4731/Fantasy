
var profile_values = document.getElementsByClassName('profile-value');
//am pus toate elementele din site care au clasa profile-value intr-un array
var total_words = 0;
console.log(profile_values.length);
for (i = 0; i < profile_values.length; i++) 
{
  total_words += counter(profile_values[i].innerText); //?????MISTER?????
  // profile_values[i].style.color = "pink";
  //console.log(profile_values[i].innerText);
}
document.getElementById('word-count').innerHTML = total_words;
//console.log(total_words);

function counter (x)
{
    //functie care numara cuvintele dintr-un string primit nu stiu ce am facut aici, e o nebunie, 
    //DAR MERGE !
    let caounte = 0;
    for (var i of x.split(" "))//split dupa spatii
        for (var j of i.split("\n"))//split dupa \n ca aparent nu il lua
            {
                let we = 1;
                for ( var q of j )
                    if (q == "." && q == ">" && q == "<" && q == "," && q == ":")//punem conditia sa nu fie caractere
                        we = 0;
                if (j.length >= 1 && we==1)
                {
                    console.log(j);//afisam in consola cuvintele pe care le ia
                    caounte += 1;
                }
            }
    return caounte;
}
    
