

var Models = (function(){
"use strict";

// Currying ftw
var compound = parts => data => {
    var e = document.createElement("div");
    e.classList.add("c3d");
    var x = data.x || 0;
    var y = data.y || 0; 
    var z = data.z || 0;
    e.style.transform = `
    translate3d(${x|0}px, ${top|0}px, ${z|0}px)
    `;
    for (var part of parts){
        e.appendChild(make(part));
    }
    return e;
}

function make(obj){
    var type = obj.type || obj.t;
    return models[type](obj);
}
    

var models = {
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
        var htmlType = data.htmltype || data.ht || "div";
        var e = document.createElement(htmlType);
        e.classList.add("c3d");
        if (data.src){
            e.src = data.src
        }
        var html = data.html || ""
        e.innerHTML = html;
        e.style.transform = `
        translate3d(${x|0}px, ${top|0}px, ${z|0}px)
        rotateY(${rot}rad)
        `;
        e.style.width = (width|0)+"px";
        e.style.height = (height|0)+"px";
        return e;
    },
    stonewall: function(data){
        var e = models.wall(data);
        e.classList.add("wall");
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
//         console.log(height, z2, z);
        var htmlType = data.htmltype || data.ht || "div";
        var e = document.createElement(htmlType);
        e.classList.add("c3d");
        if (data.src){
            e.src = data.src
        }
        var html = data.html || ""
        e.innerHTML = html;
        e.style.transform = `
        translate3d(${x|0}px, ${y|0}px, ${z|0}px)
        rotateX(90deg)
        `;
        e.style.width = (width|0)+"px";
        e.style.height = (height|0)+"px";
        return e;
    },
    grassground: function(data){
        var e = models.flat(data);
        e.classList.add("ground");
        return e;
    },
    stonefloor: function(data){
        var e = models.flat(data);
        e.classList.add("floor");
        return e;
    },
    ceiling: function(data){
        var e = models.flat(data);
        e.classList.add("ceiling");
        return e;
    },
    tree: compound([
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
    ])
}


return {models: models, make: make}

})();
