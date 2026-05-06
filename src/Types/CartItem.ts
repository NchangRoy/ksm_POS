import { UpdatedProductResponse } from './Product';

/**
 * A simplified CartItem interface containing only the 
 * base product data and the current quantity.
 */
export interface CartItem extends UpdatedProductResponse {
  /** 
   * The number of units currently in the basket.
   */
  quantity: number;
  unitPrice:number;
  discountPercentage:number,
  total:number
   
}