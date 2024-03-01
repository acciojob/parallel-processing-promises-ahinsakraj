//your JS code here. If required.
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const outputDiv = document.getElementById("output");
const submitBtn = document.getElementById("btn");

submitBtn.addEventListener("click", async () => {
  const text = textInput.value;
  const delay = parseInt(delayInput.value);

  outputDiv.innerText = "";

  if (text.trim() === "" || isNaN(delay) || delay <= 0) {
    outputDiv.innerText = "Please enter valid text and delay";
    return;
  }

  submitBtn.disabled = true;
  await delayFunction(delay);
  outputDiv.innerText = text;
  submitBtn.disabled = false;
});

function delayFunction(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}