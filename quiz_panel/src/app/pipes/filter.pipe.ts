import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filterQuery: any): any[] {
    if (!filterQuery) return items;
    return items.filter(function(item){
        return item.category.toLowerCase().includes(filterQuery.toLowerCase());
    })
  }
}
