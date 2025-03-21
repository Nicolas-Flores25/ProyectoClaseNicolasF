export interface userDTO {
    name: string,
    lastName: string,
    age: number,
    email: string,
    password: string,
    confirmPassword: string,
    language?: language[];
}


export interface language {
    name: string,
    code: string;
}

// Me quede en el min 34:32