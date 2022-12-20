import { Pipe, PipeTransform } from '@angular/core';
import { CityService } from './city.service';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {


  constructor(private cityServices: CityService){}

  transform(value: string | undefined, format: 'long' | 'short'): string | undefined {

if (typeof value === 'undefined'){
  return value
}

return this.cityServices.formatName(value, format);

  }

  ngOnDestroy(): void {
    console.debug('Adieu')
  }

}
