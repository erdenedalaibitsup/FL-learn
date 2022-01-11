import { Typography } from "@mui/material";
import React from "react"
function Index(props) {

    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <a color="inherit" href="https://bitsup.com/">
                BitsUp.com LLC
      </a>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}
export default Index