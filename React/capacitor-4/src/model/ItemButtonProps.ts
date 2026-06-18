import { Item } from "./Item";

/**
 * Item
 */
export interface ItemButtonProps {
    /**
     * Item amount
     */
    amount?: number;
    /**
    * Item description
    */
    description?: string;
    /**
     * Item id
     */
    id?: string;
    /**
     * Item images - relative path
     */
    images?: string[];
    /**
    * Item price
    */
    price: number;
    /**
     * Item title
     */
    title: string;
    /**
     * Add Item
     */
    onAddItem: VoidFunction;
}



