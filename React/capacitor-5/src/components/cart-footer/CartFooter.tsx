import { CartFooterProps } from "../../model/CartFooterPros";
import { ContentsquarePlugin, TransactionItem } from "@contentsquare/capacitor-plugin";
import { IonFooter, IonItem, IonLabel, IonButton, IonIcon } from "@ionic/react";
import { cardOutline } from "ionicons/icons";


const CartFooter: React.FC<CartFooterProps> = ({ cart, onCartValidated }) => {
    /**
     * As a transaction represents a purchase made by a customer, 
     * you don't send the transaction as soon as the user adds an item to the cart
     * @param isTransactionIdentified 
     */
    const sendTransaction = (isTransactionIdentified: boolean) => {
        const transactionItem: TransactionItem = {
            transactionValue: cart.total,
            transactionCurrency: "EUR",
            ...(isTransactionIdentified && { transactionId: 'tr_' + new Date().getTime() })
        }

        ContentsquarePlugin.sendTransaction(transactionItem)
            .finally(() => { // TODO: Add Success and Error callbacks to know if the transaction worked successfully
                onCartValidated();
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <IonFooter collapse='fade' class='ion-padding'>
            <IonItem lines='none'>
                <IonLabel>Total</IonLabel>
                <IonLabel slot='end'>{cart.total.toFixed(2)}€</IonLabel>
            </IonItem>
            <IonButton
                expand='full'
                disabled={cart.items.length === 0}
                onClick={() => sendTransaction(true)}
            >
                <IonIcon slot="start" icon={cardOutline}></IonIcon>
                Confirm Order (identified)
            </IonButton>
            <IonButton
                expand='full'
                disabled={cart.items.length === 0}
                onClick={() => sendTransaction(false)}
            >
                <IonIcon slot="start" icon={cardOutline}></IonIcon>
                Confirm Order (unidentified)
            </IonButton>
        </IonFooter>
    );
}

export default CartFooter;