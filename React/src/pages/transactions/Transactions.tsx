import CartEmptyState from '../../components/cart-empty-state/CartEmptyState';
import CartLineItem from '../../components/cart-line-item/CartLineItem';
import ItemButton from '../../components/item-button/ItemButton';
import { Cart } from '../../model/Cart';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Item } from '../../model/Item';
import { cardOutline } from 'ionicons/icons';
import { useState } from 'react';
import './Transactions.css';

const Transactions: React.FC = () => {

    // here you set the initial state using the useState hook:
    const [shoppingCart, setShoppingCart] = useState({
        items: [],
        total: 0
    } as Cart);

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

    function updateCartTotal(cart: Cart): number {
        if (cart.items.length > 0)
            return cart.items.map(cartItem => cartItem.item.price * cartItem.quantity).reduce((total, price) => total + price);
        else 
            return 0;
    }

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
                        {availableItems.map((availableItem) =>
                            <ItemButton
                                id={availableItem.id}
                                title={availableItem.title}
                                price={availableItem.price}
                                key={availableItem.id}
                                onAddItem={() => addCartItem(availableItem)}
                            />
                        )}
                    </IonCardContent>
                </IonCard>
                <IonCard class='ion-padding'>
                    <IonCardHeader>
                        <IonCardTitle>Cart</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent >
                        <CartEmptyState isHidden={shoppingCart.items.length > 0}></CartEmptyState>
                        <IonList hidden={shoppingCart.items.length === 0}>
                            {shoppingCart.items.map((shoppingCartItem) =>
                                <CartLineItem
                                    key={shoppingCartItem.item.id}
                                    title={shoppingCartItem.item.title}
                                    price={shoppingCartItem.item.price}
                                    description={shoppingCartItem.item.description}
                                    quantity={shoppingCartItem.quantity}
                                    onRemoveCartItem={() => removeCartItem(shoppingCartItem.item)}
                                    onAddCartItem={() => addCartItem(shoppingCartItem.item)}
                                ></CartLineItem>
                            )}
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </IonContent>
            <IonFooter collapse='fade' class='ion-padding'>
                <IonItem lines='none'>
                    <IonLabel>Total</IonLabel>
                    <IonLabel slot='end'>{shoppingCart.total.toFixed(2)}€</IonLabel>
                </IonItem>
                <IonButton expand='full' disabled={shoppingCart.items.length === 0}>
                    <IonIcon slot="start" icon={cardOutline}></IonIcon>
                    Confirm Order (identified)
                </IonButton>
                <IonButton expand='full' disabled={shoppingCart.items.length === 0}>
                    <IonIcon slot="start" icon={cardOutline}></IonIcon>
                    Confirm Order (unidentified)
                </IonButton>
            </IonFooter>
        </IonPage>
    );
};

export default Transactions;
