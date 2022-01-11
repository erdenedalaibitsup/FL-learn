export const signupUser = (email, password) => {
    console.log("email", email);
    console.log("password", password)
    return function (dispath) {
        dispath(signupUserStart());
    };
}

export const signupUserStart = () => {
    console.log("sing up starting");
    return {
        type: "SINGUP_USER_START"
    }
}

export const signupUserSuccess = () => {
    return {
        type: "SINGUP_USER_SUCCESS"
    }
}
export const signupUserError = () => {
    return {
        type: "SINGUP_USER_ERROR",
        error: "Бүртгүүлэхэд алдаа гарлаа"
    }
}