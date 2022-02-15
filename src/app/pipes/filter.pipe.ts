import { Pipe, PipeTransform } from '@angular/core';
import { TechnologyModel } from 'app/models/technology-model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(technologyDataSources: any[], searchString: string): any[] {

    if (!technologyDataSources) {
      return [];
    }
    if (!searchString || !technologyDataSources) {
      return technologyDataSources;
    }
    return technologyDataSources.filter((singletechnologyDataSource) =>
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
