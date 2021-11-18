function todo_change() {
  const image = document.getElementById('arrow_1');
  const text = document.getElementById('todo');
  const more = document.getElementById('show_1');
  if (image.src.match('down')) {
    image.src = 'img/up.png';
    text.style.height = '100%';
    more.innerHTML = 'Show less';
  } else {
    image.src = 'img/down.png';
    text.style.height = '73px';
    more.innerHTML = 'Show more';
  }
}

function bike_booking() {
  const image = document.getElementById('arrow_2');
  const text = document.getElementById('bike_booking');
  const more = document.getElementById('show_2');

  if (image.src.match('down')) {
    image.src = 'img/up.png';
    text.style.height = '100%';
    more.innerHTML = 'Show less';
  } else {
    image.src = 'img/down.png';
    text.style.height = '73px';
    more.innerHTML = 'Show more';
  }
}

function food_list() {
  const image = document.getElementById('arrow_3');
  const text = document.getElementById('food_list');
  const more = document.getElementById('show_3');

  if (image.src.match('down')) {
    image.src = 'img/up.png';
    text.style.height = '100%';
    more.innerHTML = 'Show less';
  } else {
    image.src = 'img/down.png';
    text.style.height = '73px';
    more.innerHTML = 'Show more';
  }
}
