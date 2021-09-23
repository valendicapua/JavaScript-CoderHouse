// Accedemos a los campos que queremos evaluar
const username = document.getElementById("username");
const password = document.getElementById("password");
const mensaje = document.getElementById("mensaje");
const botonIngresar = document.getElementById("ingresar");
botonIngresar.addEventListener("click", validarCredenciales, redireccionar);

alert("Nombre de usuario= vdicapua ; contraseña= asdf1234 ;")

function validarCredenciales() {

    if(username.value.length == 0 || password.value.length == 0) {
        mensaje.innerText = "El usuario o la contraseña son incorrectos";
        mensaje.className = "mensaje_incorrecto";
        username.classList.add("is-invalid");
        password.classList.add("is-invalid");
    } else {

        if(!existeUsuario(username.value, password.value)) {

            mensaje.innerText = "El usuario o la contraseña son incorrectos";
            mensaje.className = "mensaje_incorrecto";
            username.classList.add("is-invalid");
            password.classList.add("is-invalid");
        } else {

            mensaje.innerText = "Credenciales correctas";
            mensaje.className = "mensaje_correcto";
            username.classList.add("is-valid");
            password.classList.add("is-valid");


            function redireccionar(){location.replace('TWITTER/index.html');}
            setTimeout ("redireccionar()", 3000);
            
        }

    }
}

function existeUsuario(username, password) {

    const usuarios = obtenerUsuariosDeStorage();
    let existe = false;
    for(const usuario of usuarios) {

        const usernameActual = usuario.username;
        const passwordActual = usuario.password;

        if(usernameActual == username && passwordActual == password) {
            existe = true;
            break;
        }
    }

    return existe;
}

//Usario para poder acceder a la pagina principal
const usuarioParaIngresar = 
[
    {
    "username": "vdicapua",
    "password": "asdf1234"
    }
]
localStorage.setItem("usuarios", JSON.stringify(usuarioParaIngresar));

//Redireccionar a pagina principal si las credenciales son correctas

function redireccionar(){
    window.location.href="TWITTER/index.html";
}