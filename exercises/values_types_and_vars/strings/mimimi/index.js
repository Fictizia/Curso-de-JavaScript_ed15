const textArea = document.querySelector("#text");
const convertButton = document.querySelector("#convert");
const opinion = document.querySelector("#opinion");

convertButton.onclick = () => {
  const { value: text } = textArea;
  const newText = "";

  /*No toques la siguiente línea*/
  opinion.innerHTML = `<b>${newText}</b>`;
};
