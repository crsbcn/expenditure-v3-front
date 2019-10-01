/* tslint : disable */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // console.log(value);
    if (value === null) {
      return;
    }
    const month = value[1];
    const day = value[2];
    const year = value[0];
    return month + '/' + day + '/' + year;
  }

}
/* tslint: enable */