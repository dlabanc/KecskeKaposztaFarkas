window.addEventListener("load", init);

var kepObj1 = {
    kep: "kepek/kecske2.png",
    cim: "kecske"
};
var kepObj2 = {
    kep: "kepek/kaposzta.png",
    cim: "kaposzta"
};
var kepObj3 = {
    kep: "kepek/farkas.png",
    cim: "farkas"
};

var kepObjTomb = [kepObj1, kepObj2, kepObj3];
var eleresiUt = [];
var id = 0;

function init() {
    ID("labjegyzet").innerHTML = "Kelemen Kevin, Nagy Domonkos, Labanc Dániel, Joó Edvárd";
    ID("labjegyzet").className = "footerFormaz";

    for (var i = 0; i < kepObjTomb.length; i++) {
        $(".keptarolo img")[i].addEventListener("click", Hozzaad);

    }


    function Hozzaad() {
        var azon = this.id;
        
        feltolt(azon);
    }


    function feltolt(index) {
        eleresiUt.push(kepObjTomb[index].kep);
        console.log(eleresiUt);
    }


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
        $("aside img")[this.id - 3].classList.toggle("nemlatszik");
    }

}