window.addEventListener("load", init);

function id(nev){
    return document.getElementById(nev);
}
function $(nev){
    return document.querySelectorAll(nev);
}

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