function convertTemp() {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const from = document.getElementById("unitFrom").value;
  const resultBox = document.getElementById("result");

  if (isNaN(temp)) {
    resultBox.textContent = "Please enter a valid number.";
    return;
  }

  let result;

  if (from === "celsius") {
    result = `${(temp * 9 / 5 + 32).toFixed(2)} °F`;
  } else if (from === "fahrenheit") {
    result = `${((temp - 32) * 5 / 9).toFixed(2)} °C`;
  } else if (from === "kelvin") {
    result = `${(temp - 273.15).toFixed(2)} °C`;
  }

  resultBox.textContent = result;
}
