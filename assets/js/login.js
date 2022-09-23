const passwordToggle = document.querySelector(".input-icon")
const passwordInput = document.querySelector('#password')
const eyeIcon = document.querySelector("#password_toggle")

passwordToggle.addEventListener('click', () => {
    const type = passwordInput.getAttribute("type") === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    if (type === 'password') {
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash")
    } else {
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye")
    }
})
