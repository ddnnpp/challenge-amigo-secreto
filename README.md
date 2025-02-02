<div align="center">
<h1>Desafío Amigo Secreto</h1>
<img src="https://dz2cdn1.dzone.com/storage/temp/14875386-javascript-developer-tips.jpg" height="50%" width="50%">
</div>

## Descripción
Se crearon las funciones indicadas en el Trello del desafío para lograr el resultado deseado, como se mostró en el video de explicación.
El programa puede recibir los nombres, mostrarlos en una lista y finalmente escoger uno aleatoriamente.

## Funciones
### *agregarAmigo()*
* Selecciona el valor del input (dónde se espera se coloque un nombre)
* Si el input está vacío, lanzará una alerta solicitando un nombre
* Si se insertó el nombre será agregado a una lista con el método `push()` y se vaciará el contenido del input
* Se ejecutará la función `listaAmigos()`

### *listaAmigos()*
* Selecciona una lista desordenada para agregarle elementos `<lil></li>`
* Se corre un bucle `for` para recorrer la lista de nombres y así poder agregarlos

### *sortearAmigo()*
* Se va a generar un número aleatorio con `Math.random()` y se va a redondear a la baja con `Math.floor()` para siempre generar un número de índice válido para obtener un valor del arreglo
* El método `Math.random` se multiplica por el tamaño del arreglo, se obtiene gracias al atributo `length`
* Se limpia el contenido de la lista y se agrega una cadena en el resultado indicando al amigo secreto sorteado

## Conclusiones
* Se puede mejorar haciendo algunas validaciones mas estrictas
* Se puede desactivar el uso del botón `sortear amigo` para que solamente se pueda usar una vez
* Si se agrega otro nombre después del sorteo y se presiona el botón de `añadir` se debería limpiar la lista anterior junto a la cadena de resultado y solo mostrar una nueva lista dejando posibilidad de un sorteo completamente nuevo
