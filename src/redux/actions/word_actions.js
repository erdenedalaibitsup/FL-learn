import axios from "../../axios"

export const createWord = (newWord) => {
    console.log("newWord", newWord);
    return function (dispatch) {//getState
        //Spinner ergeldlee
        dispatch(createWordStart());
        // const token = getState().signupReducer.token
        axios.post(`/words`, newWord)
            .then(res => {
                dispatch(createWordSuccess());
                dispatch(loadWords());
            })
            .catch(err => {
                console.log("error print", err)
                dispatch(createWordError(err));
            })

    }
}

export const createWordStart = () => {
    console.log("word starting");
    return {
        type: "CREATE_WORD_START"
    }
}

export const createWordSuccess = () => {
    return {
        type: "CREATE_WORD_SUCCESS"
    }
}
export const createWordError = (error) => {
    let message = error.message
    return {
        type: "CREATE_WORD_ERROR",
        error: message
    }
}


export const createWordHideAlert = () => {
    return {
        type: "CREATE_WORD_HIDE_ALERT"
    }
}


export const loadWords = () => {
    return function (dispatch) {//getState
        //Spinner ergeldlee
        dispatch(loadWordStart());
        // const token = getState().signupReducer.token
        axios.get(`/words`)
            .then(res => {
                console.log("res", res)
                dispatch(loadWordSuccess(res.data.data));
            })
            .catch(err => {
                console.log("error print", err)
                dispatch(loadWordError(err));
            })

    }
}

export const loadWordStart = () => {
    console.log("load word starting");
    return {
        type: "LOAD_WORD_START"
    }
}

export const loadWordSuccess = (datas) => {
    return {
        type: "LOAD_WORD_SUCCESS",
        datas
    }
}
export const loadWordError = (error) => {
    let message = error.message
    return {
        type: "LOAD_WORD_ERROR",
        error: message
    }
}