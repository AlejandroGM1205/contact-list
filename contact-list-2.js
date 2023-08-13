//Crea una lista de contactos
let listaContactos = [];

//Crea una función para añadir un nuevo contacto a una lista
function crearContacto(contacto) {
    listaContactos.push(contacto);
}

//Crear una funcion para borrar un contacto existente de la lista por el ID
function eliminarContacto(id) {
    const indice = listaContactos.findIndex(contacto => contacto.id === id);
    if (indice != -1) {
        listaContactos.splice(indice, 1);
        console.log("Contacto con ID " + id + " eliminado.");
    } else {
        console.log("No se encontró un contacto con ID " + id);
    }
}

//Ejemplo contactos
const nuevoContacto = {
    id: 1,
    nombres: "John",
    apellidos: "Doe",
    teléfono: "123456789",
    ubicacion: {
        ciudad: "Cali",
        dirección: "123 Calle Principal"
    }
};

const nuevoContacto1 = {
    id: 2,
    nombres: "Alejandro",
    apellidos: "Gutierrez",
    teléfono: "987654321",
    ubicacion: {
        ciudad: "Bogota",
        dirección: "123 Calle Secundaria"
    }
};
