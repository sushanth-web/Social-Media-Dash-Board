let light=document.getElementById("light")
let dark=document.getElementById("dark")
let body=document.querySelector("body")


const setDarkMode=()=>{
    body.className="dark"
    dark.checked=true
}

const setLightMode=()=>{
    body.className="light"
    light.checked=true
}

const setColorMode=()=>{
    const savedMode=localStorage.getItem('colorMode')
    if(savedMode === "dark"){
     return setDarkMode()
    }
    else if(savedMode === "light"){
        return setLightMode()
    }
    else{
        if(window.matchMedia('(prefers-color-scheme:light)').matches){
            return setLightMode()
        }
        else{
            return setDarkMode()
        }
    } 
}

setColorMode()

light.addEventListener("click",function(){
    localStorage.setItem('colorMode', 'light')
    setLightMode()
})

dark.addEventListener("click",function(){
    localStorage.setItem('colorMode', 'dark')
    setDarkMode()
})


