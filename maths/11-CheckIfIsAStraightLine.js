/**
Code
Testcase
Test Result
Test Result
1232. Check If It Is a Straight Line
Easy
Topics
Companies
Hint
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] 
represents the coordinate of a point. Check if these points make a straight line in the XY plane.
 */

const checkStraightLine = (coordinates) => {

    let x1 = coordinates[0][0]
    let y1 = coordinates[0][1]
    let x2 = coordinates[1][0]
    let y2 = coordinates[1][1]

    for (let i = 2; i < coordinates.length; i++) {
        let x3 = coordinates[i][0]
        let y3 = coordinates[i][1]

        let slope = (y2 - y1) / (x2 - x1)
        let newSlope = (y3 - y1) / (x3 - x1)

        if (slope != newSlope) return false
    }
    return true
}
// console.log(checkStraightLine([[1,2],[2,3],[3,4]])); 


const checkStraightLineS = (c) => {
    const xMove = c[1][0] - c[0][0]
    const yMove = c[1][1] - c[0][1]

    for (let i = 1; i < c.length; i++) {
        const x = c[i][0] - c[i - 1][0]
        const y = c[i][1] - c[i - 1][1]

        if (y * xMove !== x * yMove)
            return false
    }
    return true
}

console.log(checkStraightLineS([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]))