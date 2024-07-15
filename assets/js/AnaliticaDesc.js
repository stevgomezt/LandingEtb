var modalAnaliticaDesc = document.getElementById('myModalAnaliticaDesc');
var videoAnaliticaDesc = document.getElementById('videoAnaliticaDesc');

document.getElementById("openModalBtnAnaliticaDesc").onclick = function () {
  $('#myModalAnaliticaDesc').modal('show');
  videoAnaliticaDesc.play(); // Iniciar la reproducción del video al abrir el modal
}

$('#myModalAnaliticaDesc').on('hidden.bs.modal', function () {
  videoAnaliticaDesc.pause();
  videoAnaliticaDesc.currentTime = 0;
});