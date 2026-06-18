import { CartItem } from "./CartItem";

/**
 * Cart
 */
 export interface Cart {
    /**
     * Cart items
     */
    items: CartItem[];
    /**
     * Total 
     */
    total: number;
    
}