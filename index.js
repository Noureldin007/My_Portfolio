let hed = document.getElementById("header");
let logo = document.getElementById("logo"); 
let link = document.getElementsByClassName("link");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 609 || document.documentElement.scrollTop > 609) {
        hed.style.backgroundColor = " rgb(208, 208, 253)";
        logo.style.color = "darkblue";
        link[0].style.color = "darkblue";
        link[0].style.transition = "0.3s ease-in-out";
        link[1].style.color = "darkblue";
        link[1].style.transition = "0.3s ease-in-out";
        link[2].style.color = "darkblue";
        link[2].style.transition = "0.3s ease-in-out";
        link[3].style.color = "darkblue";
        link[3].style.transition = "0.3s ease-in-out";
        
    } else {
        hed.style.backgroundColor = "transparent"; 
        hed.style.transition = "0.3s ease-in-out";
        logo.style.color = "white";
        logo.style.transition = "0.3s ease-in-out";
        link[0].style.color = "white";
        link[0].style.transition = "0.3s ease-in-out";
        link[1].style.color = "white";
        link[1].style.transition = "0.3s ease-in-out";
        link[2].style.color = "white";
        link[2].style.transition = "0.3s ease-in-out";
        link[3].style.color = "white";
        link[3].style.transition = "0.3s ease-in-out";
        hed.style.color = "white";
    }
}




