import LoadingButton from '@mui/lab/LoadingButton';
import React from 'react';

function CustomButton(props) {
    return (
        <LoadingButton
            type={props.type}
            color={props.color}
            onClick={props.onClick}
            loading={props.loading}
            loadingPosition="start"
            startIcon={props.icon}
            variant={props.variant}
        >
            {props.text}
        </LoadingButton>
    );
}

export default CustomButton;