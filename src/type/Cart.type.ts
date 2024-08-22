export interface PutCartDto {
    result: string
}

export interface CartItemDto {
    cid: number;
    pid: number;
    name: string;
    imageUrl: string;
    price: number;
    cartQuantity: number;
    stock: number;
    size?: string;
}
