function myFunction()
{
    var element=document.getElementById('circle');
    element.style.backgroundColor= 'blue';
    element.style.opacity= 0.5;
}

function myLoadEvent()
{
    var element=document.getElementById('circle');
    element.addEventListener('click',myFunction);
}
document.addEventListener('DOMContentLoaded',myLoadEvent);