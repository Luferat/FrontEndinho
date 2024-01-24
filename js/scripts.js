app = {
  'siteName': 'FrontEndinho',
  'siteSlogan': 'É muito "inho" pro meu gosto!!!',
}

function loadFile(fileName, targetElement) {
  fetch(fileName)
    .then(response => response.text())
    .then(content => {
      document.querySelector(targetElement).innerHTML = content;
    })
}

function changeTitle(newTitle = '') {
  if (newTitle == '') newTitle = app.siteSlogan;
  document.querySelector('title').innerHTML = `${app.siteName} &centerdot;:&centerdot; ${newTitle}`;
}

window.addEventListener('DOMContentLoaded', () => {
  loadFile('_header.html', 'header');
  loadFile('_nav.html', 'nav');
  loadFile('_footer.html', 'footer');
});
