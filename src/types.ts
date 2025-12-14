export interface Rider {
    id: string;
    name: string;
    phone_number: string;
    vehicle_info: string;
    status: 'active' | 'inactive';
    created_at: string;
}

export type RiderFormData = Omit<Rider, 'id' | 'created_at'>;

export interface DeliveryZone {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    radius_km: number;
    is_active: boolean;
    created_at: string;
}

export type DeliveryZoneFormData = Omit<DeliveryZone, 'id' | 'created_at'>;
