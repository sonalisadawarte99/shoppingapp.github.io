import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(items: any, searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter( (item: any) => {
      return item.name.toLowerCase().includes(searchText);

      // item.name.toLowerCase().includes(searchText) ||
      //   item.description.toLowerCase().includes(searchText)
    })

  // transform(value: any[] , filterString: string , propName: string): any[] {
  //   const result : any = [];
  //   if(!value || filterString === '' || propName ===''){
  //     return value;
  //   }

  //   filterString = filterString.toLowerCase().trim();
  //   return value.filter((item: any) => {
  //     const propValue = item[propName];
  //     return propValue && propValue.toLowerCase().includes(filterString);
  //   });
  // }



    // value.forEach((a:any)=>{
    //   if( a[propName] && a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
    //     result.push(a);
    //   }
    // });
    // return result;





  //   const result: any =[];
    // if(!value || filterString === '' || propName === ''){
    //   return value;
    // }
    // value.forEach((a:any)=>{
    //   if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
    //     result.push(a) ;
    //   }
    // });
    // return result;
    
  // }


  // transform(items: any[], searchText: string, property: string): any[] {
  //   if (!items) {
  //     return [];
  //   }
  //   if (!searchText) {
  //     return items;
  //   }
  //   searchText = searchText.toLowerCase();
  //   return items.filter(item => item[property].toLowerCase().includes(searchText));
  // }

}}
