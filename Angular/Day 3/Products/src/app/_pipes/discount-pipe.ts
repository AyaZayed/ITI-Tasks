import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(price: number = 0, discount: number = 0): string {
    console.log(price, discount);

    return (price - (price * discount) / 100).toFixed(2);
  }
}
