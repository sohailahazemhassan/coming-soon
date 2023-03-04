const Inputs = document.getElementsByTagName('input')
const errors = document.getElementsByTagName('span')
const imgs = document.querySelector('.collection img')

function check(){
    if(email.value == ''){
        imgs.style.display = 'block'
        Inputs[0].style.border = 'solid 2px hsl(0, 93%, 68%)'
        errors[0].style.display = 'block'
    }else{
        imgs.style.display = 'none'
        Inputs[0].style.border = ''
        errors[0].style.display = 'none'
    }
}
