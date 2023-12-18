const fs = require("fs");

// create a file named "welcome.txt" containing one line "Hello Node".
fs.writeFile("welcome.txt", "Hello Node", function (err) {
  if (err) throw err;
  console.log("File created!");
});

// read and console.log data from hello.txt
fs.readFile("hello.txt", function (err, data) {
  if (err) throw err;
  console.log(data.toString());
});
