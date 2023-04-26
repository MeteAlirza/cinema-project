let loginEmail=document.querySelector("#login_email")
let loginPsw=document.querySelector("#login_psw")
let loginErr=document.querySelector(".login_err")


if (localStorage.getItem('loggedInUser')) {
    window.location.href='/film.html'
    }

function loginSubmit (a) {
    a.preventDefault()
    if (loginEmail.value!=="" && loginPsw.value!=="") {
        let checkUser=users.find(data=>data.email===loginEmail.value)
        if (checkUser) {
            if (checkUser.password==loginPsw.value) {
                window.location.href="../film.html"
                localStorage.setItem("loggedInUser", JSON.stringify(checkUser))
            } else {
                loginErr.innerHTML='Sifre yanlisdir'
            }
        } else {
            loginErr.innerHTML="Istifadeci movcud deyil"
        }
    } else {
        loginErr.innerHTML='Xanalari doldurun'
    }
}