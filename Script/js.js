function todo_change() {
  const image = document.getElementById('arrow_1');
  const text = document.getElementById('todo');
  if (image.src.match('down')) {
    image.src = 'img/up.png';
    text.style.height = '100%';
  } else {
    image.src = 'img/down.png';
    text.style.height = '73px';
  }
}

function bike_booking() {
  const image = document.getElementById('arrow_2');
  const text = document.getElementById('bike_booking');
  if (image.src.match('down')) {
    image.src = 'img/up.png';
    text.style.height = '100%';
  } else {
    image.src = 'img/down.png';
    text.style.height = '73px';
  }
}

function food_list() {
  const image = document.getElementById('arrow_3');
  const text = document.getElementById('food_list');
  if (image.src.match('down')) {
    image.src = 'img/up.png';
    text.style.height = '100%';
  } else {
    image.src = 'img/down.png';
    text.style.height = '73px';
  }
}
