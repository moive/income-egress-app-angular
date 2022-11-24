import { Pipe, PipeTransform } from '@angular/core';
import { IincomeEgress } from 'src/interfaces/income-egress.interface';

@Pipe({
  name: 'sortIncomeEgress',
})
export class SortIncomeEgressPipe implements PipeTransform {
  transform(items: IincomeEgress[]): IincomeEgress[] {
    return items.slice().sort((a, b) => {
      if (a.type === '1') return -1;
      else return 1;
    });
  }
}
