let contenedorCantidad = document.getElementById("cantidades");
let contenedorNombre = document.getElementById("unidad");
let contenedorPrecio = document.getElementById("valores");

let btns = document.querySelectorAll(".btn1")

for (let i = 0; i < btns.length; i++) {
    const element = btns[i];
    let input = element.previousElementSibling
    let rest = element.nextElementSibling
    let nombre = element.parentNode.previousElementSibling.childNodes[1].textContent
    let precio = element.parentNode.previousElementSibling.childNodes[3].textContent
    let stock = element.parentNode.previousElementSibling.childNodes[5].textContent
  
    let listNombre = document.createElement("li");
    let listPrecio = document.createElement("li");
    let listCantidad = document.createElement("li");
     
    contenedorCantidad.appendChild(listCantidad)
    contenedorNombre.appendChild(listNombre)
    contenedorPrecio.appendChild(listPrecio)

    let newValue = +(stock.slice(0,2));
    let newPrice = +(precio.slice(1, 5))

    rest.setAttribute("id", `rest${i}`)
    input.setAttribute("id",`input${i}`)
    element.setAttribute("id",`button${i}`)
    input = document.getElementById(`input${i}`).value

    document.getElementById(`button${i}`).addEventListener("click",(e)=>{


        
        if( input < newValue){
            input++
            if(input >= 1){
                listCantidad.innerText = input
                listNombre.innerText = nombre
                listPrecio.innerText = `$${newPrice*input}`
                rest.classList.remove("hidden")
            }else{
                listPrecio.innerText = ""
            listCantidad.innerText = ""
            listNombre.innerText = ""
            }
        }else{
            alert("EXCEDISTE EL LIMITE")
        }
        
 
    })
    document.getElementById(`rest${i}`).addEventListener("click", action )
    function action(){
        
        if(input > 1){ 
            input-- 
            listPrecio.innerText = `$${newPrice*input}`
            listCantidad.innerText = input
            listNombre.innerText = nombre
            console.log(`este es el primero${input}`);
        }else if (input <= 1 ) {
            input-- 
            console.log(`este es el segundo${input}`);
            listPrecio.innerText = ""
            listCantidad.innerText = ""
            listNombre.innerText = ""
            rest.classList.add("hidden")
        }
    }
}

