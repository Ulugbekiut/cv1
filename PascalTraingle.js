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


var removeElement = function(nums, val) {
    while(nums.indexOf(val) !== -1) {
        nums.splice(nums.indexOf(val), 1)
    }
    return nums.length;
}

function isIsomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const mapS = {};
    const mapT = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if ((mapS[charS] && mapS[charS] !== charT) || (mapT[charT] && mapT[charT] !== charS)) {
            return false;
        }

        mapS[charS] = charT;
        mapT[charT] = charS;
    }

    return true;
}