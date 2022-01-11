import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { withStyles } from "@material-ui/core/styles";
const useStyles = {
    snackbarStyleViaContentProps: {
        backgroundColor: "orange"
    },
    snackbarStyleViaNestedContent: {
        backgroundColor: "lightgreen",
        color: "black"
    }
};
function CustomAlert(props) {

    return (
        <Snackbar anchorOrigin={props.position} open={props.open} autoHideDuration={props.duration} onClose={props.onClose}>
            <Alert ContentProps={{
                "aria-describedby": "message-id",
                className: useStyles.snackbarStyleViaContentProps
            }} onClose={props.onClose} severity={props.type} sx={{ width: '100%' }}>
                {props.text}
            </Alert>
        </Snackbar>
    );
}

export default CustomAlert;