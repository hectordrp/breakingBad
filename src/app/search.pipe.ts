import { Pipe, PipeTransform } from '@angular/core';
import { Character } from './models/character';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Character[], args?: any): any {
    if(!value)return null;
    if(!args)return value;

    args = args.toLowerCase();

    return value.filter((data) => {

        return JSON.stringify(data.name + data.nickname).toLowerCase().includes(args);

    });
  }


}
