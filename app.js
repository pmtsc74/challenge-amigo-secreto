// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar que el nombre no esté vacío y no esté repetido
    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre); // Agregar el nombre al array
        actualizarListaAmigos(); // Actualizar la lista en el DOM
        input.value = ''; // Limpiar el campo de texto
    } else {
        alert('Por favor, ingresa un nombre válido o que no esté repetido.');
    }
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizar

    // Recorrer el array de amigos y agregarlos a la lista
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya al menos 2 amigos para hacer el sorteo
    if (amigos.length < 2) {
        alert('Necesitas al menos 2 amigos para hacer un sorteo.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados anteriores

    // Mezclar el array de amigos de forma aleatoria
    const amigosSorteados = [...amigos].sort(() => Math.random() - 0.5);

       // Mostrar el resultado
       const li = document.createElement('li');
       li.textContent = `El amigo secreto sorteado es: ${amigosSorteados[0]}`; // Solo muestra el primer nombre
       resultado.appendChild(li);
   }