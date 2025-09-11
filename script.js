
function adicionarTarefa() {
    let input = document.querySelector("input"); 
    let valor = input.value; 

    let li = document.createElement("li");
    li.innerHTML = valor + ' <span onclick="deletarTarefa(this)">❌</span>';

    document.querySelector("ul").appendChild(li);

    input.value = ""; 
}

function deletarTarefa(elemento) {
    elemento.parentElement.remove(); 
    console.log("li");
}
