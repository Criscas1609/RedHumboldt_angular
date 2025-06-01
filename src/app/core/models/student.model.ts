import { StudentStatus } from "../enums/status.enum";

export interface Student {
    id: string;
    userId: string;
    academicProgramId: string;
    semester: number;
    status: StudentStatus;
    project: string;
    completedSurveys: string[];
}

export class StudentModel implements Student {
    constructor(
        public id: string,
        public userId: string,
        public academicProgramId: string,
        public semester: number,
        public status: StudentStatus,
        public project: string,
        public completedSurveys: string[]
    ) { }

    static fromMap(data: any): StudentModel {
        return new StudentModel(
            data._id,
            data.userId,
            data.academicProgramId,
            data.semester,
            data.status,
            data.project,
            data.completedSurveys
        );
    }

    static fromJson(json: string): StudentModel {
        return this.fromMap(JSON.parse(json));
    }

    toMap(): any {
        return {
            _id: this.id,
            userId: this.userId,
            academicProgramId: this.academicProgramId,
            semester: this.semester,
            status: this.status,
            project: this.project,
            completedSurveys: this.completedSurveys,
        };
    }

    toJson(): string {
        return JSON.stringify(this.toMap());
    }
}
