// convertion of usd to  southAfrican rand function

function  torand(usd){
    return(usd*16.53);
}

document.getElementById("jun").innerHTML =  torand(10);