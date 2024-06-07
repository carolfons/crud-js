function validateFields(){
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();

    //botao de recuperar senha fica desabilitado se o email for invalido
    document.getElementById('recover-password-button').disabled = !emailValid;

    //botão de login fica desabilitado se o email e a senha forem invalidos
    document.getElementById('login-btn').disabled = !emailValid || !passwordValid;

}

function isEmailValid(){
    const email = document.getElementById('email').value;
    if(!email){
        return false;
    }
    return validateEmail(email)
}

function isPasswordValid(){
    const password = document.getElementById('password').value;
    if(!password){
        return false;
    }
    return true;
}

function validateEmail (email) {
    return /\S+@\S+\.\S+/.test(email)
  }