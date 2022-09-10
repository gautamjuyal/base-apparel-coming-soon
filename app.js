const submitBtn = document.getElementById("submit-btn");
const emailField = document.getElementById("email");
const emailForm = document.querySelector(".form");

const textDiv = document.createElement('div');
textDiv.textContent = "Please provide a valid email";
textDiv.classList.add('error-text');



errorLogo = document.getElementById('error-img')

function addErrorStyles() {
    // console.log(enteredEmail)
    emailField.classList.add("error")
    errorLogo.style.display = "block";
    emailForm.appendChild(textDiv);
}

function removeErrorStyles() {
    emailField.classList.remove("error");
    errorLogo.style.display = "none";
    if (emailField.hasChildNodes(textDiv))
        emailForm.removeChild(textDiv);
}

function submitButtonHandler(event) {
    event.preventDefault();
    const enteredEmail = emailField.value;
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (!regex.test(enteredEmail)) {
        addErrorStyles()
    } else
        removeErrorStyles();

}

submitBtn.addEventListener('click', submitButtonHandler);