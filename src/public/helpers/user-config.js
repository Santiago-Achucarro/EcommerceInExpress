const settings = document.getElementById("settings")
const downarrow = document.getElementById("down-arrow");
document.getElementById("config").addEventListener("click", configuracion);

function configuracion(){
    if(!settings.classList.contains("hidden")){
        downarrow.classList.add("right")
        downarrow.classList.add("arrow")
        downarrow.classList.remove("down")
        settings.classList.add("hidden")
        settings.classList.remove("openbox")
        settings.classList.add("closebox")
    }else{
        downarrow.classList.remove("right")
        downarrow.classList.remove("arrow")
        downarrow.classList.add("down")
        settings.classList.remove("closebox")
        settings.classList.add("openbox")
        settings.classList.remove("hidden")
    }
}