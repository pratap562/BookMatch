form = document.querySelector('#forms')


form.addEventListener('submit', signIn)


p.value = ''
u.value = ''


function signIn(event) {

    event.preventDefault()
    console.log('hello')
    pswd = localStorage.getItem('pswd')
    usr = localStorage.getItem('usr')

    if (p.value == pswd && u.value == usr) {
        console.log('haa sahi banda hai lele apni team me')
        alert('Sign In Sucessfull :)')
        log = document.querySelector('#login')
        sign = document.querySelector('#signUP')
        console.log(event)
        window.location.href = 'index.html'
        log.style.color = 'red'
        sign.style.visibility = 'hidden'

    } else {
        alert('Wrong Credentials')
    }

}
