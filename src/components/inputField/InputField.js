
import { TextField } from '@mui/material';
import React from 'react';
function InputField(props) {
    return (
        <TextField
            id={props.id}
            {...props.register(props.name, { required: true })}
            onChange={props.onChange}
            error={props.error}
            helperText={props.errorText}
            type={props.type}
            name={props.name}
            margin="normal"
            InputProps={{
                className: props.multilineColor
            }}
            style={props.style}
            style={{ borderColor: "red" }}
            label={props.label}
            variant={props.variant}
            // InputProps={{
            //     startAdornment: (
            //         <InputAdornment position="start">
            //             {props.startIcon}
            //         </InputAdornment>
            //     ),
            //     endAdornment: (
            //         <InputAdornment position="end">
            //             {props.endIcon}
            //         </InputAdornment>
            //     ),
            // }}
            fullWidth
            multiline
        />
    );
}

export default InputField;