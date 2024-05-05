const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

const g1 = [
    [0, 3 , 2, 0],
    [0, 0, 1, 0],
    [1, 0, 0, 9],
    [8, 0, 0, 0]
]

const a1 = [
    [0,3,2,11],
    [2,0,1,10],
    [1,4,0,9],
    [8,11,10,0],
]

const g2 = [
    [0, 1 , 0, 0],
    [7, 0, 0, 0],
    [0, 0, 0, 3],
    [0, 0, 1, 0]
]

const a2 = [
    [0, 1, Infinity, Infinity],
    [7, 0, Infinity, Infinity],
    [Infinity, Infinity, 0, 3],
    [Infinity, Infinity, 1, 0]
  ]

const g3 = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
]

const a3 = [
[0, Infinity, Infinity, Infinity],
[Infinity, 0, Infinity, Infinity],
[Infinity, Infinity, 0, Infinity],
[Infinity, Infinity, Infinity, 0]
]

const g4 = []
const a4 = []


assert(JSON.stringify(allPairsShortestPaths(g1)) == JSON.stringify(a1));
assert(JSON.stringify(allPairsShortestPaths(g2)) == JSON.stringify(a2));
assert(JSON.stringify(allPairsShortestPaths(g3)) == JSON.stringify(a3));
assert(JSON.stringify(allPairsShortestPaths(g4)) == JSON.stringify(a4));

