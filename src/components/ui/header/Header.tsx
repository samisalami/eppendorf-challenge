import {AppBar, Typography} from "@mui/material";
import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import {HeaderTheme} from "./Header.theme";

export const Header: FC = () => {
    return (
        <AppBar position={'static'}>
            <NavLink style={HeaderTheme.link} to={'/'}>
                <Typography m={2} variant="h6" component="div" sx={HeaderTheme.title}>
                    Eppendorf Challenge
                </Typography>
            </NavLink>
        </AppBar>
    )
};