//INICIO DE SESION  Y PAGINA

document.getElementById("btn__registrarse").addEventListener("click", register);
document.getElementById("btn__iniciar-sesion").addEventListener("click", login);

//Declarando variables
/*
function register() {
    
    document.querySelector(".formulario__register").style.position = "absolute";
    document.querySelector(".formulario__register").style.left = "350px";
             */
/*
    document.querySelector(".formulario__register").style.opacity = "1";
    document.querySelector(".formulario__register").style.transition = "1s";
    document.querySelector(".formulario__register").style.transform =
        "translateX(350px)";
    document.querySelector(".formulario__register").style.display = "flex";
    document.querySelector(".formulario__register").style.transition = "1s";
    document.querySelector(".formulario__login").style.display = "none";
}

function login() {
    document.querySelector(".formulario__login").style.opacity = "1";
    document.querySelector(".formulario__login").style.transform =
        "translateX(-350px)";
    document.querySelector(".formulario__login").style.display = "flex";
    document.querySelector(".formulario__login").style.transition = "1s";
    document.querySelector(".formulario__register").style.display = "none";
}
*/

function register() {
    document.querySelector(".formulario__register").style.opacity = "0";
    document.querySelector(".formulario__register").style.display = "flex";
    document.querySelector(".formulario__register").style.transition = "opacity 1s";

    setTimeout(function () {
        document.querySelector(".formulario__register").style.opacity = "1";
        document.querySelector(".formulario__register").style.transform = "translateX(350px)";
    }, 100);

    document.querySelector(".formulario__login").style.opacity = "0";
    document.querySelector(".formulario__login").style.transition = "opacity 1s";

    setTimeout(function () {
        document.querySelector(".formulario__login").style.display = "none";
    }, 1000);

    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    // Check if localStorage is available
    if (typeof (Storage) !== "undefined") {
        // Get the existing users
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Add the new user
        users.push({ username, email, password });

        // Store the updated list of users
        localStorage.setItem("users", JSON.stringify(users));
    } else {
        // LocalStorage is not available, show an error message
        console.error("LocalStorage is not supported by your browser.");
    }

    // existing code...

}

function login() {
    document.querySelector(".formulario__login").style.opacity = "0";
    document.querySelector(".formulario__login").style.display = "flex";
    document.querySelector(".formulario__login").style.transition = "opacity 1s";

    setTimeout(function () {
        document.querySelector(".formulario__login").style.opacity = "1";
        document.querySelector(".formulario__login").style.transform = "translateX(-350px)";
    }, 100);

    document.querySelector(".formulario__register").style.opacity = "0";
    document.querySelector(".formulario__register").style.transition = "opacity 1s";

    setTimeout(function () {
        document.querySelector(".formulario__register").style.display = "none";
    }, 1000);

    const loginEmail = document.querySelector("#loginEmail").value;
    const loginPassword = document.querySelector("#loginPassword").value;

    // Check if localStorage is available
    if (typeof (Storage) !== "undefined") {
        // Get the registered users
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if the entered credentials match with any of the registered users
        let isUserFound = false;
        for (const user of users) {
            if (user.email === loginEmail && user.password === loginPassword) {
                isUserFound = true;
                break;
            }
        }

        if (isUserFound) {
            // Show a success message
            console.log("Login successful!");
        } else {
            // Show an error message
            console.error("Email or password is incorrect. Please try again.");
        }
    } else {
        // LocalStorage is not available, show an error message
        console.error("LocalStorage is not supported by your browser.");
    }

}



