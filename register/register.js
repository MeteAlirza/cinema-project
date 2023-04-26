let regName = document.querySelector("#reg_name")
let regEmail = document.querySelector("#reg_email")
let regPsw = document.querySelector("#reg_psw")
let regRePsw = document.querySelector("#reg_re_psw")
let registerErr=document.querySelector(".register_err")
let goLogin=document.querySelector(".entrance_login")

if (localStorage.getItem('loggedInUser')) {
    window.location.href='/film.html'
    }

function regSubmit(e) {
    e.preventDefault()
    if (regName.value !== "" && regEmail.value !== "" && 
    regPsw.value !== '' && regRePsw.value !== "") {
        let checkEmail=users.find(data=>data.email=regEmail.value)
        if (!checkEmail) {
            if (regPsw.value===regRePsw.value) {
                let newUser={
                    id:users.length+1,
                    name:regName.value,
                    email:regEmail.value,
                    password:regPsw.value
    
                }
                users.push(newUser)
                registerErr.innerHTML='Qeydiyyat ugurla tamamlandi'
                localStorage.setItem('users',JSON.stringify(users))

            } else {
                registerErr.innerHTML='Sifreler eyni deyil'
            }

        } else {
            registerErr.innerHTML="Bu istifadeci artiq movcuddur"
        }

    } else {
        registerErr.innerHTML="Xanalari doldurun"
    }


}


goLogin.addEventListener('click', ()=>{
    window.location.href="../login/login.html"
})