function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
      // Constrói o HTML para cada resultado, formatando os dados do objeto
      resultados += `
        <div class="item-resultado">
          <h2><a href="#">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  
    // Atribui a string com os resultados HTML à seção, substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }




