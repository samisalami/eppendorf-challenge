import {DevicesQuery} from "../../generated/graphql";

export type Device = {
    id?: DeviceId;
    location?: string;
    deviceHealth?: string;
    lastUsed?: string;
    price?: number;
    color?: string;
}

export type DeviceId = string & { readonly uniqueProp: unique symbol };
export type DeviceResponse = { id: DeviceId } & Omit<NonNullable<DevicesQuery['devices']>,
    'id'>;

// no real type checking here, only fallback to null if not given
export const makeDevices = (devices: DeviceResponse): Device[] => {
    return devices.map(device => {
        return {
            id: String(device?._id) as DeviceId ?? null,
            location: device?.location ?? null,
            deviceHealth: device?.deviceHealth ?? null,
            lastUsed: device?.lastUsed ? new Date(device?.lastUsed).toLocaleDateString('de-DE', {day: 'numeric', month: 'long', year: 'numeric'}) : null,
            price: device?.price ?? null,
            color: device?.color ?? null
        } as Device
    });
}
