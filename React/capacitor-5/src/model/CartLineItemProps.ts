/**
 * Cart line item props
 */
export interface CartLineItemProps {
    /**
     * Item title
     */
    title: string;
    /**
     * Item price 
     */
    price: number;
    /**
     * Item description
     */
    description: string;
    /**
     * Item quantity in cart
     */
    quantity: number;
    /**
     * Action to remove an item from cart
     */
    onRemoveCartItem: VoidFunction;
    /**
     * Action to add an item from cart
     */
    onAddCartItem: VoidFunction;
}
