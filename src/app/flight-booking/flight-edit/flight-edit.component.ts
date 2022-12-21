import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms'
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

  metaData = [
    {label: 'FlugNumer', name: 'id', type: 'text'},
    {label: 'Route', name: 'route', type: 'readonly'},
    {label: 'Date', name: 'date', type: 'text'},
    {label: 'delayed', name: 'delayed', type: 'checkbox'},
  ]

  formGroup: FormGroup;
  routeFormGroup:FormGroup;
  categoriesFromArray: FormArray
  // routeFormGroup: any;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private flightService: FlightService
  ) {

    this.categoriesFromArray = fb.array([]);

    this.routeFormGroup = fb.group({
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
      categories: this.categoriesFromArray,
      date: [],
      delayed: []
    });

    this.formGroup.controls?.['delayed'].statusChanges.subscribe(
      value => console.debug('delayed changed', value)
    );

    this.formGroup.statusChanges.subscribe(
      value => console.debug('whole form changed', value)
    );

  }

  addCategory(): void {
    this.categoriesFromArray.push(
      this.fb.group({
        categoryName: [],
        basePrice: []
      })
    );
  }

  save(): void {
    console.debug('form to save', this.formGroup.value);
    console.debug('id', this.formGroup.controls['id'].value);
  }

  ngOnInit(): void {

  //   this.route.params.subscribe(p => {
  //     this.id = p.id;
  //     this.showDetails = p.showDetails;
  //   });
  // }

}
}
