document.addEventListener('DOMContentLoaded', function(){
     const aumentaFontBotao =document.getElementById('aumentar-fonte');
     const diminuiFontBotao =document.getElementById('diminuir-fonte');
     let tamanhoAtualFonte = 1;

    aumentaFontBotao.addEventListener('click', function(){
        tamanhoAtualFonte+= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    diminuiFontBotao.addEventListener('click', function(){
        tamanhoAtualFonte-= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });



});

