import { statusValues } from './../../../@core/data/status';
import { CustomFormComponent } from './../../generic-components/custom-form/custom-form.component';
import { Campaign } from '../campaign';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.scss']
})

export class CampaignFormComponent extends CustomFormComponent<Campaign> implements OnInit {
  public readonly statuses = statusValues;
  
  constructor(public formBuilder: FormBuilder) {
    super(formBuilder);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}


