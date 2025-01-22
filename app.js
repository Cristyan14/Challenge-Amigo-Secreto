let nome = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos');
let sorteado_html = document.getElementById('resultado');
let amigos = [];

function adicionarAmigo(){
    amigos.push(nome.value);
   
    lista.innerHTML += amigos[amigos.length - 1] + '<br>';
    nome.value = "";
}

function sortearAmigo(){
    let tamanho = amigos.length;
    console.log(tamanho);
    let sorteio_nome = parseInt(Math.random() * tamanho)
    console.log(sorteio_nome);
    sorteado_html.innerHTML = amigos[sorteio_nome];
}


