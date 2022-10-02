form = document.querySelector('#form')


nam.value = ''
eml.value = ''
pswd.value = ''
usr.value = ''



form.addEventListener('submit', signUpFun)


function signUpFun(event) {
    event.preventDefault()
    if (nam.value == '' || eml.value == '' || pswd.value == '') {
        console.log('na')
    } else {
        console.log(nam.value)
        console.log(eml.value)
        console.log(pswd.value)
        console.log(usr.value)


        console.log('upper')

        localStorage.setItem('nam', nam.value)
        localStorage.setItem('eml', eml.value)
        localStorage.setItem('usr', usr.value)
        localStorage.setItem('pswd', pswd.value)
        window.location.href = 'login.html'

        // form.removeEventListener('submit', signUpFun)
        // form.addEventListener('submit', signIn)
        // head.innerText = 'Sign-In'
        // form.style.backgroundColor = 'red'
    }
}