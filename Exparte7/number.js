let num = document.getElementById('txtnum')
let lista = document.getElementById('flista')
let res = document.querySelector('div#res')
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
        alert('Tudo ok')
    }
    else{alert('Número incorreto ou já encontrado.')}
}