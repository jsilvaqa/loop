const { test, expect } = require('@playwright/test');

test('find two numbers that add up to k', async () => {

    const numbers = [12, 5, 17, 4, 19, 6, -11];
    const k = 36;

    let result = [];

    // Loop through array
    for (let i = 0; i < numbers.length; i++) {

        for (let j = i + 1; j < numbers.length; j++) {

            // Check if pair adds up to k
            if (numbers[i] + numbers[j] === k) {

                result = [numbers[i], numbers[j]];

            }
        }
    }

    console.log('Matching numbers:', result);

    // Validate result
    expect(result).toEqual([17, 19]);

});