import { Injectable } from '@angular/core';
import IQuestion from "../interfaces/IQuestion";
import { BehaviorSubject, Subject, of } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { serverUrl, httpOptionsBase } from '../configs/server.config';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questionUrl = serverUrl + '/questions';
  private httpOptions = httpOptionsBase;

  private questions: IQuestion[] = [];
  public questions$: BehaviorSubject<IQuestion[]> = new BehaviorSubject<IQuestion[]>([]);

  constructor(private http: HttpClient, private router: Router) {
    console.log('questionService Created');
    console.log(this.questions);
    this.retrieveQuestions();
  }

  getQuestionById(id: number | undefined): IQuestion | undefined {
    let question: IQuestion | undefined = this.questions.find((question) => question.id == id);
    return question;
  }

  createNewQuestion(newQuestion: IQuestion, redirect?: boolean): void {
    this.http.post<IQuestion>(this.questionUrl, newQuestion, this.httpOptions).subscribe(() => {
      this.retrieveQuestions();
      if (redirect)
        this.router.navigate(['/admin/selectQuestion']);
    });
  }

  getQuestions(): IQuestion[] {
    return this.questions;
  }

  retrieveQuestions(): void {
    this.http.get<IQuestion[]>(this.questionUrl).subscribe((questionList: IQuestion[]) => {
      this.questions = questionList;
      this.questions$.next(this.questions);
    });
  }


  deleteQuestion(question: IQuestion): void {
    const urlWithId = this.questionUrl + '/' + question.id;
    this.http.delete<IQuestion>(urlWithId, this.httpOptions).subscribe(() => this.retrieveQuestions());
  }

  modifyQuestion(question: IQuestion, redirect?: boolean): void {
    const urlWithId = this.questionUrl + '/' + question.id;
    console.log(question.id);
    this.http.put<IQuestion>(urlWithId, question, this.httpOptions).subscribe(() => {
      this.retrieveQuestions();
      if (redirect)
        this.router.navigate(['/admin/selectQuestion']);
    });
  }
}
