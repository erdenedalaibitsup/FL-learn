import { Button, Stack, } from '@mui/material';//IconButton,
import React from 'react';
// import { PhotoCamera } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
const Input = styled('input')({
    display: 'none',
});
function UploadButton(props) {
    return (
        // <Button
        //     variant={props.variant}
        //     component={props.label}
        // >
        //     {props.text}
        //     <input
        //         type="file"
        //         hidden
        //     />
        // </Button>
        <Stack direction="row" alignItems="center" spacing={2}>
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" {...props.register(props.name, { required: true })} />
                <Button variant="contained" component="span">
                    Зураг оруулах
        </Button>
            </label>
            {/* <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" />
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                </IconButton>
            </label> */}
        </Stack>
    );
}

export default UploadButton;