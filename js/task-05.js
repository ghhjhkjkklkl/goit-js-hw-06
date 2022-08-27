const input = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");


input.oninput = () => {
  input.value === '' ? 'Anonymous' : nameOutput.innerHTML = input.value;
};
























