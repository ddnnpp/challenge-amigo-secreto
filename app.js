let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    console.log(nombreAmigo);
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(nombreAmigo);
        document.getElementById("amigo").value = "";
        listaAmigos()
    }
    console.log(amigos);
}

function listaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    let indice = 0;
    let maximoIndice = amigos.length;
    console.log(maximoIndice);
    if (amigos.length < 2) {
        alert("Agrega mas amigos");
    } else {
        indice = Math.floor(Math.random() * maximoIndice);
        console.log(indice);
        document.getElementById("listaAmigos").innerHTML = "";
        document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: ${amigos[indice]}`;
    }
}