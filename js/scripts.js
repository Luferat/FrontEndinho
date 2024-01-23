function loadFile(fileName, targetElement) {
  fetch(fileName)
  .then(response => response.text())
  .then(content => {
    document.querySelector(targetElement).innerHTML = content;
  })
}
