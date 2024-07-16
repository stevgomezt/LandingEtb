var modal = document.getElementById('myModalMapas');
var modalDialog = document.querySelector('.modal-dialog');
var galleryImgMapas = document.getElementById('galleryImgMapas');
var imageContainerMapas = document.getElementById('imageContainerMapas');
var imagesMapas = [
  "/assets/img/slides/mapa1.jpg"
];
var currentIndex = 0;

document.getElementById("openModalBtnMapas").onclick = function () {
  $('#myModalMapas').modal('show');
}

function adjustModalSize() {
  var imgWidth = galleryImgMapas.naturalWidth;
  var imgHeight = galleryImgMapas.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerMapas.style.maxWidth = maxWidth + 'px';
  imageContainerMapas.style.maxHeight = maxHeight + 'px';
  modalDialog.style.maxWidth = maxWidth + 'px';
  modalDialog.style.maxHeight = maxHeight + 'px';
}

// document.getElementById("prevBtnMapas").onclick = function () {
//   currentIndex = (currentIndex > 0) ? currentIndex - 1 : imagesMapas.length - 1;
//   galleryImgMapas.src = imagesMapas[currentIndex];
//   adjustModalSize();
// }

// document.getElementById("nextBtnMapas").onclick = function () {
//   currentIndex = (currentIndex < imagesMapas.length - 1) ? currentIndex + 1 : 0;
//   galleryImgMapas.src = imagesMapas[currentIndex];
//   adjustModalSize();
// }

// Ajustar el tamaño del modal cuando se muestra
$('#myModalMapas').on('shown.bs.modal', function () {
  adjustModalSize();
});