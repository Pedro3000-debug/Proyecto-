$(document).ready(function(){
    $('#btnEnviar').click(function(){
        
    var errores = '';

    if( $('#names').val() == ''){
        errores += '<p><img src="imagenes/error.png">Escriba un nombre y un apellido</p>';
        $('#names').css("border-bottom-color", "#F14B4B")
     }else{
      $('#names').css("border-bottom-color", "#d1d1d1")
   }
     if( $('#email').val() == ''){
        errores += '<p><img src="imagenes/error.png">Ingrese un correo</p>';
        $('#email').css("border-bottom-color", "#F14B4B")
     }else{
      $('#email').css("border-bottom-color", "#d1d1d1")
     }
     if( $('#Direccion').val() == ''){
        errores += '<p><img src="imagenes/error.png">Escriba su direccion</p>';
        $('#Direccion').css("border-bottom-color", "#F14B4B")
     }else{
      $('#Direccion').css("border-bottom-color", "#d1d1d1")
     }
     if( errores == '' == false){
         var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">' +
                                      '<h3>Errores Encontrados</h3>'+
                                       errores+
                                       '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+   
                             '</div>'
        $('body').append(mensajeModal);
     }
      $('#btnClose').click(function(){
         $('.modal_wrap').remove(); 
      });
    });
});