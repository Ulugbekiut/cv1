const matrix = [
    [0, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 1]
];

const leftMostColumnWithOne = (binaryMatrix) => {
    let res =-1;
    let numRowS =binaryMatrix.length;
    let numColumns = binaryMatrix[0].length;


    for (let row =0,  col= numColumns-1; col >=0 && row<numRowS;){
        if(binaryMatrix[row][col]===1){
            res = col;
            col--
        } 
        else {
            row++
        }
    }
    return res

}
console.log(leftMostColumnWithOne(matrix))