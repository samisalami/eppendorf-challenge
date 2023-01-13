import * as React from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {useDevicesQuery} from "../../../generated/graphql";
import CircularProgress from '@mui/material/CircularProgress';
import {FC} from "react";
import {Box} from "@mui/material";
import {DeviceResponse, makeDevices} from "../device.types";

export const DeviceList: FC = () => {
    const {data, loading} = useDevicesQuery();

    if (!data || loading) {
        return <CircularProgress />
    }

    const tableColumns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID'
        },
        {
            field: 'location',
            headerName: 'Location',
            flex: 1
        },
        {
            field: 'deviceHealth',
            headerName: 'Device Health',
            flex: 1
        },
        {
            field: 'lastUsed',
            headerName: 'Last Used',
            flex: 1
        },
        {
            field: 'price',
            headerName: 'Price'
        },
        {
            field: 'color',
            headerName: 'Color'
        },

    ];

    const devices = makeDevices(data.devices as DeviceResponse);

    return (
    <>
        {data?.devices &&
            <Box mt={3} sx={{ height: 768, width: '100%' }}>
                <DataGrid
                    rows={devices}
                    columns={tableColumns}
                    pageSize={30}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    loading={loading}
                />
            </Box>
        }
    </>
    );
}