export interface BusinessTutor {
    id: string;
    userId: string;
    companyId: string;
    position: string;
    assignedStudents: string[];
}

export class BusinessTutorModel implements BusinessTutor {
    constructor(
        public id: string,
        public userId: string,
        public companyId: string,
        public position: string,
        public assignedStudents: string[]
    ) { }

    static fromMap(data: any): BusinessTutorModel {
        return new BusinessTutorModel(
            data._id,
            data.userId,
            data.companyId,
            data.position,
            data.assignedStudents
        );
    }

    static fromJson(json: string): BusinessTutorModel {
        return this.fromMap(JSON.parse(json));
    }

    toMap(): any {
        return {
            _id: this.id,
            userId: this.userId,
            companyId: this.companyId,
            position: this.position,
            assignedStudents: this.assignedStudents,
        };
    }

    toJson(): string {
        return JSON.stringify(this.toMap());
    }
}
