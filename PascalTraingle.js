function generatePascalsTriangle(numRows) {
    const triangle = [];

    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1); // Create a row with all elements initialized to 1

        for (let j = 1; j < row.length - 1; j++) {
            // Each element is the sum of the two elements above it
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        triangle.push(row);
    }

    return triangle;
}
