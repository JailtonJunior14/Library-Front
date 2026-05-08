export async function loadSideBar(){
    const response = await fetch('../Components/sidebar.html');
    const html = await response.text();

    document.getElementById('sidebar').innerHTML = html;
    // alert("to aqui");
}

export async function loadTableStudents(){
    const response = await fetch('../Components/table.html');
    const html = await response.text();

    document.getElementById('table').innerHTML = html;
    
}

export async function loadCardBook(){
    const response = await fetch('../Components/CardBook.html');
    const html = await response.text();

    document.getElementById('card-book').innerHTML = html;
}