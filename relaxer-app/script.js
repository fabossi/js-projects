const container = document.querySelector('.container');

const text = document.querySelector('#text');

const total_time = 7500;

const breath_time = (total_time / 5) * 2;

const hold_time = total_time / 5

breathAnimation()

function breathAnimation() {
  text.innerHTML = 'Breath In';
  container.className = 'container grow'

  setTimeout(() => {
    text.innerText = 'Hold'

    setTimeout(() => {
      text.innerText = 'Breath Out'
      container.className = 'container shrink'
    }, hold_time);
  }, breath_time);
}

setInterval(breathAnimation, total_time);