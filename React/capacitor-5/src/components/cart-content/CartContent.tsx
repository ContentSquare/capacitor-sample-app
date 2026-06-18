import CartLineItem from "../cart-line-item/CartLineItem";
import { CartContentProps } from "../../model/CartContentProps";
import { IonList } from "@ionic/react";

const CartContent: React.FC<CartContentProps> = ({ cartItems, onRemoveCartItem, onAddCartItem }) => {
    return (
        <IonList hidden={cartItems.length === 0}>
            {cartItems.map((shoppingCartItem) =>
                <CartLineItem
                    key={shoppingCartItem.item.id}
                    title={shoppingCartItem.item.title}
                    price={shoppingCartItem.item.price}
                    description={shoppingCartItem.item.description}
                    quantity={shoppingCartItem.quantity}
                    onRemoveCartItem={() => onRemoveCartItem(shoppingCartItem.item)}
                    onAddCartItem={() => onAddCartItem(shoppingCartItem.item)}
                ></CartLineItem>
            )}
        </IonList>
    );
}

export default CartContent;