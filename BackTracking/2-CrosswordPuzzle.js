/**
 A  Crossword grid is provided to you, along with a set of words (or names of places) which 
 need to be filled into the grid. Cells are marked either + or -. Cells marked with a - are to be filled with the word list.

The following shows an example crossword from the input crossword grid and the list of words to fit, 

sample example
Input 	   		Output

++++++++++ 		++++++++++
+------+++ 		+POLAND+++
+++-++++++ 		+++H++++++
+++-++++++ 		+++A++++++
+++-----++ 		+++SPAIN++
+++-++-+++ 		+++A++N+++
++++++-+++ 		++++++D+++
++++++-+++ 		++++++I+++
++++++-+++ 		++++++A+++
++++++++++ 		++++++++++
POLAND;LHASA;SPAIN;INDIA

Function Description

Complete the crosswordPuzzle function in the editor below. It should return an array of strings, each representing a row of the finished puzzle.

crosswordPuzzle has the following parameter(s):

crossword: an array of 10 strings of length 10 representing the empty grid
words: a string consisting of semicolon delimited strings to fit into crossword

 */

function crosswordPuzzle(crossword, words) {
    words = words.split(';');

    const canPlaceHorizontally = (crossword, word, row, col) => {
        if (col + word.length > 10) return false;
        for (let i = 0; i < word.length; i++) {
            if (crossword[row][col + i] !== '-' && crossword[row][col + i] !== word[i]) {
                return false;
            }
        }
        return true;
    };

    const placeHorizontally = (crossword, word, row, col) => {
        let original = crossword[row].split('');
        for (let i = 0; i < word.length; i++) {
            original[col + i] = word[i];
        }
        crossword[row] = original.join('');
    };

    const removeHorizontally = (crossword, word, row, col) => {
        for (let i = 0; i < word.length; i++) {
            crossword[row] = crossword[row].substring(0, col + i) + '-' + crossword[row].substring(col + i + 1);
        }
    };

    const canPlaceVertically = (crossword, word, row, col) => {
        if (row + word.length > 10) return false;
        for (let i = 0; i < word.length; i++) {
            if (crossword[row + i][col] !== '-' && crossword[row + i][col] !== word[i]) {
                return false;
            }
        }
        return true;
    };

    const placeVertically = (crossword, word, row, col) => {
        for (let i = 0; i < word.length; i++) {
            crossword[row + i] = crossword[row + i].substring(0, col) + word[i] + crossword[row + i].substring(col + 1);
        }
    };

    const removeVertically = (crossword, word, row, col) => {
        for (let i = 0; i < word.length; i++) {
            crossword[row + i] = crossword[row + i].substring(0, col) + '-' + crossword[row + i].substring(col + 1);
        }
    };

    const solve = (crossword, words, index) => {
        if (index === words.length) return true;

        const word = words[index];

        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                if (canPlaceHorizontally(crossword, word, row, col)) {
                    placeHorizontally(crossword, word, row, col);
                    if (solve(crossword, words, index + 1)) {
                        return true;
                    }
                    removeHorizontally(crossword, word, row, col);
                }

                if (canPlaceVertically(crossword, word, row, col)) {
                    placeVertically(crossword, word, row, col);
                    if (solve(crossword, words, index + 1)) {
                        return true;
                    }
                    removeVertically(crossword, word, row, col);
                }
            }
        }
        return false;
    };

    solve(crossword, words, 0);
    return crossword;
}
