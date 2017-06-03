"use strict";


class Player {
    
    constructor(){
        this.speed = 500;
        this.turnspeed = 1.5;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.dir = 0; // jaw
        this.pitch = 0;
    }
    
    place(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    
    move(x, y, z){
        this.x += x;
        this.y += y;
        this.z += z;
    }
    
    update(input, dtime){
        var right = dtime*this.speed*(input.getState("straferight") - input.getState("strafeleft"));
        var fd = dtime*this.speed*(input.getState("forward") - input.getState("back"));
        var sindir = Math.sin(this.dir);
        var cosdir = Math.cos(this.dir);
        this.x += cosdir*right - sindir*fd;
//         this.y += dtime*this.speed*(input.getState("down") - input.getState("up"))
        this.z += -sindir*right - cosdir*fd;
        this.dir += dtime*this.turnspeed*(input.getState("turnleft") - input.getState("turnright"));
        this.pitch += dtime*this.turnspeed*(input.getState("lookdown") - input.getState("lookup"));
    }
    
    setView(view){
        view.place(this.x, this.y-180, this.z)
        view.setEuler(this.dir, this.pitch, 0);
    }
}
