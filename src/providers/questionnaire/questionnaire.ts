import { HttpProvider } from './../http/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the QuestionnaireProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestionnaireProvider {

  public answers = {};
  public vitaminId;
  public profile = {};

  constructor(
    private http: HttpProvider,
  ) {
    console.log('Hello QuestionnaireProvider Provider');
  }

  prepareAnswers(questions) {
    for (let question of questions) {
      console.log(question);
      console.log(questions.length);
      for (let answer of question.questionAnswer) {
        console.log(answer);
        if (answer.enabled != "0") {
          this.answers[question.id] = answer;
          if(answer.relQuestions && answer.relQuestions!="") {
            questions.splice(questions.indexOf(question)+1, 0, answer.relQuestions);
          }
          break;
        }
      }
    }
    return questions;
  }

  resetAnswers() {
    this.answers = {};
    this.profile = {};
  }

  addAnswer(questionId, answer) {
    this.answers[questionId] = answer;
    console.log(this.answers);
  }

  getVitamins() {
    return this.http.get(this.VITAMINS);
  }

  submitQuestions() {
    let submittedAnswers = [];
    for (let i in this.answers) {
      let answer = {
        "questionId": this.answers[i].questionId,
        "id": this.answers[i].id,
        "value": this.answers[i].value,
        "calculation": this.answers[i].calculation
      };
      submittedAnswers.push(answer);
    }
    return this.http.post(this.SUBMIT_QUESTION, Object.assign({ questions: submittedAnswers }, this.profile));
  }

  getQuestions(data) {
    this.profile = data;
    return this.http.get(this.QUESTIONS.replace('$$', data.vitaminId) + data.profileId);
  }

  getCalendarActivity(startDate, lastDate, profileId) {
    let startMonth = (startDate.getMonth() + 1) > 9 ? (startDate.getMonth() + 1) : '0' + (startDate.getMonth() + 1);
    let startMonthDate = startDate.getDate() > 9 ? startDate.getDate() : '0' + startDate.getDate();
    startDate = startDate.getFullYear() + "-" + startMonth + "-" + startMonthDate;
    let lastMonth = (lastDate.getMonth() + 1) > 9 ? (lastDate.getMonth() + 1) : '0' + (lastDate.getMonth() + 1);
    let lastMonthDate = lastDate.getDate() > 9 ? lastDate.getDate() : '0' + lastDate.getDate();
    lastDate = lastDate.getFullYear() + "-" + lastMonth + "-" + lastMonthDate;
    let url = this.CALENDAR_ACTIVITY.replace('$$', startDate).replace('$$', lastDate);
    if (profileId)
      url = url + "&profileId=" + profileId;
    return this.http.get(url);
  }

  getCoursePlans(profileId) {
    return this.http.get(`${this.COURSES}?profileId=${profileId}`);
  }

  getCoursePlansOfDate(profileId, date, page) {
    return this.http.get(`${this.COURSES}?profileId=${profileId}&date=${date}&page=${page}`);
  }

  doseTaken(id, status, date) {
    let param = {
      coursePlanId: id,
      status: status ? 0 : 1,
      date: date
    };
    return this.http.post(this.DOSE_TAKEN, param);
  }

  markComplete(id, status) {
    return this.http.post(this.MARK_COMPLETE + id, { status: status });
  }

  //APIs
  private VITAMINS = "/vitamins";
  private QUESTIONS = "/vitamin/$$/question?profileId=";
  private SUBMIT_QUESTION = "/create-course";

  private COURSES = "/courses";
  private DOSE_TAKEN = "/dose-taken";
  private MARK_COMPLETE = "/mark-complete/";
  private CALENDAR_ACTIVITY = "/course-activity?startDate=$$&endDate=$$";

}
