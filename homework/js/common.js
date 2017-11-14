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


// Меньше число -----------------------------------------------------------
function findMin(m, n) {
    if (arguments.length) {
        if (m <= n) {
            return m;
        } else {
            return n;
        }
    } else {
        alert('Введіть числа для порівняння');
    }
}

// Підняття до степені -----------------------------------------------------------
/*
function findPow(m, n) {
    if (arguments.length === 2) {
        return Math.pow(m, n);

    } else if (arguments.length === 1) {
        return m * m;
    } else {
        alert('Введіть числа для підняття до степені');
    }
}
*/

function findPow(m, n) {
    if (arguments.length === 2) {
        var r = m;
        for (var i=1; i < n; i++) {
            m = r * m;
        } return m;
    } else if (arguments.length === 1) {
        return m * m;
    } else {
        alert('Введіть числа для підняття до степені');
    }
}

// Середнє арифметичне -----------------------------------------------------------
function findMid(m, n) {
    if (arguments.length === 2) {
        return (m + n) / 2;
    } else {
        alert('Введіть 2 числа');
    }
}