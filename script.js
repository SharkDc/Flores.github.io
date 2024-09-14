onload = () => {

  Swal.fire({
    title: '¿Estás seguro?',
    text: "Esta acción no se puede deshacer",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, bórralo'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Borrado!', 'Tu archivo ha sido borrado.', 'success')
    }
  })
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('downloadBtn').addEventListener('click', () => {
        // URL del archivo ya creado en el servidor
        const fileUrl = 'tu-carta.txt';

        // Ejemplo básico
        Swal.fire('Hola', 'Este es un mensaje de ejemplo', 'info');
        // Crea un enlace temporal
        const a = document.createElement('a');
        a.href = fileUrl;
        a.download = '¡Feliz Dia!.txt'; // Nombre del archivo que se descargará
        document.body.appendChild(a);
        a.click();

        // Limpia el enlace temporal
        document.body.removeChild(a);
    });
});

