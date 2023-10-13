var valores = [] //Criar fora da função esse array para que ele não seja recriado a cada chamada de função

function adicionar(){
    var numero = document.getElementById('txtn')
    var quadro = document.getElementById('quadro')
    var num = Number(numero.value)


    if(numero.value.length == 0){
        alert('Há dados faltando! Insira e tente novamente.')
    } else {        
        if (num <= 0 || num > 100){
            alert('Dados incorretos, verifique novamente!')
        } else { 

            //Procura o valor num (elemento) dentro do array, se for a posição igual a -1, não foi encontrado e será adicionado sem se preocupar com a posição, caso já foi adicionado será emitido um alerta
            if(valores.indexOf(num) === -1){
                valores.push(num)
                var valor = document.createElement('option')
                //Adiciona os números na tabela.
                valor.innerText = `Valor ${num} foi adicionado!`
                //A variável valor virou "filho" de 'quadro' 
                quadro.appendChild(valor) 
            } else {
                alert('Este valor já foi adicionado!')
            }
            numero.value = ''
            numero.focus()
        }

    }
    
}

function finalizar(){
    var res = document.getElementById('resultados')

    if(valores && valores.length > 0){
        res.innerHTML += `<p>Temos no total ${valores.length} valores cadastrados. </p>`

        //Usar "apply" para encontrar o maior valor, e o indicativo "null" quer dizer que o contexto não é relevante para chamada da função
        var maiorValor = Math.max.apply(null, valores) 
        res.innerHTML += `<p>O maior valor foi: ${maiorValor} </p>`

        var menorValor = Math.min.apply(null, valores)
        res.innerHTML += `<p>O menor valor foi: ${menorValor} </p>`

        //Ao definir a variável soma, usa-se 'valores' (array) e reduce (para reduzir os elementos do array a um só, sendo a soma dos elementos). A função passada a reduce recebeu dois parâmetros: `soma` e `i`, sendo 'soma' o acumulador que armazena a soma parcial e 'i' é o elemento sendo processado para somar. No final tendo  'soma' de todos os elementos do array     
        var soma = valores.reduce(function(soma, i){
            return soma + i
        })
        res.innerHTML += `<p>A soma dos valores foi: ${soma} </p>`

        //Após somar os valores de um array, podemos dividir sua soma pelo seu comprimento de array usando 'length' obtendo assim a média!
        var media = soma / valores.length 
        res.innerHTML += `<p>A média dos valores é: ${media} </p>`


    } else {
        alert('Não foi adicionado valores, os insira e tente novamente.')
    }

}



