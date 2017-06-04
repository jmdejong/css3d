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



function ajaxGet(file, callback){
    var req = new XMLHttpRequest();
    req.addEventListener("load", resp => callback(resp, req));
    req.open("GET", file+"?t="+Date.now());
    req.send();
    return req;
}




// based on http://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
// todo: does url decoding work properly?
var queryString = function () {
    // This function is anonymous, is executed immediately and 
    // the return value is assigned to QueryString!
    var queryParams = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if (typeof pair[1] === "undefined") {
            pair[1] = true;
        }
        queryParams[pair[0]] = decodeURIComponent(pair[1]);
    } 
    return queryParams;
}();


var importScript = (function (oHead) {

  function loadError (oError) {
    throw new URIError("The script " + oError.target.src + " is not accessible.");
  }

  return function (sSrc, fOnload) {
    var oScript = document.createElement("script");
    oScript.type = "text\/javascript";
    oScript.onerror = loadError;
    if (fOnload) { oScript.onload = fOnload; }
    oHead.appendChild(oScript);
    oScript.src = sSrc;
  }

})(document.head || document.getElementsByTagName("head")[0]);



