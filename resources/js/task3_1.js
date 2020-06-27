window.onload=Move;
function Move() {
    var elem = document.getElementById("animatie");   
    var pos = 0;//pozitia initiala
    var id = setInterval(frame, 1);
    function frame() {
      if (pos == 1150) {//daca ajunge la pozitia finala reset+functia urmatoare
        clearInterval(id);
        Move1();
      } else {//altfel pozitia creste
        pos++; 
        elem.style.left = pos + 'px'; //distanta fata de marginea stanga a paginii
      }
    }
}
function Move1() {
    var elem = document.getElementById("animatie");   
    var pos = 0;//pozitia initiala
    var id = setInterval(frame, 1);
    function frame() {
        if (pos == 700) {//daca ajunge la pozitia finala reset+functia urmatoare
        clearInterval(id);
        Move2();
        } else {//altfel pozitia creste
        pos++; 
        elem.style.bottom = pos + 'px'; 
        }
    }
}
function Move2(){
    var elem = document.getElementById("animatie");   
    var pos = 1150;//pozitia initiala
    var id = setInterval(frame, 1);
    function frame() {
        if (pos == 0) {//daca ajunge la pozitia finala reset+functia urmatoare
        clearInterval(id);
        Move3()
        } else {//altfel pozitia scade
        pos--; 
        elem.style.left = pos + 'px'; 
        }
    }
}
function Move3(){
    var elem = document.getElementById("animatie");   
    var pos = 700;//pozitia initiala
    var id = setInterval(frame, 1);
    function frame() {
        if (pos == 0) {//daca ajunge la pozitia finala reset+functia urmatoare
        clearInterval(id);
        Move();
        } else {//altfel pozitia scade
        pos--; 
        elem.style.bottom = pos + 'px'; 
        }
    }
}
//loop de functii :D