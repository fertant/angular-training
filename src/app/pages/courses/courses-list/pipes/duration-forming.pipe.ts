import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationForming',
  pure: false
})
export class DurationFormingPipe implements PipeTransform {

  transform(value: number): any {
    const hours = Math.floor(value / 60);
    const minutes = value - (hours * 60);
    return hours + 'h ' + minutes + 'min';
  }

}
