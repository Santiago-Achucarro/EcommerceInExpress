let contenedorCantidad = document.getElementById("cantidades");
let contenedorNombre = document.getElementById("unidad");
let contenedorPrecio = document.getElementById("valores");
let search = document.getElementById("search")

let btns = document.querySelectorAll(".btn1");



for (let i = 0; i < btns.length; i++) {
  const element = btns[i];
  let input = element.previousElementSibling;
  let rest = element.nextElementSibling;
  let nombre =
    element.parentNode.previousElementSibling.childNodes[1].textContent;
  let precio =
    element.parentNode.previousElementSibling.childNodes[3].textContent;
  let stock =
    element.parentNode.previousElementSibling.childNodes[5].textContent;

  let listNombre = document.createElement("li");
  let listPrecio = document.createElement("li");
  let listCantidad = document.createElement("li");

  contenedorCantidad.appendChild(listCantidad);
  contenedorNombre.appendChild(listNombre);
  contenedorPrecio.appendChild(listPrecio);

  let newValue = +stock.slice(0, 2);
  let newPrice = +precio.slice(1, 5);

  rest.setAttribute("id", `rest${i}`);
  input.setAttribute("id", `input${i}`);
  element.setAttribute("id", `button${i}`);
  input = document.getElementById(`input${i}`).value;
  
  document.getElementById(`button${i}`)
  .addEventListener("click", more)

  document.getElementById(`rest${i}`)
  .addEventListener("click", less);

function more(){
    if (input < newValue) {
      input++;
      if (input >= 1) {
        listCantidad.innerText = input;
        listNombre.innerText = nombre;
        listPrecio.innerText = `$${newPrice * input}`;
        rest.classList.remove("hidden");
      } else {
        listPrecio.innerText = "";
        listCantidad.innerText = "";
        listNombre.innerText = "";
      }
    } else {
      alert("EXCEDISTE EL LIMITE");
    }
}

  function less() {
    if (input > 1) {
      input--;
      listPrecio.innerText = `$${newPrice * input}`;
      listCantidad.innerText = input;
      listNombre.innerText = nombre;
      
    } else if (input <= 1) {
      input--;
      listPrecio.innerText = "";
      listCantidad.innerText = "";
      listNombre.innerText = "";
      rest.classList.add("hidden");
    }
  }

}


search.addEventListener("keyup" ,(e) =>{
  if(e.target.matches("#search")){

      e.key === "Escape" ? e.target.value = "" : false

    document.querySelectorAll(".card").forEach(producto => {
      producto.textContent.toLowerCase().includes(e.target.value.toLowerCase())
      ?producto.classList.remove("hidden"):producto.classList.add("hidden")
    })
  }
})