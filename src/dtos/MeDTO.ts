
export interface MeProps {
    id: string;
	name: string;
	email: string;
	store: {
		id?: string;
		name?: string;
		description?: string;
		banner?: string;
		latitude?: string;
        longitude?: string;
        contact?: string;
        address?: string;
        time?: string;
        instagram?: string;
        categoryId?: string;
        created_at?: string;
        authorId?: string;
    }
}