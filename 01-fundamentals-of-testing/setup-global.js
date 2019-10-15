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

global.test = test;
global.expect = expect;