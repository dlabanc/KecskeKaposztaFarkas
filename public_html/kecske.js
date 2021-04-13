window.addEventListener("load", init);

function init() {
    ID("labjegyzet").innerHTML = "Kelemen Kevin, Nagy Domonkos, Labanc Dániel, Joó Edvárd";
    ID("labjegyzet").className = "footerFormaz";

    for (var i = 0; i < $("aside img").length; i++) {
        $("aside img")[i].addEventListener("mouseover", kiemel);
        $("aside img")[i].addEventListener("mouseout", levesz);
        $("aside img")[i].addEventListener("click", berak);
        $("article img")[i].addEventListener("click", kirak);
        $("article img")[i].addEventListener("mouseover", kiemel);
        $("article img")[i].addEventListener("mouseout", levesz);
    }


    function $(nev) {
        return document.querySelectorAll(nev);
    }

    function ID(nev) {
        return document.getElementById(nev);
    }

    function kiemel() {
       this.classList.add("kiemel");
    }

    function levesz() {
        this.classList.remove("kiemel");
    }
    
    function berak() {
        this.classList.toggle("nemlatszik");
        $("article img")[this.id].classList.toggle("nemlatszik");
        
    }
    
    function kirak() {
        this.classList.toggle("nemlatszik");
        $("aside img")[this.id-3].classList.toggle("nemlatszik");
    }

}



