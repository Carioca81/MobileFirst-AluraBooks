function fundoAzul(){
    let el = document.querySelector('.opcoes__item--fundo-azul')
    el.style.background = 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)'
    el.style.color = '#ffffff'
    el.setAttribute('onclick','fundoBranco()')
}

function fundoBranco(){
    let el = document.querySelector('.opcoes__item--fundo-azul')
    el.style.background = '#ffffff'
    el.style.color = '#000000'
    el.setAttribute('onclick','fundoAzul()')
}