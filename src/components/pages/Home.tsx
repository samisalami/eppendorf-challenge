import React, {FC} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const Home: FC = () => {
    const navigate = useNavigate();
    return (
        <Grid2 container mt={3} spacing={3}>
            <Grid2 textAlign={'center'} xs={12}>
                <Button onClick={() => navigate('/devices')} variant={'outlined'}>Device List</Button>
            </Grid2>
            <Grid2 textAlign={'center'} xs={12}>
                <Button onClick={()=> navigate('/registration')} variant={'outlined'}>Registration</Button>
            </Grid2>
        </Grid2>
    );
};