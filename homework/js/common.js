"use strict";

// 1.1 Функція для визначення чи об'єкт пустий

var arr = [ 45, 109, 32, 39, 1, 0 ];

function isEmpty(arr) {
    for ( var key in arr ) {
        return true;
    }
    return false;
}

// 1.2 Сума об'єкту

function sumData(arr) {
    if (isEmpty(arr)) {
        var sumArr = 0;
        for ( var key in arr ) {
            sumArr += arr[key];
        } return sumArr;
    } else {
        console.log('----', 'масив порожній');
    }
}

// 2 Об'єкт з масивом і його сума

var codeObj = [ 45, 109, 32, 39, 1, 0 ];

codeObj[23] = 95;

function sumObj(codeObj) {
    var sum = 0;
    for ( var key in codeObj ) {
        sum += codeObj[key];
    } return sum;
}

// 3 Метод бульбашки

var data = [1, 2, 7, 10, 6, 9, 3, 8, 5, 4];


function buble(data) {
    var dataLeng = data.length - 1;

    for ( var key = 0; key < dataLeng; key++ ) {

        for ( var i = 0; i < dataLeng; i++ ) {

            if ( data[i] > data[i + 1] ) {
                var rise = data [i];
                data [i] = data [i + 1];
                data [i + 1] = rise;
            }
        }
    }
    return data;
}