"use strict";




class View {
    
    
    constructor(){
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.yaw = 0;
        this.pitch = 0;
        this.roll = 0;
    }
    
    place(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    
    setEuler(yaw, pitch, roll){
        this.yaw = yaw;
        this.pitch = pitch;
        this.roll = roll;
    }
    
    apply(elem, perspective){
//         translateZ(${perspective|0}px)
        elem.style.transform = `
        rotateX(${-this.pitch}rad)
        rotateY(${-this.yaw}rad)
        rotateZ(${-this.roll}rad)
        translate3d(${-this.x|0}px, ${-this.y|0}px, ${-this.z|0}px)`;
    }
    
}
