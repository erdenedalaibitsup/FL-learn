const initialState = {
    loading: false,
    saveLoading: false,
    saveFinished: false,
    saveError: null,
    updateLoading: false,
    datas: [],
    word: null,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_WORD_START": return {
            ...initialState,
            saveLoading: true,
        }
        case "CREATE_WORD_SUCCESS": return {
            ...initialState,
            saveLoading: false,
            saveFinished: true,
        }
        case "CREATE_WORD_ERROR": return {
            ...initialState,
            saveLoading: false,
            saveError: action.error,
        }
        case "CREATE_WORD_HIDE_ALERT": return {
            ...initialState,
            saveError: null,
            saveFinished: null,
        }


    }
    return state
}

export default reducer;