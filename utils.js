"use strict";


// clamp x between lower and upper
function clamp(x, lower, upper){
    return Math.min(Math.max(x, lower), upper)
}


// square the number
function sqr(x){
    return x*x;
}

function floorMod(nom, div){
    var r = nom % div;
    if (r < 0){
        r += div;
    }
    return r
}


// return val if it is defined, else defaultValue
// this is mainly useful for numbers or strings because 0 and "" are falsy
// and for either of those val || defaultValue will give the defaultValue
function ndef(val, defaultValue){
    for (var i=0; i<arguments.length; i++){
        if (typeof arguments[i] !== 'undefined'){
            return arguments[i];
        }
    }
    return undefined;
}


