const initialState = {
    loading: false,
    datas: [],
    error: null,
    saveLoading: false,
    saveFinished: false,
    saveError: null,
    updateLoading: false,
    word: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //Үг нэмэх
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
        //Жагсаалт авах
        case "LOAD_WORD_START": return {
            ...initialState,
            loading: true,
        }
        case "LOAD_WORD_SUCCESS": return {
            ...initialState,
            datas: action.datas,
            loading: false,
        }
        case "LOAD_WORD_ERROR": return {
            ...initialState,
            loading: false,
            error: action.error
        }
        case "LOAD_WORD_HIDE_ALERT": return {
            ...initialState,
            saveError: null,
            saveFinished: null,
        }
    }
    return state
}

export default reducer;