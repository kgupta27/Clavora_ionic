import { ConstantsProvider } from './../../providers/constants/constants';
import { QuestionnaireProvider } from './../../providers/questionnaire/questionnaire';
import { Component, Input } from '@angular/core';
import * as moment from 'moment';

/**
 * Generated class for the CoursePlanComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'course-plan',
  templateUrl: 'course-plan.html'
})
export class CoursePlanComponent {

  @Input() checkBox: boolean = false;
  @Input() data: any;
  @Input() date: string;
  value: boolean = false;

  constructor(
    public constants: ConstantsProvider,
    private questionnaire: QuestionnaireProvider
  ) {
    console.log('Hello CoursePlanComponent Component');
  }

  ngOnInit() {
    console.log('CoursePlanComponent initialized', this.data);
    this.value = this.data.doseTaken == 0 ? false: true;
  }

  onCheck(event) {
    event.stopPropagation();
    console.log(this.date);
    console.log(moment(this.date).utc().format('YYYY-MM-DD'));
    this.questionnaire.doseTaken(this.data.id, this.value, this.date)
    .subscribe((resp: any) => {
      console.log(resp);
      this.value = !this.value;
    }, err => {
      console.log(err);
    });
  }

  getVitamin() {
    return this.data ? this.data.vitamin.name.replace("Vitamin ", "") : "";
  }
}
