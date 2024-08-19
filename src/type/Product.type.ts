export interface ProductDto {
    pid:         number;
    name:        string;
    description: string;
    imageUrl:    string;
    price:       number;
    hasStock:    boolean;
    category:    Category;
}

export enum Category {
    Accessories = "accessories",
    MenShoes = "menShoes",
    WomenShoes = "womenShoes",
}
