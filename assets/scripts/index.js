const inputBox = document.getElementById("outputbox");
let outputText = "";
let outputExpression = "";

function getValue(value) {
	outputExpression += value;
	switch(value) {
		case "/":
			value = "÷";
		break;
		case "*":
			value = "×";
		break;
		case "-":
			value = "−";
		break
		default:
			value = value;
	}
	outputText += value;
	inputBox.value = outputText;
}

function clearBox() {
	outputText = "";
	outputExpression = "";
	inputBox.value = "0";
}

function calculate() {
	let result = eval(outputExpression);
	inputBox.value = result;
}