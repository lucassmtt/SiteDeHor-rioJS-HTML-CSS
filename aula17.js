let amigo = {nome:'Lucas',idade:19,peso:90,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
console.log(`O ${amigo.nome} tinha ${amigo.peso} mas engordou 5KG então ficou ${amigo.engordar(5)}`)
