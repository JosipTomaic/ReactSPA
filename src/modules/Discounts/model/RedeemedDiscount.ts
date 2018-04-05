export interface RedeemedDiscount{
    id: number;
    name: string;
    image: string;
    regularPrice: number;
    discountPrice: number;
    dateRedeemed: Date;
}