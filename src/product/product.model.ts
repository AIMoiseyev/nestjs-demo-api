export class ProductModel {
  _id: string;
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
