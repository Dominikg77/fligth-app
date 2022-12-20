import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms'
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit {


  formGroup: FormGroup ;


  // id = 0;
  // showDetails = false;

  constructor(private route: ActivatedRoute, private fb: FormBuilder ) {

    this.formGroup = fb.group({
      id: [],
      from: [
        'Graz',
        [Validators.required, Validators.minLength(3)]
      ],
      to: ['Hamburg'],
      date: [],
      delayed: []
    });

    this.formGroup.controls?.['delayed'].statusChanges.subscribe(
      value => console.debug('deleayed changed', value))

this.formGroup.statusChanges.subscribe(
  value => console.debug('whole form changed', value)
)

  }

  ngOnInit(): void {

    // this.route.params.subscribe( p => {
    //   this.id = p['id'];
    //   this.showDetails = p['showDetails'];
    // } )

    this.formGroup.patchValue({
      id: 17,
      from: 'hier',
      to: 'da',
      date: new Date().toISOString(),
      delayed: true

    })


  }

  save(): void {
    console.debug('from to save', this.formGroup.value);
    console.debug('id', this.formGroup?.controls?.['id'].value)
  }

}

