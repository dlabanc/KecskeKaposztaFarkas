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

var kepObjTomb = [kepObj1,kepObj2,kepObj3];
var eleresiUt = [];
var id = 0;

function init(){
    ID("labjegyzet").innerHTML = "Kelemen Kevin, Nagy Domonkos, Labanc Dániel, Joó Edvárd";
    ID("labjegyzet").className="footerFormaz";
    for (var i = 0; i < kepObjTomb.length; i++) {
        $(".keptarolo img")[i].addEventListener("click", Hozzaad);  
        
    }
   
}
function Hozzaad(){
    var azon = this.id;
    feltolt(azon);
}


function feltolt(index){
   eleresiUt.push(kepObjTomb[index].kep);
    console.log(eleresiUt);
}


function $(nev) {
    return document.querySelectorAll(nev);
}

function ID(nev) {
    return document.getElementById(nev);
}


