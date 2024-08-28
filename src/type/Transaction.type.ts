export interface TransactionDto {
    tid:      number;
    buyerUid: number;
    datetime: Date;
    status:   string;
    total:    number;
    items:    TransactionItem[];
}

export interface TransactionItem {
    tpid:     number;
    product:  TransactionProduct;
    quantity: number;
    subtotal: number;
    size:     string;
}

export interface TransactionProduct {
    pid:         number;
    name:        string;
    description: string;
    imageUrl:    string;
    price:       number;
    stock:       number;
    category:    string;
}
