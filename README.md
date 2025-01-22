# Amigo Secreto

**Acesse o projeto online:**  
[Amigo Secreto - Deploy no Vercel](https://challenge-amigo-secreto-neon.vercel.app/)

## Descrição
Este projeto consiste em uma aplicação simples e interativa para organizar um sorteio de "Amigo Secreto". O usuário pode adicionar nomes a uma lista e, em seguida, realizar o sorteio para selecionar um amigo secreto de forma aleatória.  

### Funcionalidades
1. **Adicionar nomes:**  
   - Os usuários podem inserir o nome de um amigo em um campo de texto e adicioná-lo à lista visível na página clicando no botão "Adicionar".
   - Caso o campo de texto esteja vazio, o sistema exibirá um alerta solicitando um nome válido.

2. **Visualizar a lista:**  
   - Os nomes inseridos serão exibidos em tempo real em uma lista na página.

3. **Sortear Amigo:**  
   - Ao clicar no botão "Sortear Amigo", um nome será escolhido aleatoriamente da lista e exibido na página.

---

## Linguagens Utilizadas
- **HTML**: Estrutura da página.  
- **CSS**: Estilização dos elementos da interface.  
- **JavaScript**: Lógica e interatividade da aplicação.

---

## Código JavaScript
Abaixo está o código JavaScript que implementa a lógica principal do projeto:

```javascript
let nome = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos');
let sorteado_html = document.getElementById('resultado');
let amigos = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
    amigos.push(nome.value); // Adiciona o nome ao array
    lista.innerHTML += amigos[amigos.length - 1] + '<br>'; // Atualiza a lista visível
    nome.value = ""; // Limpa o campo de entrada
}

// Função para sortear um amigo da lista
function sortearAmigo() {
    let tamanho = amigos.length; // Obtém o tamanho da lista
    console.log(tamanho); // Para depuração
    let sorteio_nome = parseInt(Math.random() * tamanho); // Sorteio aleatório
    console.log(sorteio_nome); // Para depuração
    sorteado_html.innerHTML = amigos[sorteio_nome]; // Exibe o nome sorteado
}
