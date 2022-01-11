const initialState = {
    isLogin: false,
    userName: "",
    loading: false,
    error: false
}

const loginReducer = (state = initialState, action) => {
    if (action.type === "LOGIN") {
        if (action.userName === "dalai") {
            return {
                isLogin: true,
                userName: "dalai",
                error: false,
                loading: false
            }
        } else {
            return {
                isLogin: false,
                userName: "dalai23",
                error: true,
                loading: false
            }

        }

    } else if (action.type === "REGISTER") {

    }
    return state;
}

export default loginReducer;