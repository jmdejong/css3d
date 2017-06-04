"use strict";

var Map = {};

Map.root = "world";
Map.models = {
    
    stonewall: {t: "wall", "classes": ["stonewall"]},
    grassground: {t: "flat", "classes": ["grassground"]},
    stonefloor:  {t: "flat", "classes": ["stonefloor"]},
    ceiling:  {t: "flat", "classes": ["stoneceiling"]},
    tree: {
        t: "compound", 
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
    },
    "house": {
        t: "compound",
        "parts":[
            {
                "t": "stonewall",
                "x": 0,
                "z": 0,
                "z2": 1000,
                "top": -400
            },
            {
                "t": "stonewall",
                "x": 0,
                "z": 1000,
                "z2": 1200,
                "top": -400,
                "bottom": -300
            },
            {
                "t": "stonewall",
                "x": 0,
                "z": 1200,
                "z2": 1500,
                "top": -400
            },
            {
                "t": "stonewall",
                "x": 0,
                "z": 1500,
                "x2": 1000,
                "top": -400,
            },
            {
                "t": "stonewall",
                "x": 1000,
                "z": 1500,
                "z2": -0,
                "top": -400,
            },
            {
                "t": "stonewall",
                "x": 1000,
                "z": 0,
                "x2": 0,
                "top": -400,
            },
            {
                "t": "ceiling",
                "x1": 0,
                "z1": 0,
                "x2": 1000,
                "z2": 1500,
                "y": -400
            },
            {
                "t": "stonefloor",
                "x1": 0,
                "z1": 0,
                "x2": 1000,
                "z2": 1500,
                "y": 0
            }
        ]
    },
    forest: {
        t: "compound",
        parts: [{'t': 'tree', 'x': -337, 'z': 363}, {'t': 'tree', 'x': -661, 'z': 241}, {'t': 'tree', 'x': 376, 'z': 238}, {'t': 'tree', 'x': -246, 'z': -149}, {'t': 'tree', 'x': -40, 'z': 226}, {'t': 'tree', 'x': -663, 'z': -884}, {'t': 'tree', 'x': -709, 'z': -151}, {'t': 'tree', 'x': 987, 'z': 898}, {'t': 'tree', 'x': 76, 'z': -320}, {'t': 'tree', 'x': -668, 'z': 893}]
    },
    world: {
        t: "compound",
        parts: [
            {
                t: "grassground",
                x1: -5000,
                z1: -5000,
                x2: 5000,
                z2: 5000
            },
            {
                t: "flat",
                x1: -50,
                z1: -50,
                x2: 50,
                z2: 50,
                html:"<div style='background-color: red; left:10px; right:10px; top:10px; bottom:10px; border:3px solid black'>Start</div>"
            },
            {
                t: "house",
                x: 1500,
                z: -1000
            },
            {
                t: "forest",
                x: -1500,
                z: -200,
            },
            {
                t: "wall",
                x: 0,
                z: -800,
                x2: 800,
                top: -400,
                classes: "wood",
                html: `
<div class="sign" style="left: 50px; right: 50px; top: 50px; bottom: 100px">
    <h1>Hello town (and others)</h1>
    <p>Everything you see around here are html elements, placed in a 3d environment using css 3d transformations.</p>
    <p>Move with WSQE, turn with AD, look up/down with RF</p>
</div>`
            }
        ]
    }
}

