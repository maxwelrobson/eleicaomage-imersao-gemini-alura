function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  
    //
  let campoPesquisa = document.getElementById("campo-pesquisa").value

  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um candidato ou candidata</p>"
    return
  }
  
  campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let partido = "";
  let numeroDeUrna = "";
  let descrisao = "";
  let tags = "";
  
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos)
  for (let dado of dados) {
  if (dado && dado.titulo) {

    titulo = dado.titulo.toLowerCase()
    partido = dado.partido.toLowerCase()
    numeroDeUrna = dado.numeroDeUrna.toLowerCase()
    tags = dado.tags.toLowerCase()
    descrisao = dado.descrisao.toLowerCase()
      //se titulo includes campoPesquisa 
      if (titulo.includes(campoPesquisa) || partido.includes(campoPesquisa) || numeroDeUrna.includes(campoPesquisa) || tags.includes(campoPesquisa) || descrisao.includes(campoPesquisa)) {
        // Constrói o HTML para cada resultado, formatando os dados do objeto
        resultados += `
      <div class="item-resultado">
        <h2>${dado.titulo}</h2>
        <p class="descricao-meta">Partido: ${dado.partido}</p>
        <p class="descricao-meta">Número de urna: ${dado.numeroDeUrna}</p>
        <p class="descrisao-meta">${dado.descrisao}</p>
        <p class="descrisao-meta">Candidato(a) a: ${dado.tags}</p>
      </div>'
        `;
      }
    }
          //então, faça...
  
      
  }
  
  if (!resultados) {
      resultados = "<p> Nada foi encontrado </p>"
  }
  
    // Atribui a string com os resultados HTML à seção, substituindo o conteúdo anterior
    section.innerHTML = resultados;
}




