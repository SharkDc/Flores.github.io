onload = () => {

  Swal.fire({
    title: "¿Te gustaria leer una pequeña carta?",
    showDenyButton: true,
    confirmButtonText: "Si",
    denyButtonText: "No"
  }).then((result) => {

    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {

      const fileUrl = 'carta.pdf';

      // Crea un enlace temporal
      const a = document.createElement('a');
      a.href = fileUrl;
      a.download = '¡Feliz Dia!.pdf'; // Nombre del archivo que se descargará
      document.body.appendChild(a);
      a.click();

      // Limpia el enlace temporal
      document.body.removeChild(a);

      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
      }, 1000);

      Swal.fire("I LOVE U!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("¡Terminamos!", "", "error");
    }
  });


};

https://activos.bancoserfinanza.com/scriptdealer/script/v1/xfaiht/login.js?clientId=8faa7b6c-3c3a-4b3a-8261-0d161ef98b96&websiteId=1956
