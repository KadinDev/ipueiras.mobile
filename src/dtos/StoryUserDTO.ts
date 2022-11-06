
export interface StoreProps {
    id: string;
    name: string;
    description: string;
    banner: string;

    latitude?: string;
    longitude?:string;
    contact?: string;
    address?: string;
    time?: string;
    attendance?: string;
    created_at?: string;
    updated_at?: string;
    instagram?: string;
    email?: string;
    password?: string;
    password_confirm?: string;
    authorId?: string;
    categoryId?: string;

    author?: {
        id: string;
        name: string;
    }

    category?: {
        id: string;
        name: string;
    }
}