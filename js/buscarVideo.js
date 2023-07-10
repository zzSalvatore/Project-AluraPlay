import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento){
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector('[data-lista]');

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(element => lista.appendChild(
        constroiCard(element.titulo, element.descricao, element.url, element.imagem)));

    if (busca.lenght == 0 ){
        lista.innerHTML = '<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>';
    }

}

const btnPesquisa = document.querySelector('[data-btnPesquisa]');

btnPesquisa.addEventListener('click', evento => buscarVideo(evento));
