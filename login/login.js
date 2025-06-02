let emailErrorMsgEl = document.getElementById("emailErrorMsg");
let emailInputEl = document.getElementById("emailInput");

emailInputEl.addEventListener("blur", function (event) {
    if (emailInputEl.value === "") {
        console.log(emailInputEl.value);
        emailErrorMsgEl.textContent = "Required*";
    }
    else {
        emailErrorMsgEl.textContent = "";
    }
});

let passwordErrorMsgEl = document.getElementById("passwordErrorMsg");
let passwordInputEl = document.getElementById("passwordInput");

passwordInputEl.addEventListener("blur", function (event) {
    if (passwordInputEl.value === "") {
        passwordErrorMsgEl.textContent = "Required*"
    }
    else {
        passwordErrorMsgEl.textContent = "";
    }
});

let view = document.getElementById("view");
function eye() {
    console.log("View Initial");
    view.classList.remove("d-none");
}

let hideEl = document.getElementById("hide");
view.addEventListener("click", () => {
    console.log("View Clicked");
    view.classList.add("d-none");
    passwordInputEl.type = "text";
    hideEl.classList.remove("d-none");
})

hideEl.addEventListener("click", () => {
    console.log("Hide Clicked");
    hideEl.classList.add("d-none");
    view.classList.remove("d-none");
    passwordInputEl.type = "password";
})

// let view = document.getElementById("view");;
// function eye() {
//     view.className.add("bi bi-eye-fill");

// };
// let hideEl = document.getElementById("hide");
// view.addEventListener("click", () => {
//     view.classList.add("bi bi-eye-slash-fill");
//     passwordInputEl.type = "text";
//     hideEl.classList.remove("bi bi-eye-fill");
// });

// hideEl.addEventListener("click", () => {
//     hideEl.classList.add("bi bi-eye-fill");
//     view.classList.remove("bi bi-eye-slash-fill");
//     passwordInputEl.type = "password";
// });