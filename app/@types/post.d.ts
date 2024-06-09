export interface IPost {
    id: number;
    title: string;
    body: string;
    tags: string[];
}

export type AuthContextType = {
    user: any;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    refreshAuthToken: () => Promise<void>;
}