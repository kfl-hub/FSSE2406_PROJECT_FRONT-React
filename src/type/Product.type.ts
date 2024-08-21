export interface GetProductDto {
    pid:         number;
    name:        string;
    description: string;
    imageUrl:    string;
    price:       number;
    hasStock?:    boolean;
    stock?: number;
    category:    string;
}

