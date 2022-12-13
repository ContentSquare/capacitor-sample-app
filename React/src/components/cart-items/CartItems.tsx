import CartItemButton from "../cart-item-button/CartItemButton";
import { CartItemsProps } from "../../model/CartItemsProps";
import { Item } from "../../model/Item";

const CartItems: React.FC<CartItemsProps> = ({ onAddCartItem }) => {
    const availableItems: Item[] = [
        {
            id: 'it_3534',
            title: 'Item1',
            price: 10,
            description: 'This is the description of item 1',
            images: []
        },
        {
            id: 'it_3532',
            title: 'Item2',
            price: 15,
            description: 'This is the description of item 2',
            images: []
        },
    ];

    return (
        <>
            {availableItems.map((availableItem) =>
                <CartItemButton
                    id={availableItem.id}
                    title={availableItem.title}
                    price={availableItem.price}
                    key={availableItem.id}
                    onAddItem={() => onAddCartItem(availableItem)}
                />
            )}
        </>
    )
}

export default CartItems;