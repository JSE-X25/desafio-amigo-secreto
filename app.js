// 1. Crear un array para almacenar los nombres de los amigos
let amigos = []; 

// 2. Implementa una función para agregar amigos
function agregarAmigo() {
    const nombre = document.getElementById('amigo').value.trim();
    const regex = /^[A-Za-z]+(\s[A-Za-z]+)*$/;
    if (nombre === '' || !regex.test(nombre)) {
        alert('Por favor, ingrese un nombre válido');
        return;
    }
    amigos.push(nombre);
    mostrarListaAmigos();
    document.getElementById('amigo').value = '';
}

// 3. Implementa una función para actualizar la lista de amigos
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// 4. Implementa una función para sortear los amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, agregue al menos un amigo antes de sortear.');
        return;
    }
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(amigoSorteado);
}

function mostrarResultado(amigo) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${amigo}`;
    resultado.appendChild(li);
}