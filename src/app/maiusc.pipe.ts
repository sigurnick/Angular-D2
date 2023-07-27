import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maiusc'
})
export class MaiuscPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value.toUpperCase()
  }

}
