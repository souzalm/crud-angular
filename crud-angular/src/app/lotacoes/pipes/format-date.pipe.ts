import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    if (!value) return '';

    const date = new Date(value);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: false, timeZone: 'UTC'
    };

    return date.toLocaleString('pt-BR', options);
  }
}

