export interface DataType {
    key: string;
    id: string;
    reason: string;
    store_name: string;
    store_logo: string;
    store_url: string;
    amount: number;
    active: boolean;
    decision: string;
    items: { id: string; name: string; price: number; quantity: number }[];
}