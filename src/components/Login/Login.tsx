import React from "react";
import {TextField} from "@mui/material";


export const Login=()=>{
    return(
        <div>
            <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue="Small"
                variant="filled"
                size="small"
            />
            <TextField
                hiddenLabel
                id="filled-hidden-label-normal"
                defaultValue="Normal"
                variant="filled"
            />
        </div>
    )
}

