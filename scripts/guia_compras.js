const datosGuias = [
  {
    titulo: "Perfil Desarrollador",
    enfoque:
      "Estabilidad, multitarea pesada (contenedores Docker, máquinas virtuales, IDEs abiertos en simultáneo) y velocidad de lectura/escritura. No requiere potencia gráfica extrema salvo que se entrene modelos de IA localmente.",
    prioridades: [
      {
        titulo: "Memoria RAM",
        texto:
          "Es el cuello de botella más común. Mínimo 32 GB (ideal 64 GB si trabajas con contenedores, emuladores móviles o bases de datos locales).",
      },
      {
        titulo: "Procesador (CPU)",
        texto:
          "Se prioriza cantidad de núcleos e hilos para compilación rápida y virtualización (ej. Ryzen 7 / Core Ultra 7 o superior).",
      },
      {
        titulo: "Almacenamiento:",
        texto:
          "SSD NVMe Gen4 de al menos 1 TB con buena resistencia (TBW), ya que compilar código y mover imágenes de contenedores desgasta el disco.",
      },
      {
        titulo: "Gráficos",
        texto:
          "integrados alcanzan para desarrollo web, mobile y backend. Solo se justifica una dedicada (con buena VRAM, ej. 12 GB+) si haces Machine Learning local o desarrollo de videojuegos.",
      },
      {
        titulo: "Perisfericos",
        texto:
          'Teclado mecánico cómodo (switches táctiles o lineales silenciosos) y monitor IPS de 27" QHD (1440p) o configuración doble monitor para leer código sin fatiga visual.',
      },
    ],
    componentes: [
      {
        nivel: "Nivel Recomendado",
        especificaciones: {
          CPU: "8 núcleos / 16 hilos",
          RAM: "32 GB DDR5",
          GPU: "Integrada en CPU",
          ALMACENAMIENTO: "1 TB NVMe PCIe 4.0",
          PANTALLA: '27" IPS 1440p (60-75 Hz)',
        },
      },
      {
        nivel: "Nivel Avanzado",
        especificaciones: {
          CPU: "12 a 16 núcleos",
          RAM: "64 GB DDR5",
          GPU: "Dedicada con 12 GB - 16 GB VRAM",
          ALMACENAMIENTO: "    2 TB NVMe PCIe 4.0",
          PANTALLA: 'Doble 27" 1440p o 32" 4K',
        },
      },
    ],
  },
];

function crearGuiaCompras() {
  console.log(datosGuias);
}
