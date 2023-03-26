//your JS code here. If required.
function sayHello() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve("Hello, world!");
          }, 1000);
        });
      }

      sayHello().then(message => {
        const outputDiv = document.getElementById("output");
        outputDiv.textContent = message;
      });
