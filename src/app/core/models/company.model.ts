export interface Company {
    id: string;
    name: string;
    taxId: string;
    sector: string;
    contact: string;
    tutors: string[];
}

export class CompanyModel implements Company {
    constructor(
        public id: string,
        public name: string,
        public taxId: string,
        public sector: string,
        public contact: string,
        public tutors: string[]
    ) { }

    static fromMap(data: any): CompanyModel {
        return new CompanyModel(
            data._id,
            data.name,
            data.taxId,
            data.sector,
            data.contact,
            data.tutors
        );
    }

    static fromJson(json: string): CompanyModel {
        return this.fromMap(JSON.parse(json));
    }

    toMap(): any {
        return {
            _id: this.id,
            name: this.name,
            taxId: this.taxId,
            sector: this.sector,
            contact: this.contact,
            tutors: this.tutors,
        };
    }

    toJson(): string {
        return JSON.stringify(this.toMap());
    }
}
