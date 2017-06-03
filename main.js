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
    
    for (var obj of WORLDMAP){
        world.addObject(obj);
    }
//     world.addObject({
//             "t": "wall",
//             "x": 1000,
//             "z": -500,
//             "z2": 100,
//             "top": -400,
//             "html": "<div class=\"sign\">HELLO</div>"
//         });
//     world.addObject({
//             "t": "tree",
//             "x": -500,
//             "z": -1000
//         });
    
    var player = new Player();
    
    var state = {input: input, view: view, root: root, player: player, world: world};
    window.state = state;
    
    setInterval(update, FRAMETIME*1000, state);
    
}


window.addEventListener('load', main);
