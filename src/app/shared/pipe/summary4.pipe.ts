import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'summary4'
})

export class summarypipe4 implements PipeTransform {


    transform(value: string, limit:number=50) {
        if(!limit){
            limit=50;
        }
        return (value.split('').slice(0,50).join(' ')+'...')
    }
}