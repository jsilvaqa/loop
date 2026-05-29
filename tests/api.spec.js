const { test, expect } = require('@playwright/test');

test('GET user details API test', async ({ request }) => {

    // Send API request
    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    // Verify HTTP status
    expect(response.status()).toBe(200);

    // Verify response is JSON
    expect(response.headers()['content-type'])
        .toContain('application/json');

    // Parse response body
    const body = await response.json();

    // Validate response data
    expect(body.id).toBe(1);
    expect(body.name).toBe('Leanne Graham');

    // Validate nested object fields
    expect(body.address.city).toBe('Gwenborough');

    // Validate email format
    expect(body.email).toContain('@');

    console.log('Response body:', body);

});