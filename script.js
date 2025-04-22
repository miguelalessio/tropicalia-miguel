document.addEventListener('DOMContentLoaded', function () {

    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function (){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    })



const aumentaFontBotao = document.getElementById('aumentar-fonte');
const diminuiFontBotao = document.getElementById('diminuir-fonte');

const alternaContraste = document. getElementById('alterna-contraste')

let tamanhoAtualFonte = 1;

aumentaFontBotao.addEventListener('click', function () {
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
});

diminuiFontBotao.addEventListener('click', function () {
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
});

  alternaContraste.addEventListener('click', function(){ 
    document.body.classList.toggle('alto-contrate');
  })
});
