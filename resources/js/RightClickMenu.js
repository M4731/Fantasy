// window.onclick = hideContextMenu
// window.onkeydown = listenKeys;
// var contextMenu = document.getElementById('contextMenu');

// function showContextMenu(event){
//     contextMenu.style.display = 'block';
//     contextMenu.style.left = event.clientX + 'px';
//     contextMenu.style.top = event.clientY + 'px';
//     return false;
// }

// function hideContextMenu(){
//     contextMenu.style.display = 'none';
// }


function rightclick(eveniment){
    eveniment.preventDefault();//ca sa nu mearga cand apas click dreapta
}
