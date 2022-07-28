import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(arr: any[], textvalue: string, props: string[]) {
    let filteredArr: any = [];
    arr.forEach((obj) => {
      props.forEach((prop) => {
        if (
          obj[prop] &&
          obj[prop].toString().toLowerCase().includes(textvalue.toLowerCase())
        ) {
          if (!filteredArr.includes(obj)) {
            filteredArr.push(obj);
          }
        }
      });
    });
    return filteredArr;
  }
}
