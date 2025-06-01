import { PracticeStatus } from "../enums/status.enum";

export interface Practice {
  id: string;
  studentId: string;
  businessTutorId: string;
  teacherId: string;
  companyId: string;
  project: string;
  status: PracticeStatus;
  startDate: string;
  endDate: string;
  type: string;
  evaluations: {
    tutor: number;
    teacher: number;
  };
  relatedSurveys: string[];
}

export class PracticeModel implements Practice {
  constructor(
    public id: string,
    public studentId: string,
    public businessTutorId: string,
    public teacherId: string,
    public companyId: string,
    public project: string,
    public status: PracticeStatus,
    public startDate: string,
    public endDate: string,
    public type: string,
    public evaluations: { tutor: number; teacher: number },
    public relatedSurveys: string[]
  ) {}

  static fromMap(data: any): PracticeModel {
    return new PracticeModel(
      data._id,
      data.studentId,
      data.businessTutorId,
      data.teacherId,
      data.companyId,
      data.project,
      data.status,
      data.startDate,
      data.endDate,
      data.type,
      data.evaluations,
      data.relatedSurveys
    );
  }

  static fromJson(json: string): PracticeModel {
    return this.fromMap(JSON.parse(json));
  }

  toMap(): any {
    return {
      _id: this.id,
      studentId: this.studentId,
      businessTutorId: this.businessTutorId,
      teacherId: this.teacherId,
      companyId: this.companyId,
      project: this.project,
      status: this.status,
      startDate: this.startDate,
      endDate: this.endDate,
      type: this.type,
      evaluations: this.evaluations,
      relatedSurveys: this.relatedSurveys,
    };
  }

  toJson(): string {
    return JSON.stringify(this.toMap());
  }
}
