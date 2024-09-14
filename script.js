onload = () => {
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

