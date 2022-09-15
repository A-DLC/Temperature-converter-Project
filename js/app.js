const inputEl = document.querySelector(".input");
const outputEl = document.querySelector(".output");
const formulaEl = document.querySelector(".formula");

let fromUnit = "kelvin";
let toUnit = "celsius";

//temp converter
const tempConverter = () => {
  //values from input
  const inputValue = inputEl.value;
  const outputValue = outputEl.value;

  //get unit
  fromUnit = document.querySelector(".fromUnit").value;
  toUnit = document.querySelector(".toUnit").value;

  //result
  let result = 0;
  let formula = "";

  //convert from C° to °F
  if (fromUnit === "celsius" && toUnit === "fahrenheit") {
    //check if there is input value
    if (inputValue) {
      result = parseFloat(inputValue) * 1.8 + 32;
      formula = `${inputValue} °C = ${result}°F`;

      //convert to 1 decimal
      result = result.toFixed(1);
      formulaEl.innerHTML = formula;
    }
  }

  //convert from C° to °K
  if (fromUnit === "celsius" && toUnit === "kelvin") {
    //check if there is input value
    if (inputValue) {
      result = parseFloat(inputValue) + 273.15;
      formula = `${inputValue} °C = ${result}°K`;

      //convert to 1 decimal
      result = result.toFixed(1);
      formulaEl.innerHTML = formula;
    }
  }

  //convert from F° to °C
  if (fromUnit === "fahrenheit" && toUnit === "celsius") {
    //check if there is input value
    if (inputValue) {
      result = parseFloat((inputValue - 32) * 5) / 9;
      formula = `${inputValue} °F = ${result}°C`;

      //convert to 1 decimal
      result = result.toFixed(1);
      formulaEl.innerHTML = formula;
    }
  }

  //convert from F° to °C
  if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
    //check if there is input value
    if (inputValue) {
      result = parseFloat((inputValue - 32) * 1.8 + 273.15);
      formula = `${inputValue} °F = ${result}°K`;

      //convert to 1 decimal
      result = result.toFixed(1);
      formulaEl.innerHTML = formula;
    }
  }

  //convert from °K to °C
  if (fromUnit === "kelvin" && toUnit === "celsius") {
    //check if there is input value
    if (inputValue) {
      result = parseFloat(inputValue - 273.15);
      formula = `${inputValue} °K = ${result}°C`;

      //convert to 1 decimal
      result = result.toFixed(1);
      formulaEl.innerHTML = formula;
    }
  }

  //convert from °K to °F
  if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
    //check if there is input value
    if (inputValue) {
      result = (parseFloat(inputValue) - 273.15) * 1.8 + 32;
      formula = `${inputValue} °K = ${result}°F`;

      //convert to 1 decimal
      result = result.toFixed(1);
      formulaEl.innerHTML = formula;
    }
  }
};

//call the fn when input is changed

inputEl.addEventListener("input", () => {
  //temp converter
  tempConverter();
});

//call the fn when select option change

document.querySelector(".toUnit").addEventListener("input", () => {
  tempConverter();
});
