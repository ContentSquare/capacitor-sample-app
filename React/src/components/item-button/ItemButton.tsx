import { IonButton, IonIcon } from '@ionic/react';
import { ItemButtonProps } from '../../model/ItemButtonProps';
import { cart } from 'ionicons/icons';
import './ItemButton.css';

const ItemButton: React.FC<ItemButtonProps> = (props) => {
  return (
    <IonButton expand='full' id={props.id} onClick={props.onAddItem}>
      <IonIcon slot="start" icon={cart}></IonIcon>
      {props.title} : €{props.price.toFixed(2)}
    </IonButton>
  );
};

export default ItemButton;
