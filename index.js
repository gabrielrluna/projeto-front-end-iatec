var listaProdutos = [];


function cadastrar() {
    var produto = $("#produto").val();
    var marca = $("#marca").val();
    var peso = $("#peso").val();
    var setor = $("#setor").val();

    var validacao = validFormulario(produto, marca, peso, setor);
        if (!validacao){
            alert("Preencha todos os dados solicitados");
            return;
        }

        let infProduto = {produto, marca, peso, setor}
        listaProdutos.push(infProduto);
        AdicionarProduto(infProduto);
    }

function AdicionarProduto(infProduto) {
    var elementoHtml = document.getElementById("lista-produtos");
    var novoProduto =`
        <div>
            <p>Produto: ${infProduto.produto}</p>
            <p>Marca: ${infProduto.marca}</p>
            <p>Peso: ${infProduto.peso}</p>
            <p>Setor: ${infProduto.setor}</p>

            <button onclick='ExcluirProduto(this)' class="btn btn-danger">
            <i class="fa-solid fa-xmark"></i>
            </button>
        </div>`;
    elementoHtml.insertAdjacentHTML("beforeend",novoProduto);
}

function ExcluirProduto(element) {
    element.parentNode.remove();
    
}

function validFormulario(produto, marca, peso, setor) {
    if (!produto || !marca || !peso || !setor){
        return false;
    } return true;
    
}
