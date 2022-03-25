const imagess = [
  { 'id': '1', 'url': '../img/slideShow/1.jpg' },
  { 'id': '2', 'url': '../img/slideShow/2.jpg' },
  { 'id': '3', 'url': '../img/slideShow/3.jpg' },
  { 'id': '4', 'url': '../img/slideShow/4.jpg' },
  { 'id': '5', 'url': '../img/slideShow/5.png' },
  { 'id': '6', 'url': '../img/paleta-de-cores-para-tecnologia.jpg' },
  { 'id': '1', 'url': '../img/slideShow/1.jpg' },
  { 'id': '2', 'url': '../img/slideShow/2.jpg' },
  { 'id': '3', 'url': '../img/slideShow/3.jpg' },
  { 'id': '4', 'url': '../img/slideShow/4.jpg' },
  { 'id': '5', 'url': '../img/slideShow/5.png' },
  { 'id': '6', 'url': '../img/paleta-de-cores-para-tecnologia.jpg' },
];

const novaImajens = document.querySelector('.flex');

const loadImages = (imagess, container) => {
  imagess.forEach(image => {
    container.innerHTML += `
    <div> <img src='${image.url}' </div>  
    `;
  })
}
loadImages(imagess, novaImajens);