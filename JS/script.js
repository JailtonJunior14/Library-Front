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

const livros = [
    {titulo: "The Hobbit", autor:"J.R.R. Tolkien", editora:"HarperCollins", ano:2019, imagem:"../91M9xPIf10L.jpg"},
    {titulo: "livro", autor:"author", editora:"editora", ano:1900, imagem: "https://loremflickr.com/320/240"},
    {titulo: "livro", autor:"author", editora:"editora", ano:1900, imagem: "https://loremflickr.com/320/240"},
    {titulo: "livro", autor:"author", editora:"editora", ano:1900, imagem: "https://loremflickr.com/320/240"},
    {titulo: "livro", autor:"author", editora:"editora", ano:1900, imagem: "https://loremflickr.com/320/240"},
    {titulo: "livro", autor:"author", editora:"editora", ano:1900, imagem: "https://loremflickr.com/320/240"},
    {titulo: "livro", autor:"author", editora:"editora", ano:1900, imagem: "https://loremflickr.com/320/240"},
    {titulo: "livro", autor:"author", editora:"editora", ano:1900, imagem: "https://loremflickr.com/320/240"},
    {titulo: "livro", autor:"author", editora:"editora", ano:1900, imagem: "https://loremflickr.com/320/240"},
];

const loans = [
    { Student: "Ana Souza",        Book: "Dom Casmurro",               Borrowed: "2026-05-01", Due: "2026-05-15", Status: "Borrowed" },
    { Student: "Carlos Mendes",    Book: "O Hobbit",                   Borrowed: "2026-05-03", Due: "2026-05-17", Status: "Borrowed" },
    { Student: "Juliana Lima",     Book: "Clean Code",                 Borrowed: "2026-04-28", Due: "2026-05-12", Status: "Late" },
    { Student: "Pedro Henrique",   Book: "Harry Potter",               Borrowed: "2026-05-02", Due: "2026-05-16", Status: "Borrowed" },
    { Student: "Mariana Alves",    Book: "JavaScript: The Good Parts", Borrowed: "2026-04-25", Due: "2026-05-09", Status: "Returned" },
    { Student: "Lucas Ferreira",   Book: "1984",                       Borrowed: "2026-05-04", Due: "2026-05-18", Status: "Borrowed" },
    { Student: "Fernanda Rocha",   Book: "O Pequeno Príncipe",         Borrowed: "2026-04-20", Due: "2026-05-04", Status: "Returned" },
    { Student: "Rafael Martins",   Book: "Python Crash Course",        Borrowed: "2026-05-05", Due: "2026-05-19", Status: "Borrowed" },
    { Student: "Camila Ribeiro",   Book: "Algoritmos",                 Borrowed: "2026-04-30", Due: "2026-05-14", Status: "Late" },
    { Student: "Bruno Oliveira",   Book: "Senhor dos Anéis",           Borrowed: "2026-05-06", Due: "2026-05-20", Status: "Borrowed" }
];


const students = [
    { loan: 5, nome: "Ana Souza", email: "ana.souza@email.com", curso: "Engenharia de Software" },
    { loan: 5, nome: "Carlos Mendes", email: "carlos.mendes@email.com", curso: "Sistemas de Informação" },
    { loan: 5, nome: "Juliana Alves", email: "juliana.alves@email.com", curso: "Ciência da Computação" },
    { loan: 5, nome: "Pedro Henrique", email: "pedro.h@email.com", curso: "ADS" },
    { loan: 5, nome: "Mariana Lima", email: "mariana.lima@email.com", curso: "Engenharia da Computação" },
    { loan: 5, nome: "Lucas Ferreira", email: "lucas.ferreira@email.com", curso: "Banco de Dados" },
    { loan: 5, nome: "Fernanda Rocha", email: "fernanda.rocha@email.com", curso: "Design Digital" },
    { loan: 5, nome: "Rafael Costa", email: "rafael.costa@email.com", curso: "Redes de Computadores" },
    { loan: 5, nome: "Beatriz Martins", email: "beatriz.m@email.com", curso: "Engenharia de Software" },
    { loan: 5, nome: "Gustavo Ribeiro", email: "gustavo.r@email.com", curso: "Segurança da Informação" },
    { loan: 5, nome: "Camila Fernandes", email: "camila.fernandes@email.com", curso: "Ciência da Computação" },
    { loan: 5, nome: "João Vitor", email: "joao.vitor@email.com", curso: "Sistemas de Informação" },
    { loan: 5, nome: "Larissa Gomes", email: "larissa.gomes@email.com", curso: "UX/UI Design" },
    { loan: 5, nome: "Thiago Nunes", email: "thiago.nunes@email.com", curso: "Análise de Sistemas" },
    { loan: 5, nome: "Patrícia Oliveira", email: "patricia.oliveira@email.com", curso: "Banco de Dados" },
    { loan: 5, nome: "Renato Barros", email: "renato.barros@email.com", curso: "Redes de Computadores" },
    { loan: 5, nome: "Aline Castro", email: "aline.castro@email.com", curso: "Engenharia da Computação" },
    { loan: 5, nome: "Diego Santana", email: "diego.santana@email.com", curso: "Segurança da Informação" },
];


export function TabelaStudents(){
    const tableContainer = document.querySelector(".table-container");

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headerline = document.createElement("tr");
    const columns = ["LOAN", "NOME", "EMAIL", "CURSO", "ACTION"];

    columns.forEach(text => {
        const th = document.createElement("th");

        th.innerText = text;

        headerline.appendChild(th);
    })

    thead.appendChild(headerline);
    table.appendChild(thead);

    students.forEach(student =>{
        const line = document.createElement("tr");

        Object.values(student).forEach(text => {
            const td = document.createElement("td");
            td.innerText = text;
            line.appendChild(td);
        });

        const tdAction = document.createElement("td");
        tdAction.classList.add("action");
        tdAction.innerHTML = `
            <span class="material-symbols-outlined"> delete </span>
            <span class="material-symbols-outlined"> edit </span>
            `;
        line.appendChild(tdAction);

        tbody.appendChild(line);
    });

    table.appendChild(tbody);

    tableContainer.appendChild(table);
}

export function TabelaLoans(){
    const tableContainer = document.querySelector(".table-container");

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headerline = document.createElement("tr");
    const columns = ["Student", "Book", "Borrowed", "Due", "Status","ACTION"];

    columns.forEach(text => {
        const th = document.createElement("th");

        th.innerText = text;

        headerline.appendChild(th);
    })

    thead.appendChild(headerline);
    table.appendChild(thead);

    loans.forEach(student =>{
        const line = document.createElement("tr");

        Object.values(student).forEach(text => {
            const td = document.createElement("td");
            td.innerText = text;
            line.appendChild(td);
        });

        const tdAction = document.createElement("td");
        tdAction.classList.add("action");
        tdAction.innerHTML = `
            <span class="material-symbols-outlined"> delete </span>
            <span class="material-symbols-outlined"> edit </span>
            `;
        line.appendChild(tdAction);

        tbody.appendChild(line);
    });

    table.appendChild(tbody);

    tableContainer.appendChild(table);
}



export function Dados(){
    const lista = document.querySelector(".lista");
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

    const item = document.createElement("div");
    item.classList.add("dados");

    item.appendChild(avatarDiv);
    item.appendChild(infoDiv);
    item.appendChild(tempoSpan);

    lista.appendChild(item);
    });
}


/*<div class="card">
            <div class="cover-wrapper">
                <img src="../91M9xPIf10L.jpg" alt="">
            </div>
            

            <div class="card-content">
                <div class="title">
                    <h3>O Hobbit</h3>
                </div>
                <div class="author">
                    <p>J.R.R. Tolkien</p>
                </div>
                <div class="meta">
                    <p>HarperCollins - 2019</p>
                </div>
            </div>
        </div>*/




// alert("to aqui");
export function Books(){
    const cardcontainer = document.querySelector(".card-container");
    if (!cardcontainer) {
        alert("card container não encontrado")
    }
    livros.forEach((element, i) => {
        const card = document.createElement("div");
        card.classList.add("card");
        const coverwrapper = document.createElement("div");
        coverwrapper.classList.add("cover-wrapper");

        const imagem = document.createElement("img");
        imagem.src = element.imagem;

        coverwrapper.appendChild(imagem)

        const cardcontent = document.createElement("div");
        cardcontent.classList.add("card-content");

        const title = document.createElement("div");
        title.classList.add("title");

        const titleText = document.createElement("h3");
        titleText.innerText = `${element.titulo} ${i}`;
        title.appendChild(titleText);

        const author = document.createElement("div");
        author.classList.add("author");

        const authorText = document.createElement("p");
        authorText.innerText = `${element.autor} ${i}`;
        author.appendChild(authorText);

        const meta = document.createElement("div");
        meta.classList.add("meta");


        const metaText = document.createElement("p");
        metaText.innerText = `${element.editora} ${i} - ${element.ano}`;
        meta.appendChild(metaText);


        cardcontent.appendChild(title);
        cardcontent.appendChild(author);
        cardcontent.appendChild(meta);

        card.appendChild(coverwrapper);
        card.appendChild(cardcontent);

        cardcontainer.appendChild(card);


    });
}


