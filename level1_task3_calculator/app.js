function appendToDisplay(value) {
  const currentInput = document.forms["cacl"].text.value;

  // Clear display if the previous input resulted in an error
  if (currentInput === "Error") {
    document.forms["cacl"].text.value = "";
  }

  // Remove leading '0' only when typing the first digit
  if (currentInput === "0" && !"+-*/.%".includes(value)) {
    document.forms["cacl"].text.value = value;
  } else {
    document.forms["cacl"].text.value += value;
  }
}

function clearDisplay() {
  document.forms["cacl"].text.value = "0";
}

function del() {
  const currentInput = document.forms["cacl"].text.value;
  document.forms["cacl"].text.value = currentInput.substring(
    0,
    currentInput.length - 1
  );
  if (
    currentInput.length == 1 ||
    currentInput == "Error" ||
    currentInput.includes("Infinity")
  ) {
    document.forms["cacl"].text.value = "0";
  }
}

function calculateResult() {
  try {
    let expression = document.forms["cacl"].text.value;

    // Directly evaluate arithmetic expressions using JavaScript
    const result = eval(expression);

    document.forms["cacl"].text.value = result;
  } catch (error) {
    document.forms["cacl"].text.value = "Error";
  }
}

function toggleSign() {
    const currentValue = document.forms['cacl'].text.value;
    if (currentValue !== '0' && currentValue !== 'Error') {
        document.forms['cacl'].text.value = (parseFloat(currentValue) * -1).toString();
    }
}
