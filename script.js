const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}

// listen for click on generate button
generateEl.addEventListener("click", () => {
    // get value of lengthEl (+ in front parses it to number)
    const length = +lengthEl.value;
    // determine if boxes are checked (boolean)
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    // call generate password and return results in resultEl
    resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length)
})


function generatePassword(upper, lower, number, symbol, length) {
    let generatedPassword = "";
    // get number of boxes checked
    const typesCount = upper + lower + number + symbol;
    // get array of objects with type: boolean
    const typesArr = [{upper}, {lower}, {number}, {symbol}];
    // filter typesArr to only items that have value (true)
    const filteredTypesArr = typesArr.filter(item => Object.values(item)[0]);
    // return nothing if no boxes are checked
    if (typesCount === 0) {
        return "";
    }

    // iterate through types 
    for (let i = 0; i < length; i+= typesCount) {
        // for each type checked
        filteredTypesArr.forEach(type => {
            // get the type name
            const funcName = Object.keys(type)[0];
            // append randomFunc with index of funcName and () to call function
            generatedPassword += randomFunc[funcName]();
        })
    }
    // gets all characters from generatedPassword
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword
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
