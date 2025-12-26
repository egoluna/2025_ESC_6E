// Animación simple al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.querySelector(".contenedor");
    contenedor.classList.add("animar");
  
    // Ejemplo de pequeña interactividad:
    // mostrar un mensaje emergente al pasar por la foto
    const foto = document.querySelector(".foto-perfil");
    foto.addEventListener("mouseenter", () => {
      foto.style.transform = "scale(1.05)";
    });
    foto.addEventListener("mouseleave", () => {
      foto.style.transform = "scale(1)";
    });
  });
// Efecto de animación al cargar
document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.querySelector(".contenedor");
    contenedor.classList.add("animar");
  
    // Efecto al pasar por la foto
    const foto = document.querySelector(".foto-perfil");
    foto.addEventListener("mouseenter", () => {
      foto.style.transform = "scale(1.05)";
    });
    foto.addEventListener("mouseleave", () => {
      foto.style.transform = "scale(1)";
    });
  
    // --- INTERACTIVIDAD DEL ACORDEÓN ---
    const botones = document.querySelectorAll(".acordeon-btn");
  
    botones.forEach(btn => {
      btn.addEventListener("click", () => {
        const contenido = btn.nextElementSibling;
  
        // Cerrar los demás acordeones
        document.querySelectorAll(".acordeon-contenido").forEach(c => {
          if (c !== contenido) {
            c.classList.remove("activo");
          }
        });
  
        // Alternar visibilidad del actual
        contenido.classList.toggle("activo");
      });
    });
  });

//Para carrusel
  const imgs = document.querySelectorAll(".carousel img");
  let i = 0;

  function nextImg() {
    imgs[i].classList.remove("active");
    i = (i + 1) % imgs.length;
    imgs[i].classList.add("active");
  }

  setInterval(nextImg, 3000); // cambia cada 3 segundos
    