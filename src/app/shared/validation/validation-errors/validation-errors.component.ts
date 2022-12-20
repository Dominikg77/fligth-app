import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss']
})
export class ValidationErrorsComponent implements OnInit {
  @Input() errors : ValidationErrors | undefined | null
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(this.errors)
  }

}
