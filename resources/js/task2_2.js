var str = "404 ERROR";
var str2 = str.split("");
//luam textul, ii dam split(in litere)

var id = setInterval(cuvant, 333);
//setam timer-ul la .33 sec
var x = 0;
var k = 0;

function cuvant() {
    if (x < str2.length) {
        document.getElementById("h1404").innerHTML += " " + str2[x];
        x++;
    } else {
        clearInterval(id);
        k = 1;
        cuvant2();
    }
}

function cuvant2() {
    if (k == 1) {
        str = "Page not Found";
        str2 = str.split("");
        x = 0;
        id = setInterval(cuvant3, 300);
    }
}

function cuvant3() {
    if (x < str2.length) {
        document.getElementById("h2404").innerHTML += " " + str2[x];
        x++;
    } else {
        clearInterval(id);
    }
}