export class ProductModel {
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  credit: number;
  calculatedRating: number;
  description: string;
  advantages: string;
  disAdvantades: string;
  categories: string[];
  tags: string;
  caharacteristics: {
    [key: string]: string;
  };
}
