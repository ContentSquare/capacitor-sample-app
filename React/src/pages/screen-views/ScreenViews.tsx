import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const ScreenViews = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="Showcases" />
                    </IonButtons>
                    <IonTitle>Screen Views</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList>
                    <IonItem routerLink='/screen-views/default' routerDirection='forward'>
                        <IonLabel>Default Screen</IonLabel>
                    </IonItem>
                    <IonItem routerLink='/screen-views/modal' routerDirection='forward'>
                        <IonLabel>Modal Screen</IonLabel>
                    </IonItem>
                    <IonItem routerLink='/screen-views/slide' routerDirection='forward'>
                        <IonLabel>Slide Screen</IonLabel>
                    </IonItem>
                    <IonItem routerLink='/screen-views/tabs' routerDirection='forward' >
                        <IonLabel>Tabs</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage >
    );
};

export default ScreenViews;
