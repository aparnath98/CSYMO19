
function myFunction()
{
    alert('you clicked');
}

function myLoadFunction(){
    var element=document.getElementById('circle');
    element.addEventListener('click',myFunction);
}
document.addEventListener('DOMContentLoaded',myLoadFunction);