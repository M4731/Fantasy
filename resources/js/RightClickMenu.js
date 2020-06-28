// window.onclick = hideContextMenu
// var contextMenu = document.getElementById('contextMenu');

function rightclick(eveniment){
    eveniment.preventDefault();//ca sa nu mearga cand apas click dreapta
    showContextMenu(eveniment);
}

function showContextMenu(eveniment){
    var contextMenu = document.getElementById("divrc");
    contextMenu.style.display = 'block';
    contextMenu.style.left = eveniment.pageX + 'px';
    contextMenu.style.top = eveniment.pageY + 'px';
}

function hideContextMenu(){
    var contextMenu = document.getElementById("divrc");
    contextMenu.style.display = 'none';
}

function q1()
{
    document.body.style.color="blue";
}

function q2()
{
    window.location.replace("/");
}

function q3()
{
    window.location.reload();
}
