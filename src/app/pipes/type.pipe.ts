import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === 0) {
      return 'Other';
    } else if (value === 1) {
      return 'Lodging';
    } else if (value === 2) {
      return 'Travel';
    } else if (value === 3) {
      return 'Food';
    } else {
      return 'Invalid';
    }
  }

}