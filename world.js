
var World = (function(){
"use strict";


class World {
    
    
    constructor(root){
        this.root = root;
    }
    
    addHtmlElem(elem){
        this.root.appendChild(elem);
    }
    
    addObject(obj){
//         var type = obj.type || obj.t;
        var node = Models.make(obj);//models[type](obj);
//         console.log(node);
        this.addHtmlElem(node);
    }
    
    view(view, perspective){
//         console.log(perspective);
        view.apply(this.root, perspective);
    }
    
}


var models = {
    vert: function(data){
        var x = data.x;
        var z = data.z;
        var x2 = ndef(data.x2, data.x);
        var z2 = ndef(data.z2, data.z);
        var top = data.top;
        var bottom = data.bottom || 0;
        var dx = x2 - x;
        var dz = z2 - z;
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
        e.style.transform = `
        translate3d(${x|0}px, ${top|0}px, ${z|0}px)
        rotateY(${rot}rad)
        `;
        e.style.width = (width|0)+"px";
        e.style.height = (height|0)+"px";
        e.innerHTML = html;
        return e;
    },
    wall: function(data){
        var e = models.vert(data);
        e.classList.add("wall");
        return e;
    },
    tree: function(data){
        var e = document.createElement("div");
        e.classList.add("c3d");
        var x = data.x || 0;
        var y = data.y || 0; 
        var z = data.z || 0;
        e.style.transform = `
        translate3d(${x|0}px, ${top|0}px, ${z|0}px)
        `;
        var p1 = models.vert({
            x: -100,
            z: -100,
            x2: 100,
            z2: 100,
            top: -600+y,
            bottom: y,
            ht: "img",
            src: "resources/tree.png"
        });
        var p2 = models.vert({
            x: -100,
            z: 100,
            x2: 100,
            z2: -100,
            top: -600+y,
            bottom: y,
            ht: "img",
            src: "resources/tree.png"
        });
        e.appendChild(p1);
        e.appendChild(p2);
        return e;
    }
            
}


return World;
})();
