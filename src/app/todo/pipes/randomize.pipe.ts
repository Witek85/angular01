import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomize'
})
export class RandomizePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(args);
    const extraParams = args.reduce((acc, val) => acc + ` ${val} `);
    return value.split('').map(a => Math.random() > 0.5 ? a : a.toUpperCase()).join('') + extraParams;
  }

}
