export const login = (userName, password) => {
    return {
        type: "LOGIN",
        userName,
        password
    }
}


export const register = (userName, password) => {
    return {
        type: "REGISTER",
        userName,
        password
    }
}

//action creator