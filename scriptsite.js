function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 6 && hora <= 12){
        img.src = 'manha.png'
        document.body.style.background = '#f6b99a'
        //Bom dia
    }else if (hora > 12 && hora <= 18){
        img.scr = 'tarde.jpg'
        document.body.style.background = '#8397b0'
        //Boa tarde
    }else{
        img.src = 'noite.jpg'
        document.body.style.background = '#5f4c7a'
        //Boa noite
    }
}