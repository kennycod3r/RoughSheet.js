let nav = document.getElementById("navBar");

//window.addEventListener('scroll', stopNav);

function stopNav(){
    if(window.scrollY >= 1165){
        nav.style.position = "sticky";
    }
    else{
        nav.style.position = "fixed";
    }
}