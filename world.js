
var World = (function(){
"use strict";


function mergeDecl(o1, o2){
    var r = Object.assign({}, o2, o1);
    r.style = Object.assign({}, o2.style, o1.style);
    r.attr = Object.assign({}, o2.attr, o1.attr);
    r.classes = [].concat(o1.classes, o2.classes);
    return r;
}

class World {
    
    
    constructor(root){
        this.root = root;
        this.models = {};
        for (var name in baseModels){
            this.addModel(name, baseModels[name]);
        }
    }
    
    addHtmlElem(elem){
        this.root.appendChild(elem);
    }
    
    addObject(obj){
        var node = this.make(obj);
        this.addHtmlElem(node);
    }
    
    addModel(name, model){
        this.models[name] = model;
    }
    
    make(obj){
        var type = obj.t;
        var base = null;
        if (type){
            var proto = this.models[type];
            var data = mergeDecl(proto, obj)
            data.t = proto.t;
//             console.log(type, data);
            if (data.t != type){
                base = this.make(data);
            }
        }
//         if (!base){
//             console.log(obj, type);
//         }
//         console.log("BASE", base, type, obj)
        if (obj.make){
            return obj.make(base, obj, this);
        }
        return base;
        
    }
    
    view(view, perspective){
        view.apply(this.root, perspective);
    }
    
}


var baseModels = {
    base: {
        t: null,
        make: function(_e, data){
            var htmlType = data.htmltype || data.ht || "div";
            var e = document.createElement(htmlType);
            for (var attr in (data.attributes)){
                e[attr] = data.attributs[attr];
            }
            for (var style in data.style){
                e.style[style] = data.style[style];
            }
            for (var clas of (data.classes||[])){
                if (clas){
                    e.classList.add(clas);
                }
            }
            e.classList.add("c3d");
            if (data.src){
                e.src = data.src
            }
            if (data.html){
                e.innerHTML = data.html;
            }
            return e;
        }
    },
    wall: {
        t: "base",
        make: function(e, data){
            var x = ndef(data.x, data.x1);
            var z = ndef(data.z, data.z1);
            var x2 = ndef(data.x2, data.x);
            var z2 = ndef(data.z2, data.z);
            var top = data.top;
            var bottom = data.bottom || 0;
            var dx = x2 - x;
            var dz = z2 - z;
            var width = Math.hypot(dx, dz);
            var height = bottom - top;
            var rot = -Math.atan2(dz, dx);
            e.style.transform += `
            translate3d(${x|0}px, ${top|0}px, ${z|0}px)
            rotateY(${rot}rad)
            `;
            e.style.width = (width|0)+"px";
            e.style.height = (height|0)+"px";
            return e;
        }
    },
    flat: {
        t: "base",
        make: function(e, data, world){
            var x = ndef(data.x, data.x1);
            var z = ndef(data.z, data.z1);
            var y = data.y || 0;
            var x2 = data.x2;
            var z2 = data.z2;
            var width = x2 - x;
            var height = z2 - z;
            e.style.transform += `
            translate3d(${x|0}px, ${y|0}px, ${z|0}px)
            rotateX(90deg)
            `;
            e.style.width = (width|0)+"px";
            e.style.height = (height|0)+"px";
            return e;
        }
    },
    compound: {
        t: "base",
        make: function(e, data, world){
            var e = document.createElement("div");
            e.classList.add("c3d");
            var x = data.x || 0;
            var y = data.y || 0; 
            var z = data.z || 0;
            e.style.transform = `
            translate3d(${x|0}px, ${top|0}px, ${z|0}px)
            `;
            for (var part of data.parts){
                var node = world.make(part);
//                 console.log(node);
                e.appendChild(node);
            }
            return e;
        }
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
};


return World;
})();
