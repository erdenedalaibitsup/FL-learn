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