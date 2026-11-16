// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtaXwGVy1Z9QRYQKf0syZ4cllpFD9Qe7c",
  authDomain: "lpgamingdev.firebaseapp.com",
  projectId: "lpgamingdev",
  storageBucket: "lpgamingdev.firebasestorage.app",
  messagingSenderId: "429343637803",
  appId: "1:429343637803:web:fd1cfebf83bad3e8fa856e",
};

//SDK Y COLECCION NOSQL
const SDK = "https://www.gstatic.com/firebasejs/10.12.2/";
const coleccion = "testimonios";

//GESTION DE LA CONEXION
let conexion = null;

function conectar() {
  if (!conexion) {
    conexion = inicializarConexion();

    conexion.catch(() => { conexion = null;});
  }
  return conexion;
}

async function inicializarConexion() {
  const { initializeApp } = await import(SDK + "firebase-app.js");
  const firestore = await import(SDK + "firebase-firestore.js");

  const app = initializeApp(firebaseConfig);

  return { db: firestore.getFirestore(app), firestore };
}

//GUARDADO Y RECUPERACION DE TESTIMONIOS

async function guardarTestimonio(testimonio) {
  const { db, firestore } = await conectar();

  await firestore.addDoc(firestore.collection(db, coleccion), {
    nombre: testimonio.nombre,
    estrellas: Number(testimonio.estrellas),
    comentario: testimonio.comentario,
    fecha: firestore.serverTimestamp(),
  });
}

async function obtenerTestimonios(cantidad = 20) {
  const { db, firestore } = await conectar();
  const consulta = firestore.query(
    firestore.collection(db, coleccion),
    firestore.orderBy("fecha", "desc"),
    firestore.limit(cantidad),
  );
  const resultado = await firestore.getDocs(consulta);
  return resultado.docs.map((documento) => {
    const datos = documento.data();
    return {
      id: documento.id,
      ...datos,
      fecha: datos.fecha ? datos.fecha.toDate() : null,
    };
  });
}
