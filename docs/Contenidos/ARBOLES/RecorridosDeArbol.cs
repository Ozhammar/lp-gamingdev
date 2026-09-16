using System;
using System.Collections.Generic;

namespace RecorridosDeArbol
{
    /// <summary>
    /// Representa un nodo de un árbol binario.
    /// </summary>
    public class Nodo
    {
        public int Valor;
        public Nodo Izquierdo;
        public Nodo Derecho;

        public Nodo(int valor)
        {
            Valor = valor;
        }
    }

    /// <summary>
    /// Colección de recorridos clásicos sobre árboles binarios.
    /// Los nombres de métodos, variables y comentarios están en español;
    /// se conservan en inglés únicamente las palabras reservadas del lenguaje.
    /// </summary>
    public static class Recorridos
    {
        /// <summary>
        /// Pre-Orden: Raíz -> Izquierdo -> Derecho.
        /// Útil para copiar o serializar la estructura del árbol.
        /// </summary>
        public static void PreOrden(Nodo raiz)
        {
            if (raiz == null)
            {
                return;
            }

            Console.Write(raiz.Valor + " ");
            PreOrden(raiz.Izquierdo);
            PreOrden(raiz.Derecho);
        }

        /// <summary>
        /// In-Orden: Izquierdo -> Raíz -> Derecho.
        /// En un Árbol Binario de Búsqueda (BST), recorre los valores de menor a mayor.
        /// </summary>
        public static void InOrden(Nodo raiz)
        {
            if (raiz == null)
            {
                return;
            }

            InOrden(raiz.Izquierdo);
            Console.Write(raiz.Valor + " ");
            InOrden(raiz.Derecho);
        }

        /// <summary>
        /// Post-Orden: Izquierdo -> Derecho -> Raíz.
        /// Útil para eliminar nodos o liberar memoria (procesa hijos antes que al padre).
        /// </summary>
        public static void PostOrden(Nodo raiz)
        {
            if (raiz == null)
            {
                return;
            }

            PostOrden(raiz.Izquierdo);
            PostOrden(raiz.Derecho);
            Console.Write(raiz.Valor + " ");
        }

        /// <summary>
        /// Recorrido por Niveles (Level Order / BFS): visita el árbol nivel por nivel,
        /// de izquierda a derecha, usando una cola en vez de recursión.
        /// </summary>
        public static void RecorridoPorNiveles(Nodo raiz)
        {
            if (raiz == null)
            {
                return;
            }

            Queue<Nodo> cola = new Queue<Nodo>();
            cola.Enqueue(raiz);

            while (cola.Count > 0)
            {
                Nodo actual = cola.Dequeue();
                Console.Write(actual.Valor + " ");

                if (actual.Izquierdo != null)
                {
                    cola.Enqueue(actual.Izquierdo);
                }

                if (actual.Derecho != null)
                {
                    cola.Enqueue(actual.Derecho);
                }
            }
        }
    }
}
