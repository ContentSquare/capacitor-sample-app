import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Showcases</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem routerLink='/privacy' routerDirection='forward'>
            <IonLabel>Privacy</IonLabel>
          </IonItem>
          <IonItem routerLink='/screen-views' routerDirection='forward'>
            <IonLabel>Screen Views</IonLabel>
          </IonItem>
          <IonItem routerLink='/transactions' routerDirection='forward'>
            <IonLabel>Transactions</IonLabel>
          </IonItem>
          <IonItem routerLink='/dynamic-variables' routerDirection='forward'>
            <IonLabel>Dynamic Variables</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
