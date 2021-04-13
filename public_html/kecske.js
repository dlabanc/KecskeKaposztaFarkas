window.addEventListener("load", init);
function init() {
    ID("labjegyzet").innerHTML = "Kelemen Kevin, Nagy Domonkos, Labanc Dániel, Joó Edvárd";
    ID("labjegyzet").className="footerFormaz";
}


function $(nev) {
    return document.querySelectorAll(nev);
}

function ID(nev) {
    return document.getElementById(nev);
}