//validação do campo email - caso esteja vazio ou não seja um email válido
function onChangeEmail() {

    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";

    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
    toggleRegisterButtonDisabled();//é preciso verificar o toggle do btn de registro toda vez que tiver alguma mudança no input

}

//validação do campo senha - senha maior que 6 caracteres
function onChangePassword() {
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";
    form.passwordMinLengthError().style.display = password.length >= 6 ? "none" : "block";
    validatePasswordMatch();//validação pra ver se a senha for igual caso a pessoa corrija para poder sair o label da tela
    toggleRegisterButtonDisabled();//é preciso verificar o toggle do btn de registro toda vez que tiver alguma mudança no input
}

//validação do campo confirmar senha -  as senhas precisam ser iguais
function onChangeConfirmPassword() {
    validatePasswordMatch();
    toggleRegisterButtonDisabled();//é preciso verificar o toggle do btn de registro toda vez que tiver alguma mudança no input
}

function validatePasswordMatch() {
    const password = form.password().value;
    const confirmPassword = form.confirmPassword().value;
// verifica se as senhas são iguais, se for coloca o display:none caso não for display: block
    form.confirmPasswordDoesntMatch().style.display = (password == confirmPassword) ? "none" : "block";
}

function toggleRegisterButtonDisabled(){
    form.registerButton().disabled = !isFormValid();
    
}

//validando o formulario
function isFormValid(){
    let aux = false;

    const email = form.email().value;
    //email existente ou válido
    if(!email || !validateEmail(email)){
        return false;
    }
    //senha existente ou maior que 6 caracteres
    const password = form.password().value;
    if(!password || password.length < 6){
        return false;
    }
    // senhas forem iguais
    const confirmPassword = form.confirmPassword().value;
    if(confirmPassword != password){
        return false;
    }

    // caso tudo validado retorna true
    return true;
}

const form = {

    confirmPasswordDoesntMatch: () => document.getElementById('password-doesnt-match'),
    email: () => document.getElementById('email'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    password: () => document.getElementById('password'),
    passwordMinLengthError: () => document.getElementById('password-min-length-error'),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    confirmPassword: () => document.getElementById('confirmPassword'),
    registerButton: () => document.getElementById('register-button')
}