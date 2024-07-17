// AnaliticaDesc Modal
var modalAnaliticaDesc = document.getElementById('myModalAnaliticaDesc');
var modalDAnaliticaDesclogAnaliticaDesc = modalAnaliticaDesc.querySelector('.modal-dAnaliticaDesclog');
var galleryImgAnaliticaDesc = document.getElementById('galleryImgAnaliticaDesc');
var imageContainerAnaliticaDesc = document.getElementById('imageContainerAnaliticaDesc');
var imagesAnaliticaDesc = [
  "/assets/img/slides/analiticaDesc1.jpg",
  "/assets/img/slides/analiticaDesc2.jpg",
  "/assets/img/slides/analiticaDesc3.jpg"
];
var currentIndexAnaliticaDesc = 0;

document.getElementById("openModalBtnAnaliticaDesc").onclick = function () {
  $('#myModalAnaliticaDesc').modal('show');
}

function adjustModalSizeAnaliticaDesc() {
  var imgWidth = galleryImgAnaliticaDesc.naturalWidth;
  var imgHeight = galleryImgAnaliticaDesc.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerAnaliticaDesc.style.maxWidth = maxWidth + 'px';
  imageContainerAnaliticaDesc.style.maxHeight = maxHeight + 'px';
  modalDAnaliticaDesclogAnaliticaDesc.style.maxWidth = maxWidth + 'px';
  modalDAnaliticaDesclogAnaliticaDesc.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnAnaliticaDesc").onclick = function () {
  currentIndexAnaliticaDesc = (currentIndexAnaliticaDesc > 0) ? currentIndexAnaliticaDesc - 1 : imagesAnaliticaDesc.length - 1;
  galleryImgAnaliticaDesc.src = imagesAnaliticaDesc[currentIndexAnaliticaDesc];
  adjustModalSizeAnaliticaDesc();
}

document.getElementById("nextBtnAnaliticaDesc").onclick = function () {
  currentIndexAnaliticaDesc = (currentIndexAnaliticaDesc < imagesAnaliticaDesc.length - 1) ? currentIndexAnaliticaDesc + 1 : 0;
  galleryImgAnaliticaDesc.src = imagesAnaliticaDesc[currentIndexAnaliticaDesc];
  adjustModalSizeAnaliticaDesc();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalAnaliticaDesc').on('shown.bs.modal', function () {
  adjustModalSizeAnaliticaDesc();
});
