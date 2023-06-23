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
    <div id="uniProduto" class="bg-warning m-1 p-3 col">
    <p><b>Produto:</b> ${infProduto.produto}</p>
    <p><b>Marca:</b> ${infProduto.marca}</p>
    <p><b>Peso (em kg):</b> ${infProduto.peso} kg</p>
    <p><b>Setor:</b> ${infProduto.setor}</p>

    <button onclick='ExcluirProduto(this)' class="btn btn-danger"> Excluir Produto <i class="fa-solid fa-xmark"></i>
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


function quantidadeProdutos(listaProdutos){

    var qProdutos = document.getElementById("qProdutos");
    var quantProdutos = document.createElement('div');
    quantProdutos.innerHTML = `<p id="teste" class="text-center text-white"> Quantidade de produtos cadastrados: ${listaProdutos.length}</p>`;
    qProdutos.appendChild(quantProdutos);

}

// Configurando modo noturno
const pagina = document.querySelector ('body');
const botao = pagina.querySelector('#noturno');

botao.addEventListener('click', function(){
    pagina.classList.toggle ('modo-noturno');

    if (botao.textContent =='Ativar - Modo Noturno'){
        botao.textContent = 'Desativar - Modo Noturno' ;
} else {
    botao.textContent = 'Ativar - Modo Noturno';
}
});
