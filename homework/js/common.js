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

findX(1, -26, 120);