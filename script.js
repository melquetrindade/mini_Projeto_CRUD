class Produto {
    constructor(codigoBarras, nome, preco, descricao) {
        this.codigoBarras = codigoBarras;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }
}

var repositorio_produtos = []

function createProduct(){
    var codigoBarras = prompt("Digite o código de Barras do Produo: \n")
    var nome = prompt("Digite o nome do Produto: \n")
    var preco = prompt("Digite o valor do Produto: \n")
    var descricao = prompt("Digite a descrição do Produto: \n")
    if(codigoBarras && nome && preco && descricao){
        repositorio_produtos.push(new Produto(codigoBarras, nome, preco, descricao));
        alert("Produto cadastrado com sucesso!");
    }
    else{
        alert("Falha no cadastro do Produto. Por Favor, entre com todos os dados!")
    } 
}

function searchProduct(){
    var nome = prompt("Informe o nome do Produto a ser buscado: \n")
    if(nome){
        var achou = false
        repositorio_produtos.forEach((produto) => {
            if (produto.nome.includes(nome)) {
                achou = true
                alert(`Código de Barras: ${produto.codigoBarras}\nNome: ${produto.nome}\nPreco: ${produto.preco}\nDescricao: ${produto.descricao}`);
            }
        });
        if(!achou){
            alert("O Produto informado não existe no banco de dados do sistema!");
        }
    }
    else{
        alert("Falha ao buscar Produto. Por Favor, informe o nome do produto a ser buscado!")
    }
}

function updateProduct(){
    var nome = prompt("Informe o nome do Produto a ser atualizado: \n")
    var indexProduct = -1
    repositorio_produtos.forEach((produto, index) => {
        if (produto.nome.includes(nome)) {
            indexProduct = index
        }
    });
    if(indexProduct != -1){
        var new_codigoBarras = prompt("Digite o novo código de Barras do Produo: \n")
        var new_nome = prompt("Digite o novo nome do Produto: \n")
        var new_preco = prompt("Digite o novo valor do Produto: \n")
        var new_descricao = prompt("Digite a nova descrição do Produto: \n")
        if(new_codigoBarras && new_nome && new_preco && new_descricao){
            repositorio_produtos[indexProduct].codigoBarras = new_codigoBarras
            repositorio_produtos[indexProduct].nome = new_nome
            repositorio_produtos[indexProduct].preco = new_preco
            repositorio_produtos[indexProduct].descricao = new_descricao
            alert("Produto atualizado com sucesso!");
        }
        else{
            alert("Falha ao atualizar Produto. Por Favor, entre com todos os dados obrigatórios!")
        } 
    }
    else{
        alert("O Produto informado não existe no banco de dados do sistema!");
    }
}

function listProducts(){
    if(repositorio_produtos.length == 0){
        alert("Não existe produtos cadastrados no sistema!")
    }
    else{
        repositorio_produtos.forEach((produto, index) => {
            alert(`Lista de produtos cadastrados no sistema\n\nProduto ${index}:\n-------------------------------\nCódigo de Barras: ${produto.codigoBarras}\nNome: ${produto.nome}\nPreco: ${produto.preco}\nDescricao: ${produto.descricao}\n==================`)
        });
    } 
}

function deleteProduct(){
    var nome = prompt("Informe o nome do Produto a ser excluído: \n")
    if(nome){
        var indexProduct = -1
        repositorio_produtos.forEach((produto, index) => {
            if (produto.nome.includes(nome)) {
                indexProduct = index
            }
        });
        if(indexProduct != -1){
            repositorio_produtos.splice(indexProduct, 1);
            alert("Produto excluído com sucesso!");
        }
        else{
            alert("O Produto informado não existe no banco de dados do sistema!");
        }
    }
    else{
        alert("Falha ao buscar Produto. Por Favor, informe o nome do produto a ser excluído!")
    }
}

function main(){
    var op = -1

    while(op != 6){
        op = prompt("=============== \n MENU PRODUTOS \n=============== \n1-Cadastrar\n2-Buscar\n3-Atualizar\n4-Listar\n5-Deletar\n6-Sair\n===============");

        if(op == 1){
            createProduct()
        } else if(op == 2){
            searchProduct()
        } else if(op == 3){
            updateProduct()
        } else if(op == 4){
            listProducts()
        } else if(op == 5){
            deleteProduct()
        } else if (op == 6){
            alert('Encerrando o Sistema...')
        } else{
            alert("Opção inválida. Tente Novamente!")
        }
    }
}

main()
console.log(repositorio_produtos)