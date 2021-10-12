function openNav() {
    document.getElementById("my-sidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    document.getElementById("main").style.visibility = 'hidden';

}

function closeNav() {
    document.getElementById("my-sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("main").style.visibility = 'visible';
}