//getRandomArray(length, min, max)
function getRandomArray(lengthArr, min, max) {
    const res = new Array(lengthArr).fill(0);
    const result = res.map(item => { return item = Math.floor(Math.random() * (max - min) + min) });
    return result;
}
document.writeln(`Function №1, get random array with length 15, min - 1 and max - 100: <b>${getRandomArray(15, 1, 100)}</b><br>`);

//getModa(...numbers)
function getModa(...arr) {

    let ocurrencesMap = {};
    arr.filter((item) => {
        return Number.isInteger(item);
    })
        .forEach((item) => {

            if (ocurrencesMap[item] === undefined) {
                ocurrencesMap[item] = 0
            }
            ocurrencesMap[item] += 1
        });

    let modeObj = {};
    let ocurrencesValues = Object.values(ocurrencesMap);
    let max = Math.max(...ocurrencesValues);
    for (const key in ocurrencesMap) {
        let keyName = `${key} is mode`
        if (ocurrencesMap[key] === max) {
            modeObj[keyName] = ocurrencesMap[key];
        }
    }
    return Object.keys(modeObj);
}
document.writeln(`Function №2, get moda: <b>${JSON.stringify(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))}</b><br>`);

// getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
function getAverage(...numbers) {
    let arr = [];
    for (const number of numbers) {
        if (Number.isInteger(number)) {
            arr.push(number);
        }
    }
    const result = arr.reduce((acc, i, index, arr) => {
        return acc + i / arr.length;
    }, 0);
    return result.toFixed(1);
}
document.writeln(`Function №3, get average: <b>${getAverage(1.1, 6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</b><br>`);

//filterEvenNumbers(...numbers)
function filterEvenNumbers(...arr) {
    const result = arr.filter((item) => {
        return Math.abs(item % 2) == 1;
    });
    return result;
}
document.writeln(`Function №5, even numbers: <b>${filterEvenNumbers(1, 2, 3, 4, 5, 6)}</b><br>`);

//countPositiveNumbers(...numbers)
function countPositiveNumbers(...arr) {
    const result = arr.filter((item) => {
        return item > 0;
    });
    return result.length;
}
document.writeln(`Function №6, count positive numbers: <b>${countPositiveNumbers(1, -2, 3, -4, -5, 6)}</b><br>`);

//getDividedByFive(...numbers)
function getDividedByFive(...arr) {
    const result = arr.filter((item) => {
        return item % 5 == 0;
    });
    return result;
}
document.writeln(`Function №7, numbers divided by five: <b>${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</b><br>`);

