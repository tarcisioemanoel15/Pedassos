/*Dessa forma ja adiciona imagens no html
let fotos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.png"];
let legenda = ["1LEGENDA", "2LEGENDA", "3LEGENDA", "4LEGENDA", "5LEGENDA"];

document.querySelector('.imagem-banner').src = "img/" + fotos[0];
document.querySelector('.legenda').innerText = legenda[0];
*/

let fotos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.png"];
let legenda = ["1LEGENDA", "2LEGENDA", "3LEGENDA", "4LEGENDA", "5LEGENDA"];

function TrocarFotos(foto) {
  document.querySelector('.imagem-banner').src = "img/" + fotos[foto];
  document.querySelector('.legenda').innerText = legenda[foto];
}

let fotoAtual = 0;
TrocarFotos(fotoAtual);

setInterval(() => {
  fotoAtual++;
  if (fotoAtual > 4) {
    fotoAtual = 0;
  }
  TrocarFotos(fotoAtual);

}, 5000);

document.querySelector('.banner').addEventListener('click', (e) => {

  const el = e.target;
  if (el.classList.contains('btFoto1')) TrocarFotos(0);
  if (el.classList.contains('btFoto2')) TrocarFotos(1);
  if (el.classList.contains('btFoto3')) TrocarFotos(2);
  if (el.classList.contains('btFoto4')) TrocarFotos(3);
  if (el.classList.contains('btFoto5')) TrocarFotos(4);

})