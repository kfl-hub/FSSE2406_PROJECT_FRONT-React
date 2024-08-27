import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartContextType {
    cartQuantity: number | undefined;
    setCartQuantity: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartQuantityProvider = ({ children }: { children: ReactNode }) => {
    const [cartQuantity, setCartQuantity] = useState<number | undefined>(undefined);

    return (
        <CartContext.Provider value={{ cartQuantity, setCartQuantity }}>
    {children}
    </CartContext.Provider>
);
};