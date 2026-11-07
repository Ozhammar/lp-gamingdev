const DatosReviews = [
  {
    marca: "ASUS ROG",
    modelo: "Strix SCAR 16 (G635LX)",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_eVvvxQICJkhxIUcC6XsZHo_dcBq9z5wevU-irU7m5w&s=10",
    especificacionesTecnicas: {
      micro: "Intel Core Ultra 9 275HX (24 núcleos / 24 hilos)",
      ram: "32 GB DDR5-5600 MHz (Expandible a 96 GB)",
      gpu: "NVIDIA GeForce RTX 5090 Laptop (24 GB GDDR7, TGP 175W)",
      almacenamiento: "2 TB SSD M.2 NVMe PCIe Gen 4"
    },
    especificacionesArquitectura: {
      tipoPantalla: "ROG Nebula HDR Mini LED (2000+ zonas atenuación, 240Hz, 3ms, G-SYNC)",
      tamano: "16 pulgadas WQXGA (2560 x 1600 px, 16:10)",
      refrigeracion: "ROG Intelligent Cooling con cámara de vapor, sistema Tri-Fan y metal líquido Conductonaut Extreme",
      conectividad: "Wi-Fi 7, Bluetooth 5.4, 2x Thunderbolt 4/5, 3x USB 3.2 Gen 2 Type-A, HDMI 2.1 FRL, RJ45 2.5Gbps"
    },
    resenaPersonal: {
      puntaje: 9.6,
      resumen: "Rendimiento extremo sin concesiones para reemplazar cualquier PC de escritorio. La pantalla Mini LED brilla en HDR y el sistema de disipación mantiene el thermal throttling al margen.",
      pros: ["Panel Mini LED súper brillante", "Máxima potencia gráfica RTX 5090", "Fácil mantenimiento"],
      contras: ["Cargador voluminoso", "Ventiladores ruidosos en perfil Turbo"]
    },
    fuentesInformacion: [
      { medio: "ASUS ROG Argentina", link: "https://rog.asus.com/ar/laptops/rog-strix-series/" },
      { medio: "Notebookcheck", link: "https://www.notebookcheck.net/" }
    ]
  },
  {
    marca: "ASUS ROG",
    modelo: "Zephyrus G16 (GU605CX)",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlxrCGnnq0EgS6mOxEYE249xG-_xrzmQEnRbMSGbL-tA&s=10",
    especificacionesTecnicas: {
      micro: "Intel Core Ultra 9 285H (16 núcleos / 16 hilos, NPU integrada)",
      ram: "32 GB LPDDR5X-7467 MHz (Integrada)",
      gpu: "NVIDIA GeForce RTX 5080 Laptop (16 GB GDDR7)",
      almacenamiento: "2 TB SSD M.2 NVMe PCIe 4.0"
    },
    especificacionesArquitectura: {
      tipoPantalla: "ROG Nebula OLED (240Hz, 0.2ms, VESA DisplayHDR True Black 500, 100% DCI-P3)",
      tamano: "16 pulgadas 2.5K (2560 x 1600 px, 16:10)",
      refrigeracion: "Chasis Unibody CNC con cámara de vapor, tubos de calor optimizados y pasta térmica de metal líquido",
      conectividad: "Wi-Fi 7, Bluetooth 5.4, 1x Thunderbolt 4, 1x USB-C 3.2 Gen 2, 2x USB-A 3.2 Gen 2, HDMI 2.1, Lector SD UHS-II"
    },
    resenaPersonal: {
      puntaje: 9.5,
      resumen: "El equilibrio perfecto entre elegancia, ligereza y potencia bruta. Su panel OLED ofrece los mejores negros del mercado y los altavoces rivalizan directamente con la serie MacBook.",
      pros: ["Diseño ultra delgado de aluminio CNC", "Pantalla OLED espectacular", "Excelentes altavoces y touchpad"],
      contras: ["Memoria RAM no ampliable (soldada)", "Superficie propensa a huellas en tono oscuro"]
    },
    fuentesInformacion: [
      { medio: "ASUS ROG Argentina", link: "https://rog.asus.com/ar/laptops/rog-zephyrus-series/" },
      { medio: "Ultrabook Review", link: "https://www.ultrabookreview.com/" }
    ]
  },
  {
    marca: "Lenovo",
    modelo: "Legion Pro 7i Gen 9",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUd3fQ0M5JvYP9BN8ry8jnrJnPI6cdjD8vxF09dk85Q&s=10",
    especificacionesTecnicas: {
      micro: "Intel Core Ultra 9 275HX (24 núcleos / 24 hilos)",
      ram: "32 GB DDR5-6400 MHz CSODIMM",
      gpu: "NVIDIA GeForce RTX 5080 Laptop (16 GB GDDR7, TGP 175W)",
      almacenamiento: "2 TB SSD M.2 PCIe 5.0 x4 NVMe"
    },
    especificacionesArquitectura: {
      tipoPantalla: "PureSight Gaming OLED (240Hz, DisplayHDR True Black 1000, Dolby Vision, G-SYNC)",
      tamano: "16 pulgadas WQXGA (2560 x 1600 px, 16:10)",
      refrigeracion: "Legion ColdFront Vapour con cámara de vapor masiva y doble ventilador de polímero de cristal líquido",
      conectividad: "Wi-Fi 7, Bluetooth 5.4, 2.5GbE Ethernet RJ45, 1x Thunderbolt 4, 1x USB-C 3.2 Gen 2, 4x USB-A 3.2 Gen 1, HDMI 2.1"
    },
    resenaPersonal: {
      puntaje: 9.4,
      resumen: "Construcción sobria y profesional que esconde una de las laptops más rápidas para trabajo en renderizado 3D y juegos competitivos. El teclado TrueStrike sigue siendo la referencia del sector.",
      pros: ["Teclado TrueStrike de sensacional tacto", "Rendimiento térmico consistente", "Chasis muy sólido"],
      contras: ["Estética conservadora para un equipo entusiasta", "Autonomía de batería limitada"]
    },
    fuentesInformacion: [
      { medio: "Lenovo Argentina", link: "https://www.lenovo.com/ar/es/legion/" },
      { medio: "PCMag", link: "https://www.pcmag.com/" }
    ]
  },
  {
    marca: "Lenovo",
    modelo: "Legion Slim 5 16",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0gJPyT5pohGP4dgQyf55nS8_Bc4ehBaAQbXBKcQd2zg&s=10",
    especificacionesTecnicas: {
      micro: "AMD Ryzen 7 8845HS (8 núcleos / 16 hilos, NPU Ryzen AI)",
      ram: "16 GB DDR5-5600 MHz (2x8GB SODIMM)",
      gpu: "NVIDIA GeForce RTX 4060 Laptop (8 GB GDDR6, 140W TGP)",
      almacenamiento: "1 TB SSD M.2 2280 PCIe 4.0 NVMe"
    },
    especificacionesArquitectura: {
      tipoPantalla: "IPS Antirreflejo (165Hz, 100% sRGB, 350 nits, Dolby Vision)",
      tamano: "16 pulgadas WQXGA (2560 x 1600 px)",
      refrigeracion: "Legion ColdFront 5.0 con tubos de calor de cobre compuesto y ventiladores duales silenciosos",
      conectividad: "Wi-Fi 6E, Bluetooth 5.3, 2x USB-C 3.2 Gen 2 (DisplayPort 1.4 + 140W PD), 2x USB-A 3.2 Gen 2, HDMI 2.1, Lector SD"
    },
    resenaPersonal: {
      puntaje: 8.8,
      resumen: "Una de las mejores opciones precio-calidad del mercado. Es liviana, versátil para la universidad o trabajo remoto, y corre cualquier juego moderno con soltura.",
      pros: ["Gran eficiencia energética con Ryzen", "Relación costo-beneficio imbatible", "Excelente teclado"],
      contras: ["Brillo del panel IPS algo justo para exteriores", "Chasis parcialmente plástico"]
    },
    fuentesInformacion: [
      { medio: "Lenovo Argentina", link: "https://www.lenovo.com/ar/es/laptops/legion-laptops/legion-5-series/" },
      { medio: "Tom's Hardware", link: "https://www.tomshardware.com/" }
    ]
  },
  {
    marca: "HP",
    modelo: "OMEN 16 (2025/2026)",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4MdDjzaO01Fv0sypEhjT4btzc-mWec24AIYXqInbcfw&s=10",
    especificacionesTecnicas: {
      micro: "AMD Ryzen AI 9 365 (10 núcleos / 20 hilos, NPU 50 TOPS)",
      ram: "32 GB DDR5-5600 MHz",
      gpu: "NVIDIA GeForce RTX 5070 Laptop (8 GB GDDR7, 115W TGP)",
      almacenamiento: "1 TB SSD M.2 NVMe PCIe 4.0"
    },
    especificacionesArquitectura: {
      tipoPantalla: "IPS WQXGA (240Hz, 3ms, 500 nits, 100% sRGB, Anti-glare)",
      tamano: "16 pulgadas (2560 x 1600 px, 16:10)",
      refrigeracion: "OMEN Tempest Cooling con compuesto metálico híbrido y sensor de temperatura IR dinámico",
      conectividad: "Wi-Fi 6E, Bluetooth 5.3, 1x USB-C 3.2 (DP 1.4 y PD 100W), 3x USB-A 3.2, HDMI 2.1, RJ45 Ethernet"
    },
    resenaPersonal: {
      puntaje: 8.9,
      resumen: "HP dio un gran salto con el audio refinado por HyperX y la integración de IA para ajustar perfiles térmicos sobre la marcha sin intervención del usuario.",
      pros: ["Sonido integrado claro y potente", "Perfil térmico inteligente OMEN AI", "Pantalla de 240Hz muy fluida"],
      contras: ["Diseño exterior algo propenso a rayaduras", "El software OMEN Gaming Hub requiere ajustes iniciales"]
    },
    fuentesInformacion: [
      { medio: "HP Store Argentina", link: "https://www.hp.com/ar-es/shop/laptops/omen.html" },
      { medio: "IGN Latinoamérica", link: "https://latam.ign.com/" }
    ]
  },
  {
    marca: "HP",
    modelo: "Spectre x360 16",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_wpt6_HMt7Kaw09T6l4TstRsljb6B_PhLCmVmg6Pug&s=10",
    especificacionesTecnicas: {
      micro: "Intel Core Ultra 7 155H (16 núcleos / 22 hilos, NPU AI Boost)",
      ram: "32 GB LPDDR5x-6400 MHz (Integrada)",
      gpu: "Intel Arc Graphics (Integrada) + Soporte eGPU",
      almacenamiento: "2 TB SSD M.2 PCIe 4.0 NVMe"
    },
    especificacionesArquitectura: {
      tipoPantalla: "OLED Touch 2.8K (120Hz VRR, 0.2ms, VESA DisplayHDR 500, lápiz óptico incluido)",
      tamano: "16 pulgadas 2.8K (2880 x 1800 px, 16:10 2-en-1 convertible)",
      refrigeracion: "Sistema ultrasilencioso de doble ventilador con disipadores de cámara de aire plana",
      conectividad: "Wi-Fi 7, Bluetooth 5.4, 2x Thunderbolt 4, 1x USB-A 3.2 Gen 2, HDMI 2.1, lector de huellas e infrarrojos"
    },
    resenaPersonal: {
      puntaje: 9.2,
      resumen: "La convertible 2-en-1 definitiva para creativos, ejecutivos y programadores. Su bisagra de 360 grados y la pantalla táctil OLED la convierten en una herramienta de trabajo fabulosa.",
      pros: ["Pantalla táctil OLED de impresionante calidad", "Construcción premium en corte diamante", "Gran autonomía de batería"],
      contras: ["Sin GPU dedicada para juegos pesados", "Precio elevado"]
    },
    fuentesInformacion: [
      { medio: "HP Store Argentina", link: "https://www.hp.com/ar-es/shop/laptops/spectre.html" },
      { medio: "PCWorld", link: "https://www.pcworld.com/" }
    ]
  },
  {
    marca: "MSI",
    modelo: "Titan 18 HX AI (A2614)",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8LYwui6MnE-6SX_fYaKYRa3Et1DNft-LCaRv0AaQ9EQ&s=10",
    especificacionesTecnicas: {
      micro: "Intel Core Ultra 9 285HX (24 núcleos / 24 hilos)",
      ram: "64 GB DDR5-5600 MHz (Expandible a 192 GB en 4 slots)",
      gpu: "NVIDIA GeForce RTX 5090 Laptop (24 GB GDDR7, TGP 175W max)",
      almacenamiento: "6 TB (3x 2TB SSD NVMe PCIe Gen 4 / Gen 5 RAID 0)"
    },
    especificacionesArquitectura: {
      tipoPantalla: "MiniLED 4K+ UHD+ (120Hz, VESA DisplayHDR 1000, 100% DCI-P3)",
      tamano: "18 pulgadas (3840 x 2400 px, 16:10)",
      refrigeracion: "Vapor Chamber Cooler con 4 ventiladores y 6 tubos de disipación de cobre extendidos",
      conectividad: "Wi-Fi 7, Bluetooth 5.4, Killer E3100 2.5G LAN, 2x Thunderbolt 5, 3x USB-A 3.2 Gen 2, HDMI 2.1, Lector SD Express"
    },
    resenaPersonal: {
      puntaje: 9.7,
      resumen: "Una proeza de la ingeniería sin límites de presupuesto. Cuenta con teclado mecánico Cherry MX, touchpad háptico RGB sin bordes y potencia de sobra para procesamiento computacional exigente.",
      pros: ["Pantalla 4K MiniLED de 18 pulgadas", "Teclado mecánico Cherry MX integrado", "Capacidad de expansión inigualable"],
      contras: ["Extremadamente pesada (3.6 kg)", "Precio prohibitivo para el usuario promedio"]
    },
    fuentesInformacion: [
      { medio: "MSI LATAM", link: "https://latam.msi.com/Laptops" },
      { medio: "Tom's Hardware", link: "https://www.tomshardware.com/" }
    ]
  },
  {
    marca: "MSI",
    modelo: "Stealth 16 Studio (A13VG)",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNd74gvXdQ2wt-SzLCmUmhn5ro2b8JrkdsYu9qgSYlUA&s=10",
    especificacionesTecnicas: {
      micro: "Intel Core i9-13900H (14 núcleos / 20 hilos)",
      ram: "32 GB DDR5-5200 MHz",
      gpu: "NVIDIA GeForce RTX 4070 Laptop (8 GB GDDR6, 105W TGP)",
      almacenamiento: "1 TB SSD M.2 PCIe Gen 4 NVMe"
    },
    especificacionesArquitectura: {
      tipoPantalla: "IPS QHD+ (240Hz, 100% DCI-P3, calibración de fábrica Calman Validated)",
      tamano: "16 pulgadas (2560 x 1600 px, 16:10)",
      refrigeracion: "Cooler Boost 5 con 2 ventiladores y 5 tubos de calor compartidos entre CPU y GPU",
      conectividad: "Wi-Fi 6E, Bluetooth 5.3, 1x Thunderbolt 4, 1x USB-C 3.2 (PD), 2x USB-A 3.2, HDMI 2.1, Lector MicroSD"
    },
    resenaPersonal: {
      puntaje: 9.0,
      resumen: "Pensada para el profesional que necesita pasar de una reunión corporativa a editar video 4K o jugar títulos exigentes. Su cuerpo de aleación magnesio-aluminio la hace súper elegante.",
      pros: ["Peso reducido por debajo de los 2 kg", "Certificación NVIDIA Studio para software creativo", "Diseño sobrio"],
      contras: ["TGP gráfico ligeramente limitado para mantener temperaturas", "Touchpad de tamaño medio"]
    },
    fuentesInformacion: [
      { medio: "MSI LATAM", link: "https://latam.msi.com/Laptops" },
      { medio: "Notebookcheck", link: "https://www.notebookcheck.net/" }
    ]
  },
  {
    marca: "ASUS TUF",
    modelo: "Gaming A15 (FA507UI)",
    imagen: "https://dlcdnwebimgs.asus.com/gain/92fecb86-14a2-4ae5-b0f3-43dc811379f9/w800/fwebp",
    especificacionesTecnicas: {
      micro: "AMD Ryzen 9 8945HS (8 núcleos / 16 hilos, NPU AI)",
      ram: "16 GB DDR5-5600 MHz (Expandible a 32 GB)",
      gpu: "NVIDIA GeForce RTX 4070 Laptop (8 GB GDDR6, 140W TGP)",
      almacenamiento: "1 TB SSD M.2 PCIe 4.0 NVMe"
    },
    especificacionesArquitectura: {
      tipoPantalla: "IPS Full HD (144Hz, 100% sRGB, G-SYNC, MUX Switch + Advanced Optimus)",
      tamano: "15.6 pulgadas (1920 x 1080 px)",
      refrigeracion: "Arc Flow Fans de 84 álabes con 5 tubos de calor y cuatro salidas de aire con autolimpieza",
      conectividad: "Wi-Fi 6, Bluetooth 5.3, 1x USB4 Type-C, 1x USB-C 3.2 Gen 2, 2x USB-A 3.2 Gen 1, HDMI 2.1, RJ45 LAN"
    },
    resenaPersonal: {
      puntaje: 8.7,
      resumen: "Certificación militar MIL-STD-810H en un chasis resistente a golpes y vibraciones. Entrega rendimiento de gama alta a un costo competitivo sin adornos innecesarios.",
      pros: ["Durabilidad militar probada", "Interruptor MUX físico y Advanced Optimus", "Batería de 90Wh de gran duración"],
      contras: ["Resolución 1080p en lugar de 1440p", "Diseño algo tosco en comparación con ROG"]
    },
    fuentesInformacion: [
      { medio: "ASUS Argentina", link: "https://www.asus.com/ar/laptops/for-gaming/tuf-gaming/" },
      { medio: "PCMag", link: "https://www.pcmag.com/" }
    ]
  },
  {
    marca: "ASUS TUF",
    modelo: "Gaming F17 (FX707VI)",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZV1W9BW1gwQ-Pia_LbluX0ILNIrV7byR02JqOVRJpQ&s=10g",
    especificacionesTecnicas: {
      micro: "Intel Core i7-13620H (10 núcleos / 16 hilos)",
      ram: "16 GB DDR5-5200 MHz",
      gpu: "NVIDIA GeForce RTX 4070 Laptop (8 GB GDDR6, 140W TGP)",
      almacenamiento: "1 TB SSD M.2 PCIe 4.0 NVMe"
    },
    especificacionesArquitectura: {
      tipoPantalla: "IPS QHD (240Hz, 3ms, 100% DCI-P3, Anti-glare)",
      tamano: "17.3 pulgadas (2560 x 1440 px, 16:9)",
      refrigeracion: "Sistema de ventilación Arc Flow con disipadores de cobre extendidos",
      conectividad: "Wi-Fi 6, Bluetooth 5.2, 1x Thunderbolt 4, 1x USB-C 3.2 Gen 2, 2x USB-A 3.2 Gen 1, HDMI 2.1, RJ45"
    },
    resenaPersonal: {
      puntaje: 8.6,
      resumen: "Perfecta para quienes buscan sustituir un monitor de escritorio por una gran pantalla de 17.3 pulgadas de 240Hz sin pagar el sobreprecio de las líneas premium.",
      pros: ["Pantalla amplia de 240Hz con excelente cobertura de color", "Teclado numérico completo", "Estructura muy robusta"],
      contras: ["Peso y tamaño considerables", "Altavoces básicos"]
    },
    fuentesInformacion: [
      { medio: "ASUS Argentina", link: "https://www.asus.com/ar/laptops/for-gaming/tuf-gaming/" },
      { medio: "Ultrabook Review", link: "https://www.ultrabookreview.com/" }
    ]
  },
  {
    marca: "Apple",
    modelo: "MacBook Pro 16 (M3 Max / M4 Max)",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKSvUKbiZoqPKN1DQc0IbNsmiKk4VPxc4dDE9Ni3IsFA&s=10",
    especificacionesTecnicas: {
      micro: "Apple M3 Max (CPU de 16 núcleos: 12 de alto rendimiento / 4 de eficiencia)",
      ram: "48 GB de Memoria Unificada (Ancho de banda de 300 GB/s)",
      gpu: "GPU integrada de 40 núcleos con trazado de rayos por hardware",
      almacenamiento: "1 TB SSD ultrarrápido (Lecturas hasta 7.4 GB/s)"
    },
    especificacionesArquitectura: {
      tipoPantalla: "Liquid Retina XDR Mini-LED (120Hz ProMotion, 1600 nits pico HDR, 1.000.000:1 contraste)",
      tamano: "16.2 pulgadas (3456 x 2234 px)",
      refrigeracion: "Sistema térmico pasivo/activo con ventiladores de baja velocidad silenciosos y disipador de aluminio masivo",
      conectividad: "Wi-Fi 6E, Bluetooth 5.3, 3x Thunderbolt 4 / USB4, HDMI 2.1, Lector SDXC, Puerto MagSafe 3, Jack 3.5mm de alta impedancia"
    },
    resenaPersonal: {
      puntaje: 9.8,
      resumen: "El estándar de oro absoluto en estaciones de trabajo móviles para edición de video 8K, programación y música. Su batería de hasta 22 horas y rendimiento idéntico desenchufada no tienen rival.",
      pros: ["Pantalla Liquid Retina XDR incomparable", "Eficiencia energética y autonomía récord", "Rendimiento idéntico en batería que conectada"],
      contras: ["No orientada a gaming de catálogo tradicional", "Componentes 100% soldados sin opción de expansión"]
    },
    fuentesInformacion: [
      { medio: "Apple América Latina", link: "https://www.apple.com/la/macbook-pro/" },
      { medio: "The Verge", link: "https://www.theverge.com/" }
    ]
  },
  {
    marca: "Apple",
    modelo: "MacBook Pro 14 (M3 Pro)",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD_VCgHQd_kY6iCEC7Qp__bBf1AtO4-6x26jFKx3wxkw&s=10",
    especificacionesTecnicas: {
      micro: "Apple M3 Pro (CPU de 12 núcleos: 6 de alto rendimiento / 6 de eficiencia)",
      ram: "18 GB de Memoria Unificada (Ancho de banda de 150 GB/s)",
      gpu: "GPU integrada de 18 núcleos",
      almacenamiento: "512 GB SSD NVMe integrado"
    },
    especificacionesArquitectura: {
      tipoPantalla: "Liquid Retina XDR Mini-LED (120Hz ProMotion, 1000 nits sostenidos, P3 wide color)",
      tamano: "14.2 pulgadas (3024 x 1964 px)",
      refrigeracion: "Arquitectura térmica de alta eficiencia con ventilador único ultrasilencioso",
      conectividad: "Wi-Fi 6E, Bluetooth 5.3, 3x Thunderbolt 4, HDMI 2.1, SDXC, MagSafe 3"
    },
    resenaPersonal: {
      puntaje: 9.6,
      resumen: "El equilibrio perfecto entre portabilidad y potencia pro. El acabado en color Space Black repele efectivamente las marcas de huellas y la pantalla de 14 pulgadas es formidable.",
      pros: ["Formato ultraportátil de 1.6 kg", "Calidad de pantalla Mini-LED ProMotion", "Autonomía de 18 horas de uso real"],
      contras: ["Capacidad base de almacenamiento de 512GB justa para proyectos pesados", "Costo de actualización de RAM"]
    },
    fuentesInformacion: [
      { medio: "Apple América Latina", link: "https://www.apple.com/la/macbook-pro-14-and-16/" },
      { medio: "Tom's Guide", link: "https://www.tomsguide.com/" }
    ]
  },
  {
    marca: "Apple",
    modelo: "MacBook Air 15 (M3)",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcvPraUBFdRgot_dYPLlqQx8Zfc-rg7pusvxlOzPTVxQ&s=10",
    especificacionesTecnicas: {
      micro: "Apple M3 (CPU de 8 núcleos: 4 de rendimiento / 4 de eficiencia, Neural Engine 16 núcleos)",
      ram: "16 GB de Memoria Unificada",
      gpu: "GPU integrada de 10 núcleos",
      almacenamiento: "512 GB SSD NVMe"
    },
    especificacionesArquitectura: {
      tipoPantalla: "Liquid Retina IPS (500 nits, gama de colores P3, True Tone)",
      tamano: "15.3 pulgadas (2880 x 1864 px)",
      refrigeracion: "Diseño 100% pasivo (Sin ventiladores, funcionamiento totalmente silencioso)",
      conectividad: "Wi-Fi 6E, Bluetooth 5.3, 2x Thunderbolt / USB4, Puerto de carga MagSafe 3, Jack 3.5mm"
    },
    resenaPersonal: {
      puntaje: 9.4,
      resumen: "La mejor laptop del mundo para uso diario, universidad y trabajo de oficina. Al no tener ventiladores, su funcionamiento es absolutamente silencioso en todo momento.",
      pros: ["Chasis ultra delgado de apenas 1.15 cm", "Funcionamiento 100% silencioso sin ventiladores", "Batería de larga duración"],
      contras: ["Limitada a 2 puertos Thunderbolt", "Soporta máximo dos monitores externos con la tapa cerrada"]
    },
    fuentesInformacion: [
      { medio: "Apple América Latina", link: "https://www.apple.com/la/macbook-air/" },
      { medio: "Engadget", link: "https://www.engadget.com/" }
    ]
  },
  {
    marca: "Lenovo",
    modelo: "Yoga Pro 9i 16 (Gen 9)",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCuMPsldxaUacxyNeVeYD8cgHFLfXP2yNimW8PHqIhOw&s=10",
    especificacionesTecnicas: {
      micro: "Intel Core Ultra 9 185H (16 núcleos / 22 hilos, NPU integrados)",
      ram: "32 GB LPDDR5X-7467 MHz",
      gpu: "NVIDIA GeForce RTX 4070 Laptop (8 GB GDDR6, 100W TGP)",
      almacenamiento: "1 TB SSD M.2 PCIe 4.0 NVMe"
    },
    especificacionesArquitectura: {
      tipoPantalla: "3.2K Mini LED Touch (165Hz, 1200 nits pico, 100% DCI-P3 / Adobe RGB, Calman Verified)",
      tamano: "16 pulgadas (3200 x 2000 px, 16:10)",
      refrigeracion: "Lenovo X Power Custom Tuning con doble ventilador y cámara de evaporación de perfil plano",
      conectividad: "Wi-Fi 6E, Bluetooth 5.3, 1x Thunderbolt 4, 1x USB-C full-function, 2x USB-A 3.2, HDMI 2.1, Lector SD completo"
    },
    resenaPersonal: {
      puntaje: 9.3,
      resumen: "Diseñada específicamente para creadores visuales y fotógrafos. Su pantalla Mini LED tiene una fidelidad de color perfecta para edición previa a imprenta o corrección de color.",
      pros: ["Pantalla Mini LED táctil de 3.2K con precisión de color absoluta", "Sistema de 6 altavoces integrado", "Cámara web de 5MP con infrarrojos"],
      contras: ["Consumo de batería elevado con el panel Mini LED a 165Hz", "Cargador pesado de 240W"]
    },
    fuentesInformacion: [
      { medio: "Lenovo Argentina", link: "https://www.lenovo.com/ar/es/yoga/" },
      { medio: "PCMag", link: "https://www.pcmag.com/" }
    ]
  },
  {
    marca: "MSI",
    modelo: "Cyborg 15 (A13VF)",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd3R8yNztbXbjuKyXae-SN-AQR7DvC58ht4g4IJyeoiQ&s=10",
    especificacionesTecnicas: {
      micro: "Intel Core i7-13620H (10 núcleos / 16 hilos)",
      ram: "16 GB DDR5-5200 MHz",
      gpu: "NVIDIA GeForce RTX 4060 Laptop (8 GB GDDR6, 45W TGP con Dynamic Boost)",
      almacenamiento: "512 GB SSD M.2 PCIe Gen 4"
    },
    especificacionesArquitectura: {
      tipoPantalla: "IPS Level Full HD (144Hz, 45% NTSC)",
      tamano: "15.6 pulgadas (1920 x 1080 px, 16:9)",
      refrigeracion: "Cooler Boost con disipador exclusivo Pipe Design de cobre expuesto",
      conectividad: "Wi-Fi 6, Bluetooth 5.2, Gigabit Ethernet RJ45, 1x USB-C 3.2 (DP), 2x USB-A 3.2, HDMI 2.1, Jack 3.5mm"
    },
    resenaPersonal: {
      puntaje: 8.2,
      resumen: "Destaca por su estética cyberpunk con piezas traslúcidas en el chasis y teclado. Es una opción de entrada idónea para gaming casual y trabajos escolares o universitarios.",
      pros: ["Estética traslúcida original", "Equipo liviano para ser de 15.6'' (1.98 kg)", "Precio muy accesible"],
      contras: ["TGP gráfico recortado a 45W", "Pantalla con cobertura de color limitada (45% NTSC)"]
    },
    fuentesInformacion: [
      { medio: "MSI LATAM", link: "https://latam.msi.com/Laptops" },
      { medio: "Tom's Hardware", link: "https://www.tomshardware.com/" }
    ]
  }
];

const EtiquetasSpecsTecnicas = {
  micro: "Procesador",
  ram: "Memoria RAM",
  gpu: "Tarjeta gráfica",
  almacenamiento: "Almacenamiento",
};
const EtiquetasSpecsArquitectura = {
  tipoPantalla: "Tipo de pantalla",
  tamano: "Tamaño y resolución",
  refrigeracion: "Refrigeración",
  conectividad: "Conectividad",
};

const class_ReviewMarca = "review-marca";
const class_ReviewSubmenu = "review-submenu";
const class_ReviewTarjeta = "review-tarjeta";
const class_ReviewImagen = "review-imagen";

let botonTodosReview = null;
let botonesMarcaReview = new Map(); 
let botonesModeloReview = []; 


function crearElementoReview(etiqueta, texto = "", clase = "") {
  const elemento = document.createElement(etiqueta);
  if (texto) elemento.textContent = texto;
  if (clase) elemento.classList.add(clase);
  return elemento;
}

function crearImagenReview(item, clase, decorativa) {
  const imagen = crearElementoReview("img", "", clase);
  imagen.src = item.imagen;
  imagen.alt = decorativa ? "" : item.marca + " " + item.modelo;
  imagen.loading = "lazy";
  imagen.addEventListener(
    "error",
    () => {
      const vacio = crearElementoReview("span", "Imagen no disponible", clase + "-vacia");
      vacio.setAttribute("aria-hidden", "true");
      imagen.replaceWith(vacio);
    },
    { once: true },
  );
  return imagen;
}

function crearTablaSpecsReview(titulo, datos, etiquetas) {
  const tabla = crearElementoReview("table", "", "review-tabla");
  tabla.appendChild(crearElementoReview("caption", titulo));
  const cuerpo = document.createElement("tbody");
  tabla.appendChild(cuerpo);

  Object.entries(datos).forEach(([clave, valor]) => {
    const fila = document.createElement("tr");
    const etiqueta = crearElementoReview("th", etiquetas[clave] ?? clave);
    etiqueta.scope = "row";
    fila.appendChild(etiqueta);
    fila.appendChild(crearElementoReview("td", valor));
    cuerpo.appendChild(fila);
  });
  return tabla;
}

function crearListaReview(titulo, items, clase) {
  const bloque = crearElementoReview("div", "", clase);
  bloque.appendChild(crearElementoReview("h4", titulo));
  const lista = document.createElement("ul");
  items.forEach((texto) => lista.appendChild(crearElementoReview("li", texto)));
  bloque.appendChild(lista);
  return bloque;
}

function llevarFocoReview(titulo) {
  titulo.focus({ preventScroll: true });
  const angosta = window.matchMedia("(max-width: 768px)").matches;
  titulo.scrollIntoView({ block: angosta ? "start" : "nearest" });
}


function agruparPorMarca() {
  const grupos = new Map();
  DatosReviews.forEach((item, indice) => {
    if (!grupos.has(item.marca)) grupos.set(item.marca, []);
    grupos.get(item.marca).push(indice);
  });
  return grupos;
}

function establecerMarcaAbierta(boton, abierto) {
  boton.setAttribute("aria-expanded", String(abierto));
  boton.nextElementSibling.hidden = !abierto;
  boton.querySelector("i").className = abierto ? "fa-regular fa-circle-up" : "fa-regular fa-circle-down";
}

function abrirSoloMarca(botonAbierto) {
  botonesMarcaReview.forEach((boton) => establecerMarcaAbierta(boton, boton === botonAbierto));
}

function establecerActualReview(boton, actual) {
  if (actual) {
    boton.setAttribute("aria-current", "true");
  } else {
    boton.removeAttribute("aria-current");
  }
}

function marcarActivoReviews(indice) {
  establecerActualReview(botonTodosReview, indice === null);
  botonesModeloReview.forEach((boton, i) => establecerActualReview(boton, i === indice));
}

function crearMenuReviews() {
  const nav = document.getElementById("nav_reviews");
  const lista = document.createElement("ul");
  nav.appendChild(lista);
  botonesMarcaReview = new Map();
  botonesModeloReview = [];

  const itemTodos = document.createElement("li");
  botonTodosReview = crearElementoReview("button", "Todos los modelos");
  botonTodosReview.type = "button";
  botonTodosReview.addEventListener("click", () => mostrarListadoReviews(true));
  itemTodos.appendChild(botonTodosReview);
  lista.appendChild(itemTodos);

  agruparPorMarca().forEach((indices, marca) => {
    const item = crearElementoReview("li", "", class_ReviewMarca);
    lista.appendChild(item);

    const botonMarca = crearElementoReview("button", marca);
    botonMarca.type = "button";
    botonMarca.setAttribute("aria-expanded", "false");
    const icono = document.createElement("span");
    const iconoFlecha = document.createElement("i");
    iconoFlecha.className = "fa-regular fa-circle-down";
    iconoFlecha.setAttribute("aria-hidden", "true");
    icono.appendChild(iconoFlecha);
    botonMarca.appendChild(icono);
    item.appendChild(botonMarca);
    botonesMarcaReview.set(marca, botonMarca);

    const submenu = crearElementoReview("ul", "", class_ReviewSubmenu);
    submenu.id = "submenu_review_" + botonesMarcaReview.size;
    submenu.hidden = true;
    botonMarca.setAttribute("aria-controls", submenu.id);
    item.appendChild(submenu);

    indices.forEach((indice) => {
      const itemModelo = document.createElement("li");
      const botonModelo = crearElementoReview("button", DatosReviews[indice].modelo);
      botonModelo.type = "button";
      botonModelo.addEventListener("click", () => mostrarReview(indice));
      itemModelo.appendChild(botonModelo);
      submenu.appendChild(itemModelo);
      botonesModeloReview[indice] = botonModelo;
    });

    botonMarca.addEventListener("click", () => {
      const abrir = botonMarca.getAttribute("aria-expanded") === "false";
      if (abrir) {
        abrirSoloMarca(botonMarca);
      } else {
        establecerMarcaAbierta(botonMarca, false);
      }
    });
  });
}


function crearTarjetaReview(item, indice) {
  const elemento = document.createElement("li");

  const boton = crearElementoReview("button", "", class_ReviewTarjeta);
  boton.type = "button";
  boton.addEventListener("click", () => mostrarReview(indice));

  boton.appendChild(crearImagenReview(item, "review-tarjeta-imagen", true));
  boton.appendChild(crearElementoReview("span", item.marca, "review-tarjeta-marca"));
  boton.appendChild(crearElementoReview("span", item.modelo, "review-tarjeta-modelo"));

  elemento.appendChild(boton);
  return elemento;
}

function mostrarListadoReviews(enfocar = false) {
  const panel = document.getElementById("contenido_reviews");
  panel.replaceChildren();

  const titulo = crearElementoReview("h3", "Todos los modelos");
  titulo.tabIndex = -1;
  panel.appendChild(titulo);
  panel.appendChild(crearElementoReview("p", "Elegí un equipo para leer su review completa."));

  const grilla = crearElementoReview("ul", "", "review-grilla");
  DatosReviews.forEach((item, indice) => grilla.appendChild(crearTarjetaReview(item, indice)));
  panel.appendChild(grilla);

  marcarActivoReviews(null);
  if (enfocar) llevarFocoReview(titulo);
}

function mostrarReview(indice) {
  const item = DatosReviews[indice];
  const resena = item.resenaPersonal;
  const panel = document.getElementById("contenido_reviews");
  panel.replaceChildren();

  const volver = crearElementoReview("button", "← Volver a todos los modelos", "review-volver");
  volver.type = "button";
  volver.addEventListener("click", () => mostrarListadoReviews(true));
  panel.appendChild(volver);

  const articulo = document.createElement("article");
  panel.appendChild(articulo);

  const titulo = crearElementoReview("h3", item.marca + " " + item.modelo);
  titulo.tabIndex = -1;
  articulo.appendChild(titulo);

  const cabecera = crearElementoReview("div", "", "review-cabecera");
  cabecera.appendChild(crearImagenReview(item, class_ReviewImagen, false));
  const texto = crearElementoReview("div", "", "review-resumen");
  const puntaje = crearElementoReview("p", "", "review-puntaje");
  puntaje.append("Puntaje: ", crearElementoReview("strong", resena.puntaje.toFixed(1)), " / 10");
  texto.appendChild(puntaje);
  texto.appendChild(crearElementoReview("p", resena.resumen));
  cabecera.appendChild(texto);
  articulo.appendChild(cabecera);

  const tablas = crearElementoReview("div", "", "review-tablas");
  tablas.appendChild(crearTablaSpecsReview("Especificaciones técnicas", item.especificacionesTecnicas, EtiquetasSpecsTecnicas));
  tablas.appendChild(crearTablaSpecsReview("Pantalla y arquitectura", item.especificacionesArquitectura, EtiquetasSpecsArquitectura));
  articulo.appendChild(tablas);

  const balance = crearElementoReview("div", "", "review-balance");
  balance.appendChild(crearListaReview("Pros", resena.pros, "review-pros"));
  balance.appendChild(crearListaReview("Contras", resena.contras, "review-contras"));
  articulo.appendChild(balance);

  if (item.fuentesInformacion.length > 0) {
    const fuentes = crearElementoReview("div", "", "review-fuentes");
    fuentes.appendChild(crearElementoReview("h4", "Fuentes de información"));
    const lista = document.createElement("ul");
    item.fuentesInformacion.forEach((fuente) => {
      const elemento = document.createElement("li");
      const enlace = crearElementoReview("a", fuente.medio);
      enlace.href = fuente.link;
      enlace.target = "_blank";
      enlace.rel = "noopener noreferrer";
      elemento.appendChild(enlace);
      elemento.appendChild(crearElementoReview("span", "review-aviso"));
      lista.appendChild(elemento);
    });
    fuentes.appendChild(lista);
    articulo.appendChild(fuentes);
  }

  marcarActivoReviews(indice);
  abrirSoloMarca(botonesMarcaReview.get(item.marca));
  llevarFocoReview(titulo);
}

function crearReviews() {
  crearMenuReviews();
  mostrarListadoReviews();
}