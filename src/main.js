import './style.css';

document.querySelector('#app').innerHTML = `
  <main class="counter-app" aria-labelledby="title">
    <p class="eyebrow">VANILLA / VITE</p>
    <h1 id="title">カウンター</h1>
    <p class="description">ボタンを押して数を調整してください。</p>
    <output id="count" class="count" aria-live="polite">0</output>
    <div class="controls" aria-label="カウンター操作">
      <button id="decrease" type="button">減らす</button>
      <button id="reset" class="secondary" type="button">リセット</button>
      <button id="increase" type="button">増やす</button>
    </div>
  </main>
`;

const countEl = document.querySelector('#count');
const decreaseButton = document.querySelector('#decrease');
const increaseButton = document.querySelector('#increase');
const resetButton = document.querySelector('#reset');
let count = 0;

const renderCount = () => {
  countEl.textContent = count;
  countEl.classList.toggle('is-negative', count < 0);
  countEl.classList.toggle('is-zero', count === 0);
};

increaseButton.addEventListener('click', () => {
  count += 1;
  renderCount();
});

decreaseButton.addEventListener('click', () => {
  count -= 1;
  renderCount();
});

resetButton.addEventListener('click', () => {
  count = 0;
  renderCount();
});