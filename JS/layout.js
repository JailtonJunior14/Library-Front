import { Books, Dados, TabelaStudents, TabelaLoans } from "./script.js";

export async function loadSideBar(){
    const response = await fetch('/Components/sidebar.html');
    const html = await response.text();

    document.getElementById('sidebar').innerHTML = html;
    // alert("to aqui");
}

export async function loadModalStudents() {
    const response = await fetch('/Components/modalCadastroAluno.html');
    const html = await response.text();

    const modal = document.getElementById('meuModal');
    modal.innerHTML = html;

    const btnFechar = modal.querySelector('#btnFechar');

    btnFechar.addEventListener('click', () =>{
        modal.close();
    });
    
}

export async function loadModalLibrarians() {
    const response = await fetch('/Components/modalCadastroBibliotecario.html')
    const html = await response.text();

    const modal = document.getElementById('meuModal');
    modal.innerHTML = html;

    const btnFechar = modal.querySelector('#btnFechar');

    btnFechar.addEventListener('click', () =>{
        modal.close();
    });
}



export async function loadModalLoans() {
    const response = await fetch('/Components/modalCadastroEmprestimo.html')
    const html = await response.text();

    const modal = document.getElementById('meuModal');
    modal.innerHTML = html;

    const btnFechar = modal.querySelector('#btnFechar');

    btnFechar.addEventListener('click', () =>{
        modal.close();
    });
}



export async function loadModalBooks() {
    const response = await fetch('/Components/modalCadastroLivro.html')
    const html = await response.text();

    const modal = document.getElementById('meuModal');
    modal.innerHTML = html;

    const btnFechar = modal.querySelector('#btnFechar');

    btnFechar.addEventListener('click', () =>{
        modal.close();
    });
}





export async function loadTableStudents(){
    const response = await fetch('/Components/table.html');
    const html = await response.text();

    document.getElementById('table').innerHTML = html;

    TabelaStudents();


    
}

export async function loadTableLoans() {
    const response = await fetch('/Components/table.html');
    const html = await response.text();

    document.getElementById('table').innerHTML = html;

    TabelaLoans();
}

export async function loadCardBook(){
    const response = await fetch('../Components/CardBook.html');
    const html = await response.text();

    document.getElementById('card-book').innerHTML = html;

    Books();
}