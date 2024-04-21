export interface CopyListDetail {
    responseData: {
      antiquityYears: number;
      total: number;
      totalDiscount: number;
      copies: {
        name: string;
        author: string;
        price: number;
        discount: number;
        totalPrice: number;
      }[];
    };
}