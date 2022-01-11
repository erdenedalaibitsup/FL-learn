import React from 'react';

import IconButton from '@mui/material/IconButton';
function ImageButton(props) {
    return (
        <div>
            <IconButton onClick={props.onClick} color={props.color} aria-label="delete">
                {props.icon}
            </IconButton>
        </div>
    );
}

export default ImageButton;