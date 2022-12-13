import { Cart } from "./Cart";

/**
 * Cart Footer props
 */
export interface CartFooterProps {
    /**
     * Cart : contains added items 
     */
    cart: Cart;
    /**
     * Called when a transaction is confirmed
     */
    onCartValidated: VoidFunction
}
