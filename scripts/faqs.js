const class_FaqCategoria = "faq-categoria";
const class_FaqItem = "faq-item";
const class_FaqCodigo = "faq-codigo";

const DatosFaq = [
  {
    categoria: "Primeros pasos",
    preguntas: [
      {
        pregunta: "¿Qué lenguaje de programación me conviene aprender primero?",
        respuesta:
          "Depende de lo que quieras hacer. Si te interesa la web, JavaScript es el camino directo. Si querés una base sólida para software de escritorio o videojuegos, C# es muy buena opción. Python es otra alternativa popular por su sintaxis simple. Lo importante es elegir uno y dominar los conceptos, porque después pasar de un lenguaje a otro es mucho más fácil.",
      },
      {
        pregunta: "¿Necesito ser bueno en matemática para programar?",
        respuesta:
          "No. Para la mayoría de los desarrollos alcanza con operaciones básicas y, sobre todo, con razonamiento lógico: dividir un problema en pasos y ordenarlos. La matemática avanzada se vuelve necesaria solo en áreas puntuales, como gráficos 3D, ciencia de datos o criptografía. Lo que sí se entrena con la práctica es la lógica.",
      },
      {
        pregunta: "¿Cuánto tiempo lleva aprender a programar?",
        respuesta:
          "Con práctica constante, en unos pocos meses podés manejar los conceptos básicos y hacer programas sencillos. Sentirte cómodo con proyectos más grandes lleva más tiempo, y en realidad nunca se termina de aprender porque las tecnologías cambian. Es más útil programar un rato todos los días que hacerlo muchas horas de forma esporádica.",
      },
      {
        pregunta: "¿Hace falta una computadora potente para programar?",
        respuesta:
          "Para empezar, no. Cualquier equipo moderno con 8 GB de RAM alcanza para escribir código, correr un editor y probar programas chicos. La potencia pasa a importar con proyectos pesados: videojuegos, edición de video, máquinas virtuales o inteligencia artificial. En las secciones de Reviews y Guías de Compra de este sitio vas a encontrar recomendaciones según tu presupuesto.",
      },
      {
        pregunta: "¿Qué es un IDE y en qué se diferencia de un editor de texto?",
        respuesta:
          "Un editor de texto solo te deja escribir código. Un IDE (entorno de desarrollo integrado), como Visual Studio, además trae en un solo programa el compilador, el depurador, el autocompletado y las herramientas de proyecto. Visual Studio Code queda en el medio: es un editor liviano que, con extensiones, se acerca mucho a un IDE.",
      },
    ],
  },
  {
    categoria: "Conceptos básicos",
    preguntas: [
      {
        pregunta: "¿Qué es un algoritmo?",
        respuesta:
          "Es una secuencia ordenada de pasos para resolver un problema. Una receta de cocina es un algoritmo: tiene entradas (los ingredientes), pasos claros y un resultado. En programación, ordenar una lista de nombres o calcular el promedio de unas notas son ejemplos de algoritmos. Un buen algoritmo resuelve el problema con la menor cantidad de pasos posible.",
      },
      {
        pregunta: "¿Qué diferencia hay entre un lenguaje compilado y uno interpretado?",
        respuesta:
          "En un lenguaje compilado, como C#, un compilador traduce todo el código antes de ejecutarlo y genera un programa listo para correr. En uno interpretado, como JavaScript, un intérprete lee y ejecuta el código línea por línea al momento. Lo compilado suele detectar errores antes y rendir más rápido. Lo interpretado es más flexible para probar cambios al instante.",
      },
      {
        pregunta: "¿Qué es una variable y para qué sirve?",
        respuesta:
          "Una variable es un espacio con nombre en la memoria donde el programa guarda un dato para usarlo o modificarlo más adelante. Es como una caja etiquetada: la etiqueta es el nombre (vidas) y adentro va el valor (3). Gracias a las variables un programa puede recordar el puntaje de un jugador, el nombre de un usuario o el resultado de una cuenta.",
        codigos: [
          { lenguaje: "C#", texto: "int vidas = 3;\nvidas = vidas - 1;   // ahora vale 2" },
        ],
      },
      {
        pregunta: "¿Qué son los tipos de datos?",
        respuesta:
          "Indican qué clase de información guarda una variable y qué se puede hacer con ella. Los más comunes son los números (enteros y decimales), el texto (string) y los valores verdadero o falso (booleanos). No se puede, por ejemplo, multiplicar un texto por un número con sentido. Cada lenguaje maneja los tipos a su manera, pero la idea es la misma.",
        codigos: [
          {
            lenguaje: "JavaScript",
            texto: 'let nombre = "Ana";    // texto (string)\nlet edad = 20;         // número\nlet esAlumna = true;   // booleano',
          },
        ],
      },
      {
        pregunta: "¿Qué es un bucle (for, while) y cuándo se usa?",
        respuesta:
          "Un bucle repite un bloque de código mientras se cumpla una condición o una cantidad fija de veces. Se usa cuando tenés que hacer lo mismo muchas veces, como recorrer una lista de productos o repetir un turno hasta que termine la partida. El for conviene cuando sabés cuántas vueltas son, y el while cuando depende de una condición.",
        codigos: [
          {
            lenguaje: "JavaScript",
            texto: 'for (let i = 1; i <= 3; i++) {\n  console.log("Vuelta " + i);\n}',
          },
        ],
      },
      {
        pregunta: "¿Qué es una función y por qué conviene usarlas?",
        respuesta:
          "Una función es un bloque de código con nombre que realiza una tarea y puede recibir datos y devolver un resultado. Conviene usarlas para no repetir código: lo escribís una vez y lo llamás las veces que necesites. Además, hacen que el programa sea más fácil de leer, de probar y de corregir, porque cada función se ocupa de una sola cosa.",
        codigos: [
          {
            lenguaje: "C#",
            texto: "int Sumar(int a, int b)\n{\n    return a + b;\n}\n\nint total = Sumar(2, 3);   // 5",
          },
        ],
      },
      {
        pregunta: "¿Qué es la programación orientada a objetos?",
        respuesta:
          "Es una forma de organizar el código en objetos que combinan datos (atributos) y acciones (métodos). Primero se define una clase, que funciona como molde, y a partir de ella se crean objetos. Por ejemplo, la clase Jugador puede tener nombre y vidas, y un método para perder una vida. Facilita reutilizar código y modelar cosas del mundo real.",
        codigos: [
          {
            lenguaje: "C#",
            texto: 'class Jugador\n{\n    public string Nombre;\n    public int Vidas = 3;\n\n    public void PerderVida()\n    {\n        Vidas--;\n    }\n}\n\nvar jugador1 = new Jugador { Nombre = "Ana" };\njugador1.PerderVida();   // Vidas = 2',
          },
        ],
      },
    ],
  },
  {
    categoria: "Cómo se trabaja en el mundo real",
    preguntas: [
      {
        pregunta: "¿Qué diferencia hay entre frontend y backend?",
        respuesta:
          "El frontend es la parte que ve y usa la persona en su navegador: botones, textos, imágenes y formularios, hechos con HTML, CSS y JavaScript. El backend es la parte que corre en un servidor y se encarga de la lógica, de guardar información en bases de datos y de responder a los pedidos del frontend. Quien trabaja en ambas partes se llama full stack.",
      },
      {
        pregunta: "¿Qué son Git y GitHub, y para qué sirven?",
        respuesta:
          "Git es un sistema de control de versiones: guarda el historial de cambios de tu proyecto para que puedas volver atrás o trabajar en ramas sin romper nada. GitHub es un sitio web que aloja tus repositorios en la nube, permite colaborar con otras personas y publicar sitios con GitHub Pages. Con git commit guardás un cambio y con git push lo subís.",
      },
      {
        pregunta: "¿Qué es una base de datos y cuándo se usa?",
        respuesta:
          "Es un sistema para almacenar información de forma organizada y poder consultarla, modificarla o eliminarla. Se usa cuando el programa tiene que recordar datos aunque se cierre: usuarios, productos, compras o puntajes. Las bases relacionales, como SQL Server o MySQL, guardan los datos en tablas y se consultan con el lenguaje SQL.",
        codigos: [
          {
            lenguaje: "C#",
            texto: 'using var conexion = new SqlConnection(cadenaConexion);\nconexion.Open();\n\nvar comando = new SqlCommand("SELECT Nombre FROM Productos", conexion);\nusing var lector = comando.ExecuteReader();\nwhile (lector.Read())\n    Console.WriteLine(lector["Nombre"]);',
          },
        ],
      },
      {
        pregunta: "¿Qué es una API?",
        respuesta:
          "Una API es una forma ordenada en que dos programas se comunican. Funciona como el mozo de un restaurante: vos hacés el pedido, él se lo lleva a la cocina y te trae la respuesta, sin que tengas que saber cómo se prepara. Es lo que usa una app del clima para pedirle datos a un servidor, y normalmente responde en formato JSON.",
        codigos: [
          {
            lenguaje: "JavaScript",
            texto: 'const respuesta = await fetch("https://api.ejemplo.com/usuarios/1");\nconst usuario = await respuesta.json();\nconsole.log(usuario.nombre);',
          },
        ],
      },
    ],
  },
  {
    categoria: "Errores y aprendizaje",
    preguntas: [
      {
        pregunta: "¿Qué es un bug y cómo se busca y corrige un error?",
        respuesta:
          "Un bug es un error en el código que hace que el programa falle o se comporte distinto de lo esperado. Para encontrarlo, primero reproducilo y averiguá en qué punto deja de funcionar. Podés mostrar valores con console.log o Console.WriteLine, o usar el depurador del IDE para ejecutar paso a paso. Cambiá una sola cosa por vez y volvé a probar.",
        codigos: [
          {
            lenguaje: "JavaScript",
            texto: "const notas = [7, 8, 9];\n\n// Bug: <= recorre una posición de más\nfor (let i = 0; i <= notas.length; i++) {\n  console.log(notas[i]);   // la última vuelta imprime undefined\n}",
          },
        ],
      },
      {
        pregunta: "¿Cómo leo un mensaje de error sin desesperarme?",
        respuesta:
          "Los mensajes de error parecen intimidantes, pero casi siempre dicen qué falló y en qué archivo y línea. Empezá por leer el mensaje completo y mirá la primera línea que apunta a tu código. Si no lo entendés, copiá el texto y buscalo tal cual en internet: es muy probable que a alguien más le haya pasado lo mismo.",
      },
      {
        pregunta: "¿Conviene aprender con tutoriales o haciendo proyectos propios?",
        respuesta:
          "Conviene combinar ambos. Los tutoriales te dan la base y te muestran cómo se hacen las cosas, pero si solo los seguís, cuesta aplicar lo aprendido por tu cuenta. Los proyectos propios, aunque sean chicos, te obligan a resolver problemas reales y a buscar soluciones. Un buen equilibrio es aprender un concepto y aplicarlo enseguida en algo propio.",
      },
      {
        pregunta: "¿Puedo usar inteligencia artificial para aprender a programar sin volverme dependiente?",
        respuesta:
          "Sí, usada como tutor y no como atajo. Pedile que te explique un concepto o que revise tu código, pero primero intentá resolver el problema vos. Evitá copiar y pegar soluciones que no entendés, porque después no vas a poder corregirlas ni modificarlas. Probá siempre lo que genera, ya que puede equivocarse con total seguridad.",
      },
    ],
  },
];

function crearBloqueCodigo(codigo) {
  const figura = document.createElement("figure");
  figura.classList.add(class_FaqCodigo);

  const lenguaje = document.createElement("figcaption");
  lenguaje.textContent = codigo.lenguaje;
  figura.appendChild(lenguaje);

  const pre = document.createElement("pre");
  const code = document.createElement("code");
  code.textContent = codigo.texto;
  pre.appendChild(code);
  figura.appendChild(pre);

  return figura;
}

function crearFaq() {
  const contenedor = document.getElementById("contenedor_faq");

  DatosFaq.forEach((grupo) => {
    const seccion = document.createElement("section");
    seccion.classList.add(class_FaqCategoria);
    contenedor.appendChild(seccion);

    const titulo = document.createElement("h3");
    titulo.textContent = grupo.categoria;
    seccion.appendChild(titulo);

    grupo.preguntas.forEach((item) => {
      const detalle = document.createElement("details");
      detalle.classList.add(class_FaqItem);
      seccion.appendChild(detalle);

      const pregunta = document.createElement("summary");
      pregunta.textContent = item.pregunta;
      detalle.appendChild(pregunta);

      const respuesta = document.createElement("p");
      respuesta.textContent = item.respuesta;
      detalle.appendChild(respuesta);

      if (item.codigos != null) {
        item.codigos.forEach((codigo) => {
          detalle.appendChild(crearBloqueCodigo(codigo));
        });
      }
    });
  });
}