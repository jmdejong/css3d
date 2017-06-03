
"use strict";

var Controls = {
    controls: {
        65: "turnleft",
        87: "forward",
        68: "turnright",
        83: "back",
        69: "straferight",
        81: "strafeleft",
        82: "lookup",
        70: "lookdown",
        32: "up",
        88: "up",
        90: "down"
    },
    initialize: function(input, inputData){
        
        var inputs = {};

        var keys = {};
        for (var key in inputData){
            var name = inputData[key];
            if (!inputs[name]){
                inputs[name] = input.createInput(name);
            }
            keys[key] = inputs[inputData[key]];
        }
            
        window.addEventListener("keydown", function(e){
            if (keys[e.which]){
                e.preventDefault();
                keys[e.which].start();
            }
        });

        window.addEventListener("keyup", function(e){
            keys[e.which] && keys[e.which].end();
        });

    }
}
