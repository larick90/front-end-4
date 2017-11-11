"use strict";
function findX(a, b, c) {
    var d = Math.pow(b, 2) - 4 * a * c;

    if (d > 0) {
        var x1 = (-b + Math.sqrt(d)) / (2 * a);
        var x2 = (-b - Math.sqrt(d)) / (2 * a);
        console.log('----', x1);
        console.log('----', x2);
    } else if (d === 0) {
        x1 = -b / (2 * a);
        console.log('----', x1);
    } else {
        console.log('----', 'дійсних коренів немає');
    }
}

var m;
var n;
var r;

// Меньше число -----------------------------------------------------------
function findMin(m, n) {
    if (m < n) {
        console.log('Меньше число', m);
    } else if (m > n) {
        console.log('Меньше число', n);
    } else console.log('Числа рівні');
    // return Math.min(m, n);
}

// Підняття до степені -----------------------------------------------------------
function findPow(m, n) {
    if ( n !== undefined ) {
        r = Math.pow(m, n);
        console.log('Число "m" в степені "n" = ', r);
    } else {
        r = m * m;
        console.log('Число "m" в степені "m" = ', r);
    }
}

// Середнє арифметичне -----------------------------------------------------------
function findMid(m, n) {
    r = (m + n) / 2;
    console.log('----', 'Середнє арифметичне =', r);
}
