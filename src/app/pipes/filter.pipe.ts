import { Pipe, PipeTransform } from '@angular/core';
import { TechnologyModel } from 'app/models/technology-model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(dataSources: any[], searchString: string): any[] {

    if (!dataSources) {
      return [];
    }
    if (!searchString || !dataSources) {
      return dataSources;
    }
    return dataSources.filter((dataSource) =>
      dataSource.name?.toLocaleLowerCase().match(searchString.toLocaleLowerCase()) ||
      dataSource.id?.toString().toLocaleLowerCase().match(searchString.toLocaleLowerCase()) ||
      dataSource.phone?.toLocaleLowerCase().match(searchString.toLocaleLowerCase()) ||
      dataSource.email?.toLocaleLowerCase().match(searchString.toLocaleLowerCase()) ||
      dataSource.endClient?.toLocaleLowerCase().match(searchString.toLocaleLowerCase()) ||
      dataSource.invoiceNo?.toString().toLocaleLowerCase().match(searchString.toLocaleLowerCase()) ||
      dataSource.no?.toString().toLocaleLowerCase().match(searchString.toLocaleLowerCase())


    );  
  }

}
