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
                x: -1000,
                z: 0,
            }
        ]
    }
}

const WORLDMAP = [
    {
        t: "grassground",
        x1: -5000,
        z1: -5000,
        x2: 5000,
        z2: 5000
    },
    {
        t: "flat",
//         ht: "svg",
        x1: -50,
        z1: -50,
        x2: 50,
        z2: 50,
        html:"<div style='background-color: red; left:10px; right:10px; top:10px; bottom:10px; border:3px solid black'>Start</div>"
//         html: `
// <line x1="0" y1="0" x2="100" y2="100" stroke-width="10" stroke="red"/>
// <line x1="0" y1="100" x2="100" y2="0" stroke-width="10" stroke="red"/>
// `
    },
    {
        t: "tree",
        x: -200,
        z: -1100
    },
    {
        t: "tree",
        x: -800,
        z: -1300
    },
    {
        t: "tree",
        x: -300,
        z: -200
    },
    {
        t: "tree",
        x: -900,
        z: 700
    },
    {
        t: "tree",
        x: -650,
        z: 200
    },
    {
        t: "tree",
        x: -1850,
        z: -280
    },
    {
        t: "tree",
        x: -1000,
        z: 50
    },
    {
        t: "tree",
        x: -800,
        z: -370
    },
    {
        t: "stonewall",
        x: 1500,
        z: -1000,
        z2: 0,
        top: -400
    },
    {
        t: "stonewall",
        x: 1500,
        z: 0,
        z2: 200,
        top: -400,
        bottom: -300
    },
    {
        t: "stonewall",
        x: 1500,
        z: 200,
        z2: 500,
        top: -400
    },
    {
        t: "stonewall",
        x: 1500,
        z: 500,
        x2: 2500,
        top: -400,
    },
    {
        t: "stonewall",
        x: 2500,
        z: 500,
        z2: -1000,
        top: -400,
    },
    {
        t: "stonewall",
        x: 2500,
        z: -1000,
        x2: 1500,
        top: -400,
    },
    {
        t: "ceiling",
        x1: 1500,
        z1: -1000,
        x2: 2500,
        z2: 500,
        y: -400
    },
    {
        t: "stonefloor",
        x1: 1500,
        z1: -1000,
        x2: 2500,
        z2: 500,
        y: 0
    }
];
