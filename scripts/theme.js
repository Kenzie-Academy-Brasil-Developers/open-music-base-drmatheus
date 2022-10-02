/* Desenvolva sua lógica aqui ... */

const btnDarkMode = document.querySelector(".buttonTheme")
const body = document.querySelector("body")

if(localStorage.getItem("themeDark")){
    darkMode()
}

btnDarkMode.addEventListener("click", ()=>{    
    darkMode()

    if(localStorage.getItem("themeDark")){
        localStorage.removeItem("themeDark")
    }else{
        localStorage.setItem("themeDark",true)
    }       
})

function darkMode(){
    body.classList.toggle("darkmode") 
    btnDarkMode.classList.toggle("sunBg")
}


