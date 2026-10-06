// JavaScript
btn.addEventListener('click', () => {
  // bodyにクラス名を付ける、または外す
  document.body.classList.toggle('black');
  // テキストを書き換える
  // もし、bodyにクラス名blackがついていたら
  if (document.body.classList.contains('black')) {
    text.textContent = 'Dark mode';
  } else {
    text.textContent = 'Light mode';
  }
});