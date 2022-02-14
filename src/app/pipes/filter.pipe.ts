import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(technologyDataSources: any[], field:string, value:string): any[] {

  if(!technologyDataSources ){
    return [];
  }
  if(!field || ! value) {
    return technologyDataSources;
  }
    return technologyDataSources.filter((singletechnologyDataSource) =>
        singletechnologyDataSource[field].toLowerCase().includes(value.toLowerCase())
    );
  }

}
