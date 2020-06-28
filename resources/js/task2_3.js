var cuvant = "Store";

var lungime = cuvant.length;

console.log(lungime);

var interval = setInterval(titlu, 1000);
var i = 0;

function titlu() {
    //verifica daca s a terminat cuvantul (a ajuns i la jumate)
    if (i * 2 - 1 >= lungime) clearInterval(interval);
    var titlu_curent = "";//cuv pe care il formez

    if (i == (lungime + 1) / 2)
    {
        titlu_curent = cuvant;//daca i a ajuns exact in centrul unui cuvant impar ia direct val cuvantului
    } 
    else 
    {
        var q = 0;
        for (var j = 0; j < i; j++) 
        {
            titlu_curent += cuvant[j];
            q++;//pune primele i litere din s (sunt la pasul i)
        }
        for (var j = 0; j < lungime - 2 * i; j++) 
        {
            titlu_curent += " ";
        }
        for (var j = 0; j < i; j++) 
        {
            titlu_curent += cuvant[cuvant.length-q];
            q--;//pune ultimele i caractere
        }
    }
    document.getElementById('h1index').innerHTML = titlu_curent;
    i++;
}