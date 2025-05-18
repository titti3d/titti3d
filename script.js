window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('intro-logo').style.display = 'none';
  }, 2200); // tiene que durar apenas un poco más que la animación (2s)
});

// Loader
window.onload = () => {
  document.getElementById('loader').style.display = 'none';
};

// Carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
actualizarCarrito();

function agregarAlCarrito(producto) {
  carrito.push(producto);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarCarrito();
}

function actualizarCarrito() {
  document.getElementById('contador-carrito').textContent = carrito.length;
}

// Lightbox
document.querySelectorAll('.galeria-item').forEach(img => {
  img.addEventListener('click', () => {
    document.getElementById('imagen-lightbox').src = img.src;
    document.getElementById('lightbox').style.display = 'flex';
  });
});

document.getElementById('cerrar-lightbox').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none';
});

// Formulario
function enviarFormulario(e) {
  e.preventDefault();
  document.getElementById('mensaje-formulario').textContent = '¡Mensaje enviado correctamente!';
  e.target.reset();
}
