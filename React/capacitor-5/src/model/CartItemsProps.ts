import { Item } from "./Item";

/**
 * Cart Item props
 */
export interface CartItemsProps {
    /**
     * Function called when user add an item to cart
     */
    onAddCartItem: (item: Item) => void
}