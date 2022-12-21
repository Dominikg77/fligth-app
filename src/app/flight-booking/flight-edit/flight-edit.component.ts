import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'
import { ThisReceiver } from '@angular/compiler';
import { cityValidator } from 'src/app/shared/validation/reactive/r-validator-city';
import { cityWithParamsValidator } from 'src/app/shared/validation/reactive/city-with-params-validator';
import { FlightService } from '../flight.service';
import { asyncCityValidator } from 'src/app/shared/validation/reactive/async-city-validator';
import { roundTripValidator } from 'src/app/shared/validation/reactive/round-trip-validator';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit {


  formGroup: FormGroup;
  routeFormGroup:FormGroup | undefined;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private flightService: FlightService) {


    this.routeFormGroup = fb.group({
      id: [],
      from: [
        'Graz',
        [
          Validators.required,
          Validators.minLength(3),
          cityWithParamsValidator(['Tripsdrill', 'Graz', 'Hamburg', 'Zürich'])
        ],
        [
          asyncCityValidator(flightService)
        ]
      ],
      to: ['Hamburg'],
    },
    {
      validators: [roundTripValidator()]
    });

    this.formGroup = fb.group({
      id: [],
      route: this.routeFormGroup,
      date: [],
      delayed: []
    })

    this.formGroup = fb.group({
      id: [],
      from: [
        'Graz',
        [
          Validators.required,
          Validators.minLength(3),
          cityWithParamsValidator(['Tripsdrill', 'Graz', 'Hamburg', 'Zürich'])
        ],
        [
          asyncCityValidator(flightService)
        ]
      ],
      to: ['Hamburg'],
      date: [],
      delayed: []
    },
      {
        updateOn: 'blur',
        validators: [roundTripValidator()]
      });

    this.formGroup.controls?.['delayed'].statusChanges.subscribe(
      value => console.debug('deleayed changed', value))

    this.formGroup.statusChanges.subscribe(
      value => console.debug('whole form changed', value)
    )

  }

  ngOnInit(): void {

    this.formGroup.patchValue({
      id: 17,
      from: 'Hamburg',
      to: 'Graz',
      date: new Date().toISOString(),
      delayed: true
    })
  }

  save(): void {
    console.debug('from to save', this.formGroup.value);
    console.debug('id', this.formGroup?.controls?.['id'].value)
  }

}

