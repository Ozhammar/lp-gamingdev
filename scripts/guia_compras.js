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
    {
    titulo: "Perfil Gamer",
    enfoque:
      "Maximizar fotogramas por segundo (FPS), baja latencia de respuesta y calidad visual en resoluciones 1080p, 1440p o 4K.",
    prioridades: [
      {
        titulo: "Tarjeta gráfica (GPU)",
        texto:
          "Se lleva entre el 40% y el 50% del presupuesto total. Define a qué resolución y calidad gráfica puedes jugar.",
      },
      {
        titulo: "Procesador (CPU)",
        texto:
          "Se busca alto rendimiento por núcleo (single-core) y cachés grandes (como la línea X3D de AMD) para evitar cuellos de botella en juegos competitivos.",
      },
      {
        titulo: "Monitor",
        texto:
          "Un equipo potente se desperdicia en una pantalla lenta. Se busca panel IPS u OLED con tasa de refresco de 144 Hz a 240 Hz y tiempo de respuesta de 1 ms.",
      },
      {
        titulo: "Memoria RAM y almacenamiento",
        texto:
          "Con 16 GB a 32 GB en Dual Channel (dos módulos) es suficiente. Un SSD NVMe de 1 TB o 2 TB agiliza las pantallas de carga (DirectStorage), sin necesidad de velocidades extremas.",
      },
      {
        titulo: "Refrigeración y fuente",
        texto:
          "Gabinete con buen flujo de aire (mesh frontal) y fuente certificada (80 Plus Gold) con margen suficiente para picos de consumo de la GPU.",
      },
    ],
    componentes: [
      {
        nivel: "Nivel Competitivo (1080p / 1440p)",
        especificaciones: {
          CPU: "6 a 8 núcleos (alto rendimiento single-core)",
          RAM: "32 GB DDR5 (Dual Channel)",
          GPU: "Gama media-alta (8 GB - 12 GB VRAM)",
          Almacenamiento: "1 TB NVMe",
          Pantalla: '24" o 27" 165 Hz+ (1 ms)',
        },
      },
      {
        nivel: "Nivel Entusiasta (1440p Ultra / 4K)",
        especificaciones: {
          CPU: "8 núcleos optimizados para gaming",
          RAM: "32 GB DDR5 baja latencia",
          GPU: "Gama alta (16 GB+ VRAM)",
          Almacenamiento: "2 TB NVMe",
          Pantalla: '27" 1440p 240 Hz o 32" 4K OLED',
        },
      },
    ],
  },
];

function crearGuiaCompras() {
  console.log(datosGuias);
}
