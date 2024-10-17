// https://getsdeready.com/courses/design-dsa-combined/lesson/excel-sheet-column-title-2/
/**
Easy
Topics
Companies
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 


Formula a=1,b=2,c=3.....
res = 0
res = (res * 26) + character

ab
(result * 26) + caracter
(0*26+1) = 1
(1*26+2) = 28
 */


// const convertToNumber = (columnTitle) => {
//     let result = 0;
//     const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//     for (let i = 0; i < columnTitle.length; i++) {
//         let caracter = letters.indexOf(columnTitle[i]) + 1; // Get index of the letter in the alphabet
//         result = result * 26 + caracter; // Convert to the corresponding number
//     }
//     return result;
// };

// console.log(convertToNumber('A'));   // Output: 1
// console.log(convertToNumber('AB'));  // Output: 28
// console.log(convertToNumber('ZY'));  // Output: 701


// here we are converting a nubmer to a character
// if given 28 then the output should be AB

const convertToTitle = (columnNumber) => {
    let result = '';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    while (columnNumber !== 0) {
        columnNumber--;
        let reamiander = columnNumber % 26;
        columnNumber = Math.floor(columnNumber / 26).toString();
        result = letters[reamiander] + result;
    }
    return result;
}

console.log(convertToTitle(3));   // Output: A
// console.log(convertToTitle(28));   // Output: A




// res = (res * 26) + char




