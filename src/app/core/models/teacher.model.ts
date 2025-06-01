export interface Teacher {
    id: string;
    userId: string;
    academicProgramId: string;
    assignedStudents: string[];
    gradedSurveys: string[];
}

export class TeacherModel implements Teacher {
    constructor(
        public id: string,
        public userId: string,
        public academicProgramId: string,
        public assignedStudents: string[],
        public gradedSurveys: string[]
    ) { }

    static fromMap(data: any): TeacherModel {
        return new TeacherModel(
            data._id,
            data.userId,
            data.academicProgramId,
            data.assignedStudents,
            data.gradedSurveys
        );
    }

    static fromJson(json: string): TeacherModel {
        return this.fromMap(JSON.parse(json));
    }

    toMap(): any {
        return {
            _id: this.id,
            userId: this.userId,
            academicProgramId: this.academicProgramId,
            assignedStudents: this.assignedStudents,
            gradedSurveys: this.gradedSurveys,
        };
    }

    toJson(): string {
        return JSON.stringify(this.toMap());
    }
}
