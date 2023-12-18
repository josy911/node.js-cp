const passwordGenerator = require("generate-password");

// To create a function that generates random passwords and console.log() that password
function generatePassword() {
  const password = passwordGenerator.generate({
    length: 10,
    numbers: true,
  });
  console.log(password);
}

generatePassword();
