
function comerciall() {

  const fotos = ["1.jpg", "2.jpg", "3.jpg"];
  // const paragrafo = ["1img", "2img", "3img"];

  function fInicial(foto) {
    document.querySelector('.imgcomercial').src = 'img/slideShow/' + fotos[foto];
    // document.querySelector('.pr').innerText = paragrafo[foto];
  }

  let fotoInicial = 0;
  fInicial(fotoInicial);

  setInterval(() => {
    fotoInicial++;
    if (fotoInicial > 2) {

      fotoInicial = 0;
    }
    fInicial(fotoInicial);
  }, 3000)

  document.querySelector('.comercial').addEventListener('click', e => {
    const el = e.target;

    if (el.classList.contains('btnComer1')) fInicial(0);
    if (el.classList.contains('btnComer2')) fInicial(1);
    if (el.classList.contains('btnComer3')) fInicial(2);
  })
}

comerciall();

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
function muitasImgs() {

  const imagess = [
    { 'id': '1', 'url': './img/slideShow/1.jpg' },
    { 'id': '2', 'url': './img/slideShow/2.jpg' },
    { 'id': '3', 'url': './img/slideShow/3.jpg' },
    { 'id': '4', 'url': './img/slideShow/4.jpg' },
    { 'id': '5', 'url': './img/slideShow/5.png' },
    { 'id': '4', 'url': './img/paleta-de-cores-para-tecnologia.jpg' },


    { 'id': '1', 'url': './img/slideShow/1.jpg' },
    { 'id': '2', 'url': './img/slideShow/2.jpg' },
    { 'id': '3', 'url': './img/slideShow/3.jpg' },
    { 'id': '4', 'url': './img/slideShow/4.jpg' },
    { 'id': '5', 'url': './img/slideShow/5.png' },

    { 'id': '4', 'url': './img/paleta-de-cores-para-tecnologia.jpg' },

    { 'id': '1', 'url': './img/slideShow/1.jpg' },
    { 'id': '2', 'url': './img/slideShow/2.jpg' },
    { 'id': '3', 'url': './img/slideShow/3.jpg' },
    { 'id': '4', 'url': './img/paleta-de-cores-para-tecnologia.jpg' },
    { 'id': '5', 'url': './img/slideShow/5.png' },
    { 'id': '4', 'url': './img/paleta-de-cores-para-tecnologia.jpg' },

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
}
muitasImgs();


/**/