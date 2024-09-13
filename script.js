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

        // Crea un enlace temporal
        const a = document.createElement('a');
        a.href = fileUrl;
        a.download = 'archivo.txt'; // Nombre del archivo que se descargará
        document.body.appendChild(a);
        a.click();

        // Limpia el enlace temporal
        document.body.removeChild(a);
    });
});

