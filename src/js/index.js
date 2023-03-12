const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
/*const botao1 = document.getElementById('botao1');
botao1.addEventListener('click', ()=> {

})*/

botoesCarrossel.forEach((botao, indice)=>{
    botao.addEventListener('click',()=>{
        desativarBotaoSelecionado();
        ativarBotaoSelecionado(botao);
        
        desativaImagemAtiva();
        ativarImagemAtiva(indice);

    })
})

function ativarImagemAtiva(indice) {
    imagens[indice].classList.add('ativa');
}

function ativarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function desativaImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
