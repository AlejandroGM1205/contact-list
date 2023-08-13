//Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres

let listaContactos = [
    "Alejandro Gutierrez",
    "Brayan Ramirez",
    "Carlos Medina",
    "Natalia Timote"
];

//Crea una función para añadir un nuevo contacto a una lista

function crearContacto(nombreCompleto) {
    listaContactos.push(nombreCompleto);
}

//Crear una funcion para borrar un contacto existente de la lista

function eliminarContacto(nombreCompleto) {
    let indice = listaContactos.indexOf(nombreCompleto);
    if (indice != -1) {
        listaContactos.splice(indice, 1);
    } else {
        console.log("El contacto: " + nombreCompleto + " no existe en la lista. ");
    }
}

//Crea una función para imprimir en consola los contactos presentes en la lista

function imprimirContactos() {
    console.log("Lista de contactos: ");
    for (let i =0; i < listaContactos.length; i++) {
        console.log((i + 1) + ". " + listaContactos[i]);
    }
}
