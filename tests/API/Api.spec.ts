import { test, expect } from '@playwright/test';

test.describe('API Automation Tests', () => {

  test('GET - Verify user details', async ({ request }) => {

    const response = await request.get(
      'https://jsonplaceholder.typicode.com/users/1'
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(1);

    expect(responseBody.name).toBeTruthy();

    expect(responseBody.email).toContain('@');

    console.log(responseBody);

  });

  test('GET - Verify all products-like records', async ({
    request
  }) => {

    const response = await request.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.length).toBeGreaterThan(0);

  });

  test('POST - Create a test record', async ({ request }) => {

    const response = await request.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        data: {
          title: 'Flipkart Automation',
          body: 'Playwright API testing',
          userId: 1
        }
      }
    );

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    expect(responseBody.title).toBe(
      'Flipkart Automation'
    );

  });

});