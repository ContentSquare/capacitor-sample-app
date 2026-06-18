import { CartLineItemProps } from '../../model/CartLineItemProps';
import { IonButton, IonButtons, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { addCircleOutline, removeCircleOutline } from 'ionicons/icons';


const CartLineItem: React.FC<CartLineItemProps> = (props) => {
  return (
    <IonItem>
      <IonLabel>
        <h3>{props.title}</h3>
        <p>{props.price.toFixed(2)}€</p>
        <p>{props.description}</p>
      </IonLabel>
      <IonButtons slot="end">
        <IonButton color='primary' onClick={props.onRemoveCartItem}>
          <IonIcon icon={removeCircleOutline} ></IonIcon>
        </IonButton>
        {props.quantity}
        <IonButton color='primary' onClick={props.onAddCartItem}>
          <IonIcon icon={addCircleOutline}></IonIcon>
        </IonButton>
      </IonButtons>
    </IonItem>
  );
};

export default CartLineItem;
