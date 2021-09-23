// Creamos una funcion para obtener los usuarios
function obtenerUsuariosDeStorage() {
    const listaUsuariosStorage = localStorage.getItem("usuarios");
    return JSON.parse(listaUsuariosStorage);
}