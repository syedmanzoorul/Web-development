
let a = 0;

function h3(){
    a = a + 1;
    document.getElementById("h1").innerHTML = a;
    
}
function h4(){
    a = a - 1;
    document.getElementById("h1").innerHTML = a;
    
}
function h5(){
    a = a * 2;
    document.getElementById("h1").innerHTML = a;
    
}
function h6(){
    a = a / 2;
    document.getElementById("h1").innerHTML = a;
    
}
function h7(){
    a = a + 100;
    document.getElementById("h1").innerHTML = a;
    
}
function h8(){
    a = a + " + "
    document.getElementById("co").textContent += a ;
    a = 0
    document.getElementById("h1").innerHTML = 0;
}
  