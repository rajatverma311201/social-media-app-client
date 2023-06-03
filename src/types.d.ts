export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    username: string;
    image: string;
    role: string;
}

export interface LoginResponse {
    token: string;
    data: { user: User };
    status: string;
}

export interface ErrorResponse {
    status: string;
    message: string;
}
