let entranceLogin=document.querySelector(".entrance_login")
let entranceSignup=document.querySelector(".entrance_signup")

if (localStorage.getItem('loggedInUser')) {
    window.location.href='/film.html'
    }

entranceLogin.addEventListener("click",()=>{
    window.location.href='../login/login.html'
})

entranceSignup.addEventListener("click",()=>{
    window.location.href='../register/register.html'
})