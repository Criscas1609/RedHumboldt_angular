export interface Survey {
    id: string;
    type: string;
    studentId: string;
    companyId: string;
    tutorId: string;
    responses: { questionId: string; response: string | number }[];
    date: string;
}

export class SurveyModel implements Survey {
    constructor(
        public id: string,
        public type: string,
        public studentId: string,
        public companyId: string,
        public tutorId: string,
        public responses: { questionId: string; response: string | number }[],
        public date: string
    ) { }

    static fromMap(data: any): SurveyModel {
        return new SurveyModel(
            data._id,
            data.type,
            data.studentId,
            data.companyId,
            data.tutorId,
            data.responses,
            data.date
        );
    }

    static fromJson(json: string): SurveyModel {
        return this.fromMap(JSON.parse(json));
    }

    toMap(): any {
        return {
            _id: this.id,
            type: this.type,
            studentId: this.studentId,
            companyId: this.companyId,
            tutorId: this.tutorId,
            responses: this.responses,
            date: this.date,
        };
    }

    toJson(): string {
        return JSON.stringify(this.toMap());
    }
}
