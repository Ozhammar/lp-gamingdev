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
    {
    titulo: "Perfil Híbrido: Gamer + Desarrollador",
    enfoque:
      "Equilibrar la capacidad de cómputo y memoria del desarrollador con la potencia gráfica y fluidez visual del gamer, cuidando el ruido y el consumo cuando se trabaja.",
    prioridades: [
      {
        titulo: "El punto de equilibrio",
        texto:
          "No se recorta ni en GPU ni en RAM. Se busca una máquina silenciosa en tareas de escritorio que despliegue toda su potencia al compilar o abrir un juego.",
      },
      {
        titulo: "Procesador (CPU)",
        texto:
          "Necesita tanto buen rendimiento por núcleo (para juegos) como suficientes núcleos totales (para compilar y correr servidores locales). Un procesador de 8 a 12 núcleos modernos es el punto ideal.",
      },
      {
        titulo: "Memoria RAM",
        texto:
          "32 GB DDR5 como estándar obligatorio (cubre cualquier juego actual y permite tener el IDE, navegador y contenedores abiertos sin cerrar todo antes de jugar).",
      },
      {
        titulo: "Tarjeta gráfica (GPU)",
        texto:
          "Se recomiendan modelos con 12 GB o 16 GB de VRAM (especialmente NVIDIA por compatibilidad con CUDA si el desarrollador explora IA, además de DLSS para gaming).",
      },
      {
        titulo: "Almacenamiento separado",
        texto:
          "Idealmente dos discos NVMe (o uno de 2 TB particionado): uno destinado al sistema, proyectos y entornos de trabajo, y otro exclusivo para la biblioteca de juegos pesados.",
      },
      {
        titulo: "Monitor versátil",
        texto:
          "Un panel 27\" IPS QHD (2560x1440) de 165 Hz con buena fidelidad de color (99% sRGB) ofrece nitidez de texto para programar y fluidez total para jugar.",
      },
    ],
    componentes: [
      {
        nivel: "Configuración Equilibrada (Recomendada)",
        especificaciones: {
          CPU: "8 a 12 núcleos híbridos de última generación",
          RAM: "32 GB DDR5 (ampliable a 64 GB)",
          GPU: "Gama media-alta / alta con 12 GB - 16 GB VRAM",
          Almacenamiento: "1 TB NVMe (Trabajo/SO) + 1 TB NVMe (Juegos)",
          Pantalla: '27" QHD (1440p) IPS, 165 Hz, 99% sRGB',
        },
      },
    ],
  },
    {
    titulo: "Perfil Estudiante y Programador Móvil (Notebook)",
    enfoque:
      "Equilibrio entre portabilidad, autonomía de batería y comodidad de trabajo. Es el equipo que se lleva a clases, a la biblioteca y al transporte, así que pesa tanto el peso como la pantalla y el teclado.",
    prioridades: [
      {
        titulo: "Autonomía y peso",
        texto:
          "Se busca una batería de al menos 60 a 75 Wh y un peso de hasta 1,5 a 1,8 kg. Un equipo potente que no se puede cargar todo el día pierde su razón de ser.",
      },
      {
        titulo: "Memoria RAM",
        texto:
          "Mínimo 16 GB, ideal 32 GB si usas máquinas virtuales o contenedores. En muchas notebooks la RAM viene soldada y no se puede ampliar, así que hay que comprar la cantidad definitiva desde el inicio.",
      },
      {
        titulo: "Procesador (CPU)",
        texto:
          "Se prioriza la eficiencia energética además de los núcleos: un procesador de 8 núcleos modernos rinde bien y calienta menos que uno de alta potencia.",
      },
      {
        titulo: "Pantalla y teclado",
        texto:
          'Panel de 14" a 16" en formato 16:10 (más líneas de código visibles), IPS u OLED, con 300 nits o más de brillo. El teclado cómodo y retroiluminado importa tanto como cualquier componente.',
      },
      {
        titulo: "Almacenamiento y conectividad",
        texto:
          "SSD NVMe de 512 GB a 1 TB, puertos USB-C con carga rápida (Power Delivery), Wi-Fi 6E o 7 y, si es posible, un puerto HDMI para proyectar.",
      },
      {
        titulo: "Tarjeta gráfica (GPU)",
        texto:
          "Los gráficos integrados alcanzan para programar y estudiar. Una dedicada solo se justifica para juegos o diseño 3D, a cambio de más peso y menos batería.",
      },
    ],
    componentes: [
      {
        nivel: "Nivel Recomendado (Estudio y desarrollo)",
        especificaciones: {
          CPU: "8 núcleos eficientes",
          RAM: "16 GB (idealmente ampliable)",
          GPU: "Integrada",
          Almacenamiento: "512 GB NVMe",
          Pantalla: '14"–16" IPS 16:10, 300 nits',
          "Batería / Peso": "60–75 Wh / hasta 1,5 kg",
        },
      },
      {
        nivel: "Nivel Avanzado (Virtualización / juegos ocasionales)",
        especificaciones: {
          CPU: "8 a 12 núcleos de alto rendimiento",
          RAM: "32 GB",
          GPU: "Dedicada de gama media",
          Almacenamiento: "1 TB NVMe",
          Pantalla: '16" OLED o Mini LED, 120 Hz',
          "Batería / Peso": "80–99 Wh / 1,8–2,5 kg",
        },
      },
    ],
  },
];

function crearGuiaCompras() {
  console.log(datosGuias);
}
