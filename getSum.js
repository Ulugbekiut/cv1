function getSum(a, b) {
    while (b !== 0) {
        // Calculate the carry (common set bits of a and b)
        const carry = a & b;

        // Sum of bits of a and b where at least one of the bits is not set
        a = a ^ b;
    console.log( "a: " + a)
        // Carry is shifted by one so that adding it to a gives the correct sum
        b = carry << 1;
    }

    return a;
}

// Example usage:
const num1 = 3;
const num2 = 5;
const result = getSum(num1, num2);
console.log(result); // Output: 8
