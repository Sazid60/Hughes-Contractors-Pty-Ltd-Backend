export enum Role {
    ADMIN = "ADMIN",
    SUPER_ADMIN = "SUPER_ADMIN",
    USER = "USER"
}
export interface IUser {
    name: string,
    email: string,
    password: string,
    role: Role
}

