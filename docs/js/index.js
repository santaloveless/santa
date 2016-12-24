var nav = document.querySelector('.nav');
var project = document.querySelector('#project');
var about = document.querySelector('#about');
var pages = document.querySelector('.pages');

nav.addEventListener('click', function(e) {
  if (e.target.id === 'project') {
    pages.style.marginLeft = '0';
    project.classList.add('selected');
    about.classList.remove('selected');
  } else {
    pages.style.marginLeft = '-100%';
    project.classList.remove('selected');
    about.classList.add('selected');
  }
}, false);
