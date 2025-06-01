import { QuestionCategory } from "../enums/question_category.enum";
import { QuestionType } from "../enums/question_type.enum";

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  category: QuestionCategory;
  options: (string | number)[];
  mandatory: boolean;
}

export class QuestionModel implements Question {
  constructor(
    public id: string,
    public text: string,
    public type: QuestionType,
    public category: QuestionCategory,
    public options: (string | number)[],
    public mandatory: boolean
  ) {}

  static fromMap(data: any): QuestionModel {
    return new QuestionModel(
      data._id,
      data.text,
      data.type,
      data.category,
      data.options,
      data.mandatory
    );
  }

  static fromJson(json: string): QuestionModel {
    return this.fromMap(JSON.parse(json));
  }

  toMap(): any {
    return {
      _id: this.id,
      text: this.text,
      type: this.type,
      category: this.category,
      options: this.options,
      mandatory: this.mandatory,
    };
  }

  toJson(): string {
    return JSON.stringify(this.toMap());
  }
}
