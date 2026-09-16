using System;
using System.Linq;

namespace AlgoritmosDeOrdenamiento
{
    /// <summary>
    /// Colección de algoritmos clásicos de ordenamiento.
    /// Los nombres de métodos, variables y comentarios están en español;
    /// se conservan en inglés únicamente las palabras reservadas del lenguaje.
    /// </summary>
    public static class Ordenamientos
    {
        /// <summary>
        /// Ordenamiento Burbuja: intercambia elementos adyacentes hasta que no queden inversiones.
        /// Tiempo: O(n^2) | Espacio: O(1)
        /// </summary>
        public static void OrdenamientoBurbuja(int[] arreglo)
        {
            for (int i = 0; i < arreglo.Length - 1; i++)
            {
                for (int j = 0; j < arreglo.Length - 1 - i; j++)
                {
                    if (arreglo[j] > arreglo[j + 1])
                    {
                        (arreglo[j], arreglo[j + 1]) = (arreglo[j + 1], arreglo[j]);
                    }
                }
            }
        }

        /// <summary>
        /// Ordenamiento por Selección: busca el menor elemento en cada pasada.
        /// Tiempo: O(n^2) | Espacio: O(1)
        /// </summary>
        public static void OrdenamientoPorSeleccion(int[] arreglo)
        {
            for (int i = 0; i < arreglo.Length - 1; i++)
            {
                int indiceMinimo = i;
                for (int j = i + 1; j < arreglo.Length; j++)
                {
                    if (arreglo[j] < arreglo[indiceMinimo])
                    {
                        indiceMinimo = j;
                    }
                }
                (arreglo[i], arreglo[indiceMinimo]) = (arreglo[indiceMinimo], arreglo[i]);
            }
        }

        /// <summary>
        /// Ordenamiento por Inserción: desplaza cada elemento a su posición correcta
        /// dentro de la parte ya ordenada.
        /// Tiempo: O(n^2) | Espacio: O(1)
        /// </summary>
        public static void OrdenamientoPorInsercion(int[] arreglo)
        {
            for (int i = 1; i < arreglo.Length; i++)
            {
                int actual = arreglo[i];
                int j = i - 1;
                while (j >= 0 && arreglo[j] > actual)
                {
                    arreglo[j + 1] = arreglo[j];
                    j--;
                }
                arreglo[j + 1] = actual;
            }
        }

        /// <summary>
        /// Ordenamiento por Montículo (Heap Sort): construye un montículo máximo
        /// y extrae el mayor elemento repetidamente.
        /// Tiempo: O(n log n) | Espacio: O(1)
        /// </summary>
        public static void OrdenamientoPorMonticulo(int[] arreglo)
        {
            int n = arreglo.Length;

            for (int i = n / 2 - 1; i >= 0; i--)
            {
                Apilar(arreglo, n, i);
            }

            for (int i = n - 1; i > 0; i--)
            {
                (arreglo[0], arreglo[i]) = (arreglo[i], arreglo[0]);
                Apilar(arreglo, i, 0);
            }
        }

        private static void Apilar(int[] arreglo, int tamano, int raiz)
        {
            int mayor = raiz;
            int izquierda = 2 * raiz + 1;
            int derecha = 2 * raiz + 2;

            if (izquierda < tamano && arreglo[izquierda] > arreglo[mayor])
            {
                mayor = izquierda;
            }

            if (derecha < tamano && arreglo[derecha] > arreglo[mayor])
            {
                mayor = derecha;
            }

            if (mayor != raiz)
            {
                (arreglo[raiz], arreglo[mayor]) = (arreglo[mayor], arreglo[raiz]);
                Apilar(arreglo, tamano, mayor);
            }
        }

        /// <summary>
        /// Ordenamiento por Mezcla (Merge Sort): divide el arreglo en mitades,
        /// las ordena recursivamente y luego las combina.
        /// Tiempo: O(n log n) | Espacio: O(n)
        /// </summary>
        public static void OrdenamientoPorMezcla(int[] arreglo, int inicio, int fin)
        {
            if (inicio >= fin)
            {
                return;
            }

            int medio = (inicio + fin) / 2;
            OrdenamientoPorMezcla(arreglo, inicio, medio);
            OrdenamientoPorMezcla(arreglo, medio + 1, fin);
            Mezclar(arreglo, inicio, medio, fin);
        }

        private static void Mezclar(int[] arreglo, int inicio, int medio, int fin)
        {
            int[] mitadIzquierda = arreglo[inicio..(medio + 1)];
            int[] mitadDerecha = arreglo[(medio + 1)..(fin + 1)];

            int i = 0, j = 0, k = inicio;

            while (i < mitadIzquierda.Length && j < mitadDerecha.Length)
            {
                arreglo[k++] = mitadIzquierda[i] <= mitadDerecha[j]
                    ? mitadIzquierda[i++]
                    : mitadDerecha[j++];
            }

            while (i < mitadIzquierda.Length)
            {
                arreglo[k++] = mitadIzquierda[i++];
            }

            while (j < mitadDerecha.Length)
            {
                arreglo[k++] = mitadDerecha[j++];
            }
        }

        /// <summary>
        /// Ordenamiento Rápido (Quick Sort): particiona el arreglo alrededor de un pivote.
        /// Tiempo: O(n log n) promedio | Espacio: O(log n)
        /// </summary>
        public static void OrdenamientoRapido(int[] arreglo, int inicio, int fin)
        {
            if (inicio >= fin)
            {
                return;
            }

            int posicionPivote = Particionar(arreglo, inicio, fin);
            OrdenamientoRapido(arreglo, inicio, posicionPivote - 1);
            OrdenamientoRapido(arreglo, posicionPivote + 1, fin);
        }

        private static int Particionar(int[] arreglo, int inicio, int fin)
        {
            int pivote = arreglo[fin];
            int i = inicio - 1;

            for (int j = inicio; j < fin; j++)
            {
                if (arreglo[j] < pivote)
                {
                    i++;
                    (arreglo[i], arreglo[j]) = (arreglo[j], arreglo[i]);
                }
            }

            (arreglo[i + 1], arreglo[fin]) = (arreglo[fin], arreglo[i + 1]);
            return i + 1;
        }

        /// <summary>
        /// Ordenamiento por Conteo (Counting Sort): cuenta ocurrencias de cada valor,
        /// nunca compara elementos entre sí.
        /// Tiempo: O(n + k) | Espacio: O(n + k)
        /// </summary>
        public static void OrdenamientoPorConteo(int[] arreglo)
        {
            if (arreglo.Length == 0)
            {
                return;
            }

            int maximo = arreglo.Max();
            int[] conteo = new int[maximo + 1];

            foreach (int valor in arreglo)
            {
                conteo[valor]++;
            }

            int indice = 0;
            for (int valor = 0; valor <= maximo; valor++)
            {
                for (int veces = 0; veces < conteo[valor]; veces++)
                {
                    arreglo[indice++] = valor;
                }
            }
        }

        /// <summary>
        /// Ordenamiento Radix (Radix Sort): ordena de manera estable dígito por dígito,
        /// comenzando por el menos significativo.
        /// Tiempo: O(d * (n + k)) | Espacio: O(n + k)
        /// </summary>
        public static void OrdenamientoRadix(int[] arreglo)
        {
            if (arreglo.Length == 0)
            {
                return;
            }

            int maximo = arreglo.Max();

            for (int exponente = 1; maximo / exponente > 0; exponente *= 10)
            {
                OrdenamientoPorConteoSegunDigito(arreglo, exponente);
            }
        }

        private static void OrdenamientoPorConteoSegunDigito(int[] arreglo, int exponente)
        {
            int n = arreglo.Length;
            int[] salida = new int[n];
            int[] conteo = new int[10];

            foreach (int numero in arreglo)
            {
                conteo[(numero / exponente) % 10]++;
            }

            for (int i = 1; i < 10; i++)
            {
                conteo[i] += conteo[i - 1];
            }

            for (int i = n - 1; i >= 0; i--)
            {
                int digito = (arreglo[i] / exponente) % 10;
                salida[--conteo[digito]] = arreglo[i];
            }

            Array.Copy(salida, arreglo, n);
        }
    }
}
