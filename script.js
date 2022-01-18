let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

let videoBackground = document.querySelector('#vid');

taskbar.addEventListener("click", ()=>{
    
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})


videoBackground.addEventListener('click', ()=> {

    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    
})