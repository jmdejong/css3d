"use strict";


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
