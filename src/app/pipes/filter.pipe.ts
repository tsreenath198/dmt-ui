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
    return dataSources.filter((singletechnologyDataSource) =>
      singletechnologyDataSource.name?.toLocaleLowerCase().match(searchString.toLocaleLowerCase()) ||
      singletechnologyDataSource.id?.toString().toLocaleLowerCase().match(searchString.toLocaleLowerCase()) ||
      singletechnologyDataSource.phone?.toLocaleLowerCase().match(searchString.toLocaleLowerCase()) ||
      singletechnologyDataSource.email?.toLocaleLowerCase().match(searchString.toLocaleLowerCase()) ||
      singletechnologyDataSource.endClient?.toLocaleLowerCase().match(searchString.toLocaleLowerCase()) ||
      singletechnologyDataSource.invoiceNo?.toString().toLocaleLowerCase().match(searchString.toLocaleLowerCase()) ||
      singletechnologyDataSource.no?.toString().toLocaleLowerCase().match(searchString.toLocaleLowerCase())


    );  
  }

}
