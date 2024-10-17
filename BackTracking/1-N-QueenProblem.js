const solveNQueens = (n) => {
    const result = [];
    
    // Helper function to check if a position is safe for a queen
    const isSafe = (row, col, board, n) => {
        // Check column conflict
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }

        // Check top-left diagonal conflict
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }

        // Check top-right diagonal conflict
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }

        return true;
    };

    // Helper function to solve N-Queens problem using backtracking
    const solve = (row, board, n) => {
        // If all queens are placed
        if (row === n) {
            const copy = board.map(r => r.join('')); // Convert 2D board to string array
            result.push(copy);
            return;
        }

        // Try placing a queen in each column
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col, board, n)) {
                // Place the queen
                board[row][col] = 'Q';

                // Move to the next row
                solve(row + 1, board, n);

                // Backtrack (remove the queen)
                board[row][col] = '.';
            }
        }
    };

    // Initialize the chessboard with empty spaces
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    // Start the backtracking process
    solve(0, board, n);

    return result;
};

console.log(solveNQueens(4));
