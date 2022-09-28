const ENDPOINT = "http://177.44.248.60:3000";

const getUsers = () => {
    return axios.get(`${ENDPOINT}/users`);
}

const Login = async () => {
    const data = await getUsers();
    const names = document.getElementById("name").value;
    const name = names.toUpperCase();
    const password = document.getElementById("password").value;


    axios.post(`${ENDPOINT}/`, {
        name: name,
        password: password,
        data: data.data,
    })
        .then((response) => {
            window.location.href = "./menu.html"
        }, () => {

            Swal.fire(
                'Error',
                'Login error: Email or password are incorrect',
                'error'
            )
        });
}

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
});

// // prevent form submit
// const form = document.querySelector("form");
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
// });



// const cadastrarUser = async () => {
//     const data = await getUsers();
//     const names = document.getElementById("name").value;
//     const name = names.toUpperCase();
//     const password = document.getElementById("password").value;


//     axios.post(`${ENDPOINT}/create`, {
//         name: name,
//         password: password,
//         data: data,
//     })
//         .then((response) => {
//             window.location.href = "../menu/menu.html"
//         });
// }

