# Inventario2.0

## Objetivos 🥅

Crear una interfaz en HTML para manipular un INVENTARIO de productos, para almacenar la información debemos usar un vector (no usar BDs ni local storage).
La información de cada producto debe permitir guardar el código, el nombre,  cantidad y el costo.


## Caracteristicas

- LOS ELEMENTOS DEBERÁN AGREGARSE Y QUEDAR ALMACENADOS ORDENADOS DE MANERA ASCENDENTE POR EL CÓDIGO QUE SERÁ NUMÉRICO.
- En la interfaz (una sola pantalla) tener los inputs para cada dato, los botones para las tareas a realizar que se describen a continuación y un div para ir describiendo las actividades que se van realizando y sus resultados.

Botones :
- Agregar nuevo producto
- Eliminar un producto por código, deberá devolver el producto (si existe) o null
- Buscar un producto por código
- Recuperar todos los productos //listar
- Recuperar todos los productos en orden inverso a como se ingresaron//listar inverso

No se implementa el INSERTAR ni el MODIFICAR

- No usar swal.fire para las interfaces
- Evitar el uso de alert y confirm
- No shift, no unshift, no splice, no reverse, no NADA de lo que ya hace la magia (push y pop permitidos)