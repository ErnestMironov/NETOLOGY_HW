const editor = document.querySelector('#editor');
const boldBtn = document.querySelector('#boldBtn');
const italicBtn = document.querySelector('#italicBtn');
const clearBtn = document.querySelector('#clearBtn');

document.addEventListener('DOMContentLoaded', () => {
  const savedContent = localStorage.getItem('editorContent');
  if (savedContent) {
    editor.innerHTML = savedContent;
  }
});

editor.addEventListener('input', () => {
  localStorage.setItem('editorContent', editor.innerHTML);
});

boldBtn.addEventListener('click', () => {
  document.execCommand('bold', false, null);
  boldBtn.classList.toggle('active');
  editor.focus();
});

italicBtn.addEventListener('click', () => {
  document.execCommand('italic', false, null);
  italicBtn.classList.toggle('active');
  editor.focus();
});

clearBtn.addEventListener('click', () => {
  editor.innerHTML = '';
  localStorage.removeItem('editorContent');
  boldBtn.classList.remove('active');
  italicBtn.classList.remove('active');
  editor.focus();
}); 