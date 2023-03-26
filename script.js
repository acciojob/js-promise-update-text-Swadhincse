//your JS code here. If required.
function delayedHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    };
  });
}
