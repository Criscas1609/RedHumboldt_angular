import { UserRole } from "../enums/user_role.enum";

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    phone: string;
}

export class UserModel implements User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public role: UserRole,
        public phone: string
    ) { }

    static fromMap(data: any): UserModel {
        return new UserModel(
            data._id,
            data.name,
            data.email,
            data.role as UserRole,
            data.phone
        );
    }

    static fromJson(json: string): UserModel {
        return this.fromMap(JSON.parse(json));
    }

    toMap(): any {
        return {
            _id: this.id,
            name: this.name,
            email: this.email,
            role: this.role,
            phone: this.phone,
        };
    }

    toJson(): string {
        return JSON.stringify(this.toMap());
    }
}