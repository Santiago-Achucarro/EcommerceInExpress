const btnReg = document.getElementById("regis").addEventListener("click",signIn);
const btnLog = document.getElementById("iniciar").addEventListener("click",logIn);
const usersBtns = document.getElementById("users")
document.getElementById("secondIniciar").addEventListener("click",alredyHave)
const section = document.querySelectorAll("section");
const registerForm = document.getElementById("form-register")
const loginForm = document.getElementById("form-login")



function alredyHave(){
    section.forEach(element => {
        element.classList.add("hide")
    });
  
    usersBtns.childNodes[3].classList.add("opacity")

    if(registerForm.classList.contains("hidden")){
        loginForm.classList.remove("hidden")
        loginForm.classList.add("animacion")
        usersBtns.childNodes[1].classList.remove("opacity")

    }else{
        usersBtns.childNodes[1].classList.remove("opacity")
        registerForm.classList.add("hidden")
        registerForm.classList.remove("animacion")
        loginForm.classList.remove("hidden")
        loginForm.classList.add("animacion")
    }
}

function logIn(){
  
    section.forEach(element => {
        element.classList.add("hide")
    });
    usersBtns.childNodes[3].classList.add("opacity")
    if(registerForm.classList.contains("hidden")){
        loginForm.classList.remove("hidden")
        loginForm.classList.add("animacion")
        usersBtns.childNodes[1].classList.remove("opacity")

    }else{
        registerForm.classList.add("hidden")
        registerForm.classList.remove("animacion")
        loginForm.classList.remove("hidden")
        loginForm.classList.add("animacion")
    usersBtns.childNodes[1].classList.remove("opacity")

    }
}

function signIn(){
    usersBtns.childNodes[1].classList.add("opacity")
    if(loginForm.classList.contains("hidden")){
        registerForm.classList.remove("hidden")
        registerForm.classList.add("animacion")
        usersBtns.childNodes[3].classList.remove("opacity")

    }else{
        usersBtns.childNodes[3].classList.remove("opacity")
        loginForm.classList.add("hidden")
        loginForm.classList.remove("animacion")
        registerForm.classList.remove("hidden")
        registerForm.classList.add("animacion")
    }

section.forEach(element => {
    element.classList.add("hide")
});

}   
