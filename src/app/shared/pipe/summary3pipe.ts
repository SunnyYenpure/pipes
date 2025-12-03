import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'summary1'
})

export class summarypipe3 implements PipeTransform{
// transform(value: string, limit?:number ) {
//     if(!limit){
//         limit=50
//     }

//     let words1=value.split(' ');
//     let result1=words1.slice(0,limit).join(' ')+'...'
//     return result1
// }
transform(value: string, limit:number=100) {
    return value .slice(0,limit)+"..."
}
}