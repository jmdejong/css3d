"use strict";

const FRAMETIME = .05

function update(state){
    state.player.update(state.input, FRAMETIME);
    state.player.setView(state.view);
    var widthStr = window.getComputedStyle(outerframe).width;
    widthStr = widthStr.substr(0, widthStr.length-2);
//     console.log(widthStr);
    state.world.view(state.view, Number.parseInt(widthStr));
}


function main(){
    var input = new InputManager();
    Controls.initialize(input, Controls.controls);
    
    var view = new View();
    
    var root = document.getElementById("root");
    var world = new World(root)
    
//     importScript("testscript.js");
    
    for (var name in Map.models){
        world.addModel(name, Map.models[name]);
    }
    var htmodel = world.models[Map.root];
    world.addObject(htmodel);
    
    var player = new Player();
    
    var state = {input: input, view: view, root: root, player: player, world: world};
    window.state = state;
    
    setInterval(update, FRAMETIME*1000, state);
    
    
    
}


window.addEventListener('load', main);
