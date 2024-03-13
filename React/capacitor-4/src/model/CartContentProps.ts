import { CartItem } from "./CartItem";
import { Item } from "./Item";

/**
 * Cart Content props
 */
export interface CartContentProps {
    /**
     * Cart items
     */
    cartItems: CartItem[];
    /**
     * Function called when an item is removed from the cart  
     */
    onRemoveCartItem: (item: Item) => void
    /**
    * Function called when an item is added to the cart  
    */
    onAddCartItem: (item: Item) => void
}