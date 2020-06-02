## Estructuras de control

- Por medio de las estructuras de control podemos controlar el flujo de nuestro código y como queremos que se ejecute según se cumplan o no algunas condiciones
- Una de las estructuras más conocidas es el **if** y en español podemos reconocerlo como **si entonces**
- Esta estructura espera una condición **true** para que ingrese y ejecute el código que tiene dentro de su bloque

![if](https://file-wdvvncgzkb.now.sh)

- Como vemos en esta imágen tenemos una condición que se va a resolver en true o false
- En caso de que la condición sea verdadera (true) se va a ejecutar las distintas instrucciones
- En caso de que la condición sea negativa (false) no se ejecutan las instrucciones declaradas dentro de esta estructura y el código sigue su flujo

**Ejemplo:**

```js
// Estructura básica de un if
if (condicion) {
	// Se ejecuta el código que se escriba en esta sección si la condición es verdadera.
}
```

```js
if (true) {
	console.log('Se muestra este texto ya que la condición es true')
}
```

- Como podemos ver en el ejemplo anterior siempre se va a mostrar el mensaje ya que la condición siempre va a ser **true**
- Podemos escribir distintas condiciones que nos permitan elegir si vamos a ejecutar el código dentro de la estructura o no
- Por ejemplo podemos preguntar **SI** el **numero** es mayor o igual que 2 **Entonces** mostrar un mensaje en consola

**Ejemplo:**

```js
var numero = 2

// SI numero >= 2 ENTONCES mostrar en consola
if (numero >= 2) {
	console.log('El numero es mayor o igual a 2')
}
```

- El flujo del código se sigue ejecutando sin importar el resultado del if

**Ejemplo:**

```js
var numero = 1

if (numero >= 2) {
	console.log('Este mensaje no se ve')
}

console.log('Este mensaje se ve siempre se cumpla o no la condición del if')
```

#### Prácticas

[Ejercicio 49](https://github.com/Ada-IT/bootcamp-frontend/blob/master/03_javascript/estructurasControl/ejercicios/ej49.md)
[Ejercicio 50](https://github.com/Ada-IT/bootcamp-frontend/blob/master/03_javascript/estructurasControl/ejercicios/ej50.md)
[Ejercicio 51](https://github.com/Ada-IT/bootcamp-frontend/blob/master/03_javascript/estructurasControl/ejercicios/ej51.md)

- También existe la estructura if/else que nos permite controlar que pasa si la condición es falsa
- Es decir que en caso de que la condición sea verdadera entra en una parte de la estructura
- En caso de ser falsa la condición entonces entra en la otra sección
- Utilizamos la palabra **SI NO** para el **else**

![if/else](https://file-wdvvncgzkb.now.sh/)

**Ejemplo:**

```js
if (condicion) {
	// Entra en esta sección si se cumple la condición
} else {
	// Entra en esta sección si no se cumple la condición
}
```

```js
var numero = 2

if (numero === 2) {
	console.log('El número es 2')
} else {
	console.log('El número no es 2')
}
```

- Podemos leer este código de la siguiente manera: SI el número es igual a 2 entonces mostrar el mensaje 'El número es 2' SINO mostrar el mensaje 'El número no es 2'

#### Prácticas

[Ejercicio 52](https://github.com/Ada-IT/bootcamp-frontend/blob/master/03_javascript/estructurasControl/ejercicios/ej52.md)
[Ejercicio 53](https://github.com/Ada-IT/bootcamp-frontend/blob/master/03_javascript/estructurasControl/ejercicios/ej53.md)
[Ejercicio 54](https://github.com/Ada-IT/bootcamp-frontend/blob/master/03_javascript/estructurasControl/ejercicios/ej54.md)
