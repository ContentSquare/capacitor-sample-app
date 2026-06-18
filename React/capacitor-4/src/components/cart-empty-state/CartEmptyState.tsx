import { IonIcon } from '@ionic/react';
import { cart } from 'ionicons/icons';

interface CartLineItemProps {
  isHidden: boolean;
}

const CartEmptyState: React.FC<CartLineItemProps> = (props) => {
  return (
    <div hidden={props.isHidden} style={{ 'textAlign': 'center' }}>
      <IonIcon icon={cart} class="empty-icon-circle empty-icon-color"></IonIcon>
      <p>Your cart is empty</p>
    </div>
  );
};

export default CartEmptyState;
