const inputListener = document.getElementById('inputValor');
const buttonAdc = document.getElementById('adicionandoValor');
const buttonAnalisar = document.getElementById('analisar');
var ulShow = document.getElementById('listaMostrada');
var ulResult = document.getElementById('listaResultados')

let numeroAdicionado;
let arrayNumeros = [];
let listaDeNumeros = [];


const AdicionandoNumero = (event) => {      // Adquirindo valor do input atraves de um "Event Listener"
    numeroAdicionado = event.target.valueAsNumber
};


function adicionar() { // Adicionando o valor do input me um array"
    inputListener.focus(); 
    inputListener.value= '';  
    if (arrayNumeros.includes(numeroAdicionado)) {
        window.alert('Já encontrado na lista!')
        return
    }
    if (!numeroAdicionado || numeroAdicionado < 0 || numeroAdicionado > 100) {
        window.alert('Número inválido!')
        return
    }
    ulResult.innerHTML = ''

    arrayNumeros.push(numeroAdicionado);
    mostrarNumerosDaLista();

    function mostrarNumerosDaLista() {

        let item = arrayNumeros[arrayNumeros.length - 1]
        let li = document.createElement('li');
        li.innerHTML = `O número ${item} foi adicionado`;
        ulShow.appendChild(li);
        return
    }
};

    function analisar(){
        ulResult.innerHTML = ''
        arrayNumeros.sort(function(a, b) {
            return a - b;
          });
          for (var i; i < arrayNumeros.length; i++){
            console.log(i)
          }

        let liLength = document.createElement('li');
        let liOrdem = document.createElement('li');
        let liMaior = document.createElement('li');
        let liMenor = document.createElement('li');
        let liSoma = document.createElement('li');
        let liMedia = document.createElement('li');

        if (arrayNumeros == '') {
            alert('Adicione um número à lista')
            return
        }
        

        const soma = arrayNumeros.reduce((previousValue, currentValue) => previousValue + currentValue)
        const media = soma/arrayNumeros.length

        liLength.innerHTML = `Ao todo, temos ${arrayNumeros.length} números cadastrados`;
        liOrdem.innerHTML = `A ordem crescente dos número foi ${arrayNumeros}`;
        liMaior.innerHTML = `O maior número na lista foi ${arrayNumeros[arrayNumeros.length-1]}`;
        liMenor.innerHTML = `O maior número na lista foi ${arrayNumeros[0]}`;
        liSoma.innerHTML = `A soma de todos os valores da lista foi ${soma}`;
        liMedia.innerHTML = `A média simples dos valores da lista é ${media.toFixed(2)}`


        ulResult.appendChild(liLength);
        ulResult.appendChild(liOrdem);
        ulResult.appendChild(liMaior);
        ulResult.appendChild(liMenor);
        ulResult.appendChild(liSoma);
        ulResult.appendChild(liMedia);
       
        // if (!numeroAdicionado || numeroAdicionado < 0 || numeroAdicionado > 100) {
        //     alert('Número inválido!')
        //     return
        // }
        



        // console.log("function d")
    }


inputListener.addEventListener('input', AdicionandoNumero);
buttonAdc.addEventListener('click', adicionar);
buttonAnalisar.addEventListener('click', analisar)
