// function checkAuth(){
//     const token = localStorage.getItem('token');

//     if(!token){
//         window.location.href = '/Login/index.html';
//     }
// }

// window.onload = checkAuth;

/*<div class="dados">
    <div class="avatar">YT</div>
    <div class="info">
        <p><strong>Yuki Tanaka</strong> renewed Atlas of the Stars</p>
    </div>
    <span class="tempo">yesterday</span>
</div>*/

const dados = [
  { nome: "Amelia Brookes", msg: "borrowed The Crimson Codex", tempo: "yesterday" },
  { nome: "Tomás Oliveira", msg: "returned late Thoughts at Dusk", tempo: "5h ago" },
  { nome: "Sofia Marin", msg: "registered new student Clara Nogueira", tempo: "5h ago" },
  { nome: "Yuki Tanaka", msg: "renewed Atlas of the Stars", tempo: "yesterday" },
  { nome: "Yuki Tanaka", msg: "renewed Atlas of the Stars", tempo: "8h ago" },
  { nome: "Jailton Junior", msg: "renewed Atlas of the Stars", tempo: "8h ago" },
  { nome: "JAJA JAJA", msg: "renewed JAJA of the Stars", tempo: "12h ago" },
];

const lista = document.querySelector(".lista");

function Dados(){
    dados.forEach(element => {
    const nomes = element.nome.split(" ");
    const primeiraLetra = nomes[0].split("")[0]; 
    const segundaLetra = nomes[1].split("")[0];
    const avatar = primeiraLetra + segundaLetra;
    const info = element.nome + element.msg

    const paragrafo = document.createElement("p");
    paragrafo.innerText = info;
    
    const avatarDiv = document.createElement("div");
    avatarDiv.classList.add("avatar");
    avatarDiv.innerText = avatar;
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");
    infoDiv.appendChild(paragrafo);
    const tempoSpan = document.createElement("span");
    tempoSpan.classList.add("tempo");
    tempoSpan.innerText = element.tempo;

    const dados = document.createElement("div");
    dados.classList.add("dados");

    dados.appendChild(avatarDiv);
    dados.appendChild(infoDiv);
    dados.appendChild(tempoSpan);

    lista.appendChild(dados);
    });
}


window.onload = Dados;
