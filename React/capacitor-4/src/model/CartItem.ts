import { Item } from "./Item";

/**
 * Cart Item
 */
 export interface CartItem {
    /**
     * Item object
     */
    item: Item;
    /**
     * Quantity
     */
    quantity: number;
}

