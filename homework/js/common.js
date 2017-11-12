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
    if (arguments.length) {
        if (m < n) {
            console.log('Меньше число', m);
        } else if (m > n) {
            console.log('Меньше число', n);
        } else console.log('Числа рівні');
    } else {
        alert('Введіть числа для порівняння');
    }
}

// Підняття до степені -----------------------------------------------------------
function findPow(m, n) {
    if (arguments.length === 2) {
        r = Math.pow(m, n);
        console.log('Число "m" в степені "n" = ', r);
    } else if (arguments.length === 1) {
        r = m * m;
        console.log('Число "m" в степені "m" = ', r);
    } else {
        alert('Введіть числа для підняття до степені');
    }
}

// Середнє арифметичне -----------------------------------------------------------
function findMid(m, n) {
    if (arguments.length === 2) {
        r = (m + n) / 2;
        console.log('----', 'Середнє арифметичне =', r);
    } else {
        alert('Введіть 2 числа');
    }
}
