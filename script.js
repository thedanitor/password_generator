const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}


function getRandomUpper() {
  // use Math.floor(Math.random( ) *26) to get random number from 1 - 26
  // use String.fromCharCode to return character 65 + (1 through 26) to get any uppercase letter
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
  // use Math.floor(Math.random( ) *26) to get random number from 1 - 26
  // use String.fromCharCode to return character 97 + (1 through 26) to get any lowercase letter
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
  // use Math.floor(Math.random( ) *10) to get random number from 1 - 10
  // use String.fromCharCode to return character 48 + (1 through 10) to get any number
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}=<>/,.";
  // get random index from symbols
  return symbols[Math.floor(Math.random() * symbols.length)];
}
