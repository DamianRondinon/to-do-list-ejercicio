// Obtenemos los elementos necesarios del HTML
const input = document.getElementById("input");
const addTaskBtn = document.getElementById("addTask");
const listTasks = document.getElementById("list-container");

// *Ahora tenemos que traer lo que escribamos en el input cuando hagamos click al boton

addTaskBtn.addEventListener("click", addTask);

// *Funcion para agregar tareas
function addTask() {
  // console.dir para ver los props a las que podemos acceder
  // console.dir(input.value);
  const task = input.value;

  // Si el input esta vacío que nos devuelva un error
  if (task == "") {
    //console.log("error");
    showError("La tarea esta vacia");
  }
}

// *Creamos la funcion para mostrar el error
function showError(error) {
  // Creamos la etiqueta p que nos muestre el error
  const msgError = document.createElement("p");

  // Tenemos que pasarle el texto que va a tener ese p, en este caso el error
  msgError.textContent = error;

  // Le asignamos una clase de CSS con los estilos del error
  msgError.classList.add("error");

  // Tenemos que agregar ese p dentro del ul
  listTasks.appendChild(msgError);
}

// Tenemos un problema, el mensaje de error se queda ahí y no se va, tenemos que hacer que dure 2 o 3 segundos con setTimeOut
