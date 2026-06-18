import CartEmptyState from '../../components/cart-empty-state/CartEmptyState';
import { Cart } from '../../model/Cart';
import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Item } from '../../model/Item';
import { useState } from 'react';
import './Transactions.css';
import CartFooter from '../../components/cart-footer/CartFooter';
import CartContent from '../../components/cart-content/CartContent';
import CartItems from '../../components/cart-items/CartItems';

const Transactions: React.FC = () => {

    const [shoppingCart, setShoppingCart] = useState({
        items: [],
        total: 0
    } as Cart);

    /**
     * Update total price
     * @param cart cart
     * @returns 
     */
    function updateCartTotal(cart: Cart): number {
        if (cart.items.length > 0)
            return cart.items.map(cartItem => cartItem.item.price * cartItem.quantity).reduce((total, price) => total + price);
        else
            return 0;
    }

    /**
     * Add item to the cart
     * @param item item
     */
    const addCartItem = (item: Item) => {
        const index = shoppingCart.items.findIndex((cartItem) => cartItem.item.id === item.id);
        if (index > -1) {
            setShoppingCart(prevState => {
                prevState.items[index].quantity++;
                prevState.total = updateCartTotal(prevState);
                return { ...prevState };
            });
        } else {
            setShoppingCart(prevState => {
                prevState.items.push({
                    item: item,
                    quantity: 1
                });
                prevState.total = updateCartTotal(prevState);
                return { ...prevState };
            })
        }
    }

    /**
     * Remove item from cart
     * @param item item
     */
    const removeCartItem = (item: Item) => {
        const index = shoppingCart.items.findIndex((cartItem) => cartItem.item.id === item.id);
        if (index > -1) {
            if (shoppingCart.items[index].quantity > 1) {
                setShoppingCart(prevState => {
                    prevState.items[index].quantity--;
                    prevState.total = updateCartTotal(prevState);
                    return { ...prevState };
                });
            } else {
                setShoppingCart(prevState => {
                    prevState.items.splice(index, 1);
                    prevState.total = updateCartTotal(prevState);
                    return { ...prevState };
                });
            }
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton text='Showcases' />
                    </IonButtons>
                    <IonTitle>Transactions</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard className='ion-padding'>
                    <IonCardHeader>
                        <IonCardTitle>Items</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <CartItems onAddCartItem={(item) => addCartItem(item)} />
                    </IonCardContent>
                </IonCard>
                <IonCard className='ion-padding'>
                    <IonCardHeader>
                        <IonCardTitle>Cart</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent >
                        <CartEmptyState isHidden={shoppingCart.items.length > 0}></CartEmptyState>
                        <CartContent
                            cartItems={shoppingCart.items}
                            onRemoveCartItem={(item) => removeCartItem(item)}
                            onAddCartItem={(item) => addCartItem(item)}
                        />
                    </IonCardContent>
                </IonCard>
            </IonContent>
            <CartFooter cart={shoppingCart} onCartValidated={() => setShoppingCart({ items: [], total: 0 })} />
        </IonPage>
    );
};

export default Transactions;
