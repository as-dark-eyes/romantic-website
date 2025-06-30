function goToPage2() {
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    localStorage.setItem('username', name);
    window.location.href = 'page2.html';
  } else {
    alert('Please enter your name!');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const name = localStorage.getItem('username');
  const loveMessage = document.getElementById('loveMessage');
  if (loveMessage && name) {
    loveMessage.innerHTML = `Do You Love Me, <span style="color:#ff1493">${name}</span>? ❤️`;
  }
});

function goToPage3() {
  window.location.href = 'page3.html';
}

function moveNoButton(btn) {
  const container = document.querySelector('.container');
  const maxX = container.offsetWidth - btn.offsetWidth;
  const maxY = container.offsetHeight - btn.offsetHeight;
  const randX = Math.floor(Math.random() * maxX);
  const randY = Math.floor(Math.random() * maxY);
  btn.style.position = 'absolute';
  btn.style.left = randX + 'px';
  btn.style.top = randY + 'px';
}
