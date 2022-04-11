function myLoadFunction()
{
    var element= document.getElementById('pageheading');
    element.firstChild.nodeValue ='New Heading';

    var element= document.getElementById('paragraph');
    element.firstChild.nodeValue ='New Paragraph Text';
}   
    document.addEventListener('DOMContentLoaded',myLoadFunction);
