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

export interface Restaurant {
    id: string;
    name: string;
    description?: string;
    address?: string;
    phone_number?: string;
    category?: string;
    logo_path?: string | null;
    is_active: boolean;
    owner_id?: string;
    created_at?: string;
    updated_at?: string;
}

export interface RestaurantFormData {
    name: string;
    description: string;
    address: string;
    phone_number: string;
    category: string;
    is_active: boolean;
}
