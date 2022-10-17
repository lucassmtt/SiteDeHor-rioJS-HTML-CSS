let num = document.getElementById('txtnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1)
        return true
    else{return false}
}

function add(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Número incorreto ou já encontrado.')}
        num.value = ''
        num.focus()
}

function ter(){
    if (valores.length == 0){
        alert('Adicione dados antes de finalizar!')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo foram digitados ${valores.length}`
        res.innerHTML += `<p>O seu maior valor foi ${maior}`
        res.innerHTML += `<p>O seu menor valor foi ${menor}`
        res.innerHTML += `<p>A soma dos números digitados dá ${soma}`
        res.innerHTML += `<p>A média de todos os valores é ${media = soma / valores.length}`
    }
}