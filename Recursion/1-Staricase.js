/**
Staircase detail

This is a staircase of size : n=4
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
Write a program that prints a staircase of size .
Function Description
Complete the staircase function in the editor below.
staircase has the following parameter(s):
int n: an integer
Print
Print a staircase as described above.
Input Format
A single integer, , denoting the size of the staircase.
Constraints 0 < n <= 100
   #
  ##
 ###
####
 */


function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);  // Left spaces
        let hashes = '#'.repeat(i);      // Right hashes
        console.log(spaces + hashes);    // Print the staircase row
    }
}

// staircase(4)


//Recursive Approach
function staircaseRecursive(n, currentStep = 1) {
    if (currentStep > n) return;
    let spaces = ' '.repeat(n - currentStep);
    let hashes = '#'.repeat(currentStep);
    console.log(spaces + hashes);
    staircaseRecursive(n, currentStep + 1);
}
// staircaseRecursive(4);


/**
####
 ###
  ##
   #
Trying for reverse to get this pattern
 */

function reverseStair(n) {
    for (let i = n; i >= 1; i--) {
        let spaces = ' '.repeat(n - i);  // Left spaces
        let hashes = '#'.repeat(i);      // Right hashes
        console.log(spaces + hashes);    // Print the reverseStair row
    }
}

// reverseStair(4)

function reverseStairCase(n, currentStep = n) {
    if (currentStep === 0) return;
    let spaces = ' '.repeat(n - currentStep);
    let hashes = '#'.repeat(currentStep);
    console.log(spaces + hashes)
    reverseStairCase(n, currentStep - 1);
}
// reverseStairCase(4);


/**
1234
123
12
1
Trying to get this pattern
*/

function reverseStairCaseWithNumber(n) {
    for (let i = n; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j;
        }
        console.log(row)
    }
}
// reverseStairCaseWithNumber(4)

function reverseStairCaseWithNumberRecur(n, currentStep = n) {
    if (currentStep === 0) return;
    let row = '';
    for (let i = 1; i <= currentStep; i++) {
        row += i;
    }
    console.log(row)
    reverseStairCaseWithNumberRecur(n, currentStep-1)
}

reverseStairCaseWithNumberRecur(4)

/**
1
12
123
1234
Trying to get this pattern
*/

function staircaseWithNumber(n) {
    for (let i = 0; i <= n; i++) {
        let row = ''
        for (let j = 1; j <= i; j++) {
            row += j;
        }
        console.log(row)
    }
}

// staircaseWithNumber(4);


function recrusiveStaircaseWithNumber(n, currentStep = 1) {
    if (currentStep > n) return;
    let row = '';
    for (let i = 1; i <= currentStep; i++) {
        row += i;
    }
    console.log(row)
    recrusiveStaircaseWithNumber(n, currentStep + 1);
}
// recrusiveStaircaseWithNumber(4);