

var Models = (function(){
"use strict";


class Models {
    
    constructor(){
        
    }
    
    
}



// // Currying ftw
// var compound = parts => data => {
//     var e = document.createElement("div");
//     e.classList.add("c3d");
//     var x = data.x || 0;
//     var y = data.y || 0; 
//     var z = data.z || 0;
//     e.style.transform = `
//     translate3d(${x|0}px, ${top|0}px, ${z|0}px)
//     `;
//     for (var part of parts){
//         e.appendChild(make(part));
//     }
//     return e;
// }

// var extend = (extra) => data => {
//     for (var i in extra){
//         if (i in ["attr", "style"] && data[i]){
//             data[i] = Object.assign(data[i], extra[i]);
//         } else if (i == "classes" && data[i]){
//             data[i] = data[i].concat(extra[i]);
//         } else{
//             data[i] = extra[i];
//         }
//     }
//     data.t = extra.base
//     return make(data)
// }
    

function make(obj){
    var type = obj.t;
    var proto = models[type];
    if (typeof proto == "function"){
        return proto(obj);
    } else {
        var data = obj;
        var extra = proto;
        for (var i in extra){
            if (i in ["attr", "style"] && data[i]){
                data[i] = Object.assign(data[i], extra[i]);
            } else if (i == "classes" && data[i]){
                data[i] = data[i].concat(extra[i]);
            } else{
                data[i] = extra[i];
            }
        }
//         data.t = extra.base
        return make(data)
    }
}

var models = {
    base: function(data){
        var htmlType = data.htmltype || data.ht || "div";
        var e = document.createElement(htmlType);
        for (var attr in (data.attributes)){
            e[attr] = data.attributs[attr];
        }
        for (var style in data.style){
            e.style[style] = data.style[style];
        }
        for (var clas of (data.classes||[])){
            e.classList.add(clas);
        }
        e.classList.add("c3d");
        if (data.src){
            e.src = data.src
        }
        if (data.html){
            e.innerHTML = data.html;
        }
        return e;
    },
    wall: function(data){
        var x = ndef(data.x, data.x1);
        var z = ndef(data.z, data.z1);
        var x2 = ndef(data.x2, data.x);
        var z2 = ndef(data.z2, data.z);
        var top = data.top;
        var bottom = data.bottom || 0;
        var dx = x2 - x;
        var dz = z2 - z;
//         console.log(dx, x, x2);
        var width = Math.hypot(dx, dz);
        var height = bottom - top;
        var rot = -Math.atan2(dz, dx);
        var e = models.base(data);
        e.style.transform += `
        translate3d(${x|0}px, ${top|0}px, ${z|0}px)
        rotateY(${rot}rad)
        `;
        e.style.width = (width|0)+"px";
        e.style.height = (height|0)+"px";
        return e;
    },
    flat: function(data){
        var x = ndef(data.x, data.x1);
        var z = ndef(data.z, data.z1);
        var y = data.y || 0;
        var x2 = data.x2;
        var z2 = data.z2;
        var width = x2 - x;
        var height = z2 - z;
        var e = models.base(data);
        e.style.transform += `
        translate3d(${x|0}px, ${y|0}px, ${z|0}px)
        rotateX(90deg)
        `;
        e.style.width = (width|0)+"px";
        e.style.height = (height|0)+"px";
        return e;
    },
    compound: function(data){
        var e = document.createElement("div");
        e.classList.add("c3d");
        var x = data.x || 0;
        var y = data.y || 0; 
        var z = data.z || 0;
        e.style.transform = `
        translate3d(${x|0}px, ${top|0}px, ${z|0}px)
        `;
        for (var part of data.parts){
            e.appendChild(make(part));
        }
        return e;
    },
    stonewall: {t: "wall", "classes": ["stonewall"]},
    grassground: {t: "flat", "classes": ["grassground"]},
    stonefloor:  {t: "flat", "classes": ["stonefloor"]},
    ceiling:  {t: "flat", "classes": ["stoneceiling"]},
    tree: {t: "compound", 
        parts:[
            {
                t: "wall",
                x: -100,
                z: -100,
                x2: 100,
                z2: 100,
                top: -600,
                bottom: 0,
                ht: "img",
                src: "resources/tree.png"
            },
            {
                t: "wall",
                x: -100,
                z: 100,
                x2: 100,
                z2: -100,
                top: -600,
                bottom: 0,
                ht: "img",
                src: "resources/tree.png"
            }
        ]
    }
}


return {models: models, make: make}

})();
