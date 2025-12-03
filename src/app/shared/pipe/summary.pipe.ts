import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class summarypipe implements PipeTransform {
  transform(value: string,limit?:number) {
    if(!limit){
        limit=50
    }
     
    console.log(value);
    let result = value.substring(0, limit) + '...';
    return result;

    // return 'I Love Js'
  }
}


// summary pipe with 50 words


