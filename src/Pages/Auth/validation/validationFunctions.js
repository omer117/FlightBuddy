//SQLInjection preventation on the submiting of the password and the username 
export  function passwordValidation(password) {
    const specialCharsForPassowrd = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (password.length < 8 || specialCharsForPassowrd.test(password))
        return false;
    else return true;
};

export  function userValidation(user){
    const specialCharsForuser = /[`!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
    if (!specialCharsForuser.test(user)) {
        return true;
    } else {
        return false;
    }
};

export function emailValidation(email){
    const specialCharsForEmail = /[`!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
    if (specialCharsForEmail.test(email)) {
        return false;
    } else {
        return true;
    }
}