if (window.innerWidth < 768) {
	[].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach(function (elem) {
	  elem.classList.remove('animated');
	  elem.removeAttribute('data-bss-hover-animate');
	  elem.removeAttribute('data-aos');
	  elem.removeAttribute('data-bss-parallax-bg');
	  elem.removeAttribute('data-bss-scroll-zoom');
	});
  }
  
  document.addEventListener('DOMContentLoaded', function() {
	if ('AOS' in window) {
	  AOS.init();
	}
  }, false);
  
  // Función para encriptar o desencriptar el texto
  function encriptarTexto() {
	var texto = document.getElementById('input-text').value;
  
	// Reemplazar las letras según las reglas especificadas
	texto = texto.replace(/e/g, 'enter');
	texto = texto.replace(/i/g, 'imes');
	texto = texto.replace(/a/g, 'ai');
	texto = texto.replace(/o/g, 'ober');
	texto = texto.replace(/u/g, 'ufat');
  
	// Mostrar el texto encriptado/desencriptado en el área de texto
	document.getElementById('output-text').value = texto;
  }
  
  // Asignar el evento al botón "Encriptar"
  document.getElementById('btn-encriptar').addEventListener('click', encriptarTexto);

  document.getElementById('btn-desencriptar-1').addEventListener('click', function() {
	var outputText = document.getElementById('output-text');
	
	// Seleccionar el texto dentro del área de texto
	outputText.select();
	outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
  
	// Copiar el texto al portapapeles
	document.execCommand('copy');
  
	// Deseleccionar el texto
	window.getSelection().removeAllRanges();
  });

  function desencriptarTexto() {
	var texto = document.getElementById('input-text').value;
  
	// Revertir los reemplazos para desencriptar el texto
	texto = texto.replace(/enter/g, 'e');
	texto = texto.replace(/imes/g, 'i');
	texto = texto.replace(/ai/g, 'a');
	texto = texto.replace(/ober/g, 'o');
	texto = texto.replace(/ufat/g, 'u');
  
	// Mostrar el texto desencriptado en el área de texto
	document.getElementById('output-text').value = texto;
  }
  
  // Asignar el evento al botón "Desencriptar"
  document.getElementById('btn-desencriptar').addEventListener('click', desencriptarTexto);
  
  
  

  