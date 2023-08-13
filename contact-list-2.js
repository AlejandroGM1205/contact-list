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


//Crear una funcion para actualizar contacto ya existente
function actualizarContacto(id, camposActualizados) {
    const indice = listaContactos.findIndex(contacto => contacto.id === id);
    if (indice !== -1) {
        const contactoActualizado = { ...listaContactos[indice], ...camposActualizados };
        listaContactos[indice] = contactoActualizado;
        console.log("Contacto con ID " + id + " actualizado.");
    } else {
        console.log("No se encontró un contacto con ID " + id);
    }
}

//Creo una funcion de imprimir la lista de contactos para verificar la actualizacion
function imprimirListaContactos() {
    console.log("Lista de Contactos:");
    listaContactos.forEach(contacto => {
        console.log("ID:", contacto.id);
        console.log("Nombres:", contacto.nombres);
        console.log("Apellidos:", contacto.apellidos);
        console.log("Teléfono:", contacto.teléfono);
        console.log("Ubicación:");
        console.log("   Ciudad:", contacto.ubicacion.ciudad);
        console.log("   Dirección:", contacto.ubicacion.dirección);
        console.log("-------------------------------------");
    });
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

crearContacto(nuevoContacto);
crearContacto(nuevoContacto1);
imprimirListaContactos();

actualizarContacto(1, {
    nombres: "Nuevo Nombre",
    teléfono: "987654321",
    ubicacion: {
        ciudad: "Nueva Ciudad",
        dirección: "Nueva Dirección"
    }
})

imprimirListaContactos();