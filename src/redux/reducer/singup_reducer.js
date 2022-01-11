const initialState = {
    loading: false,
    user: null,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SINGUP_USER_START": return {
            ...initialState,
            loading: true
        }
        case "SINGUP_USER_SUCCESS": return {
            ...initialState,
            loading: false
        }
        case "SINGUP_USER_ERROR": return {
            ...initialState,
            loading: false,
            error: action.error
        }
    }
    return state
}

export default reducer;