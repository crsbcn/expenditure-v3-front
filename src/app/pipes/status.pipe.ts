import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    if (value === 0) {
      return 'Pending';
    } else if (value === 1) {
      return 'Approved';
    } else {
      return 'Denied';
    }
  }

}