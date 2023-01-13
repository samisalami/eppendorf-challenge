import React, {FC} from 'react';
import {Home} from "./components/pages/Home";
import {DeviceList} from "./components/device/list/device-list";
import {Route, Routes} from "react-router-dom";
import {Registration} from "./components/pages/Registration";

export const RoutesConfig: FC = () => {
    return (
        <Routes>
            <Route path={"/devices"} element={<DeviceList />}/>
            <Route path={"/registration"} element={<Registration />}/>
            <Route path={"/"} element={<Home />} />
        </Routes>
    );
}