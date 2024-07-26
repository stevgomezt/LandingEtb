var modalModeloCX = document.getElementById('myModalModeloCX');
var modalDialogModeloCX = document.querySelector('.modal-dialog');
var galleryImgModeloCX = document.getElementById('galleryImgModeloCX');
var imageContainerModeloCX = document.getElementById('imageContainerModeloCX');
var imagesModeloCX = [
  "/assets/img/slides/modeloCX1.png",
  "/assets/img/slides/modeloCX2.png",
  "/assets/img/slides/modeloCX3.png"
];
var currentIndex = 0;

document.getElementById("openModalBtnModeloCX").onclick = function () {
  $('#myModalModeloCX').modal('show');
}

function adjustModalSizeModeloCX() {
  var imgWidth = galleryImgModeloCX.naturalWidth;
  var imgHeight = galleryImgModeloCX.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerModeloCX.style.maxWidth = maxWidth + 'px';
  imageContainerModeloCX.style.maxHeight = maxHeight + 'px';
  modalDialogModeloCX.style.maxWidth = maxWidth + 'px';
  modalDialogModeloCX.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnModeloCX").onclick = function () {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : imagesModeloCX.length - 1;
  galleryImgModeloCX.src = imagesModeloCX[currentIndex];
  adjustModalSizeModeloCX();
}

document.getElementById("nextBtnModeloCX").onclick = function () {
  currentIndex = (currentIndex < imagesModeloCX.length - 1) ? currentIndex + 1 : 0;
  galleryImgModeloCX.src = imagesModeloCX[currentIndex];
  adjustModalSizeModeloCX();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalModeloCX').on('shown.bs.modal', function () {
  adjustModalSizeModeloCX();
});