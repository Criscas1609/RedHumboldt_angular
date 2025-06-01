export interface AcademicProgram {
    id: string;
    name: string;
    faculty: string;
}

export class AcademicProgramModel implements AcademicProgram {
    constructor(
        public id: string,
        public name: string,
        public faculty: string
    ) { }

    static fromMap(data: any): AcademicProgramModel {
        return new AcademicProgramModel(
            data._id,
            data.name,
            data.faculty
        );
    }

    static fromJson(json: string): AcademicProgramModel {
        return this.fromMap(JSON.parse(json));
    }

    toMap(): any {
        return {
            _id: this.id,
            name: this.name,
            faculty: this.faculty,
        };
    }

    toJson(): string {
        return JSON.stringify(this.toMap());
    }
}
