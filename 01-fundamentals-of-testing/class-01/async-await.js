const { sumAsync, subtractAsync } = require('../math');

test('sumAsync adds numbers', async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test('subtractAsync subtracts numbers', async () => {
  const result = await subtractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

async function test(title, callback) {
  try {
    await callback();
    console.log(`Ok: ${title}`)
  } catch (error) {
    console.error(`Don't ok: ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        console.error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}