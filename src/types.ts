export interface Rider {
    id: string;
    name: string;
    phone_number: string;
    vehicle_info: string;
    status: 'active' | 'inactive';
    created_at: string;
}

export type RiderFormData = Omit<Rider, 'id' | 'created_at'>;
