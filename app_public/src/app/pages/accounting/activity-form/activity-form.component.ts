import { CustomFormComponent } from './../../generic-components/custom-form/custom-form.component';
import { Component, OnInit, Input } from "@angular/core";
import { Activity } from "../activity";
import { Utils } from '../../../utils/utils.module';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: "ngx-activity-form",
  templateUrl: "./activity-form.component.html",
  styleUrls: ["./activity-form.component.scss"],
})
export class ActivityFormComponent extends CustomFormComponent<Activity> implements OnInit {
  public activityTypes = Utils.keys(Activity.ActivityTypes);
  public activityAbouts = Utils.keys(Activity.ActivityAbouts);
  public activityBankSafes = Utils.keys(Activity.ActivityBankSafes);

  constructor(public formBuilder: FormBuilder) {
    super(formBuilder);
   }
  ngOnInit() {
    super.ngOnInit();
  }
  public onSubmit(): void {
    console.log(this.form.value); // FIXME. carefull with disabled fields.
  }

}