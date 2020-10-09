const textInput = document.querySelector("#text");
const result = document.querySelector("#result");

textInput.oninput = (event) => {
  const text = event?.target?.value || "";
  result.innerHTML = "";
};
