

const images = [
  { 'id': '1', 'url': './img/1.jpg' },
  { 'id': '2', 'url': './img/2.jpg' },
  { 'id': '3', 'url': './img/3.jpg' },
  { 'id': '4', 'url': './img/4.jpg' },
  { 'id': '5', 'url': './img/5.png' }

]

const containerItems = document.querySelector('#container-items');


const loadImages = (images, container) => {

  images.forEach(image => {
    container.innerHTML += `
  <div class='item'>
    <img src='${image.url}'
  </div>  
  `

  })
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');
const previous = () => {
  /* appendChild é usado pro final*/
  containerItems.appendChild(items[0]);
  items = document.querySelectorAll('.item');
}


const next = () => {
  /* inserir o anteriorl*/
  const lastItem = items[items.length - 1];
  containerItems.insertBefore(lastItem, items[0]);
  items = document.querySelectorAll('.item');
}


document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);

