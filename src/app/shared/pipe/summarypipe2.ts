import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary2',
})
export class summarypipe2 implements PipeTransform {
  transform(value: string, limit?: number) {
    if (!limit) {
      limit = 50;
    }

    let words = value.split(' '); 
    let result = words.slice(0, limit).join(' ') + '...'; 
    return result;
  }
}
