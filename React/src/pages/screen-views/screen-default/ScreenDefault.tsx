import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const ScreenDefault = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="Screen Views" />
                    </IonButtons>
                    <IonTitle>Default</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" >
                This implements screen views by subscribing to React Router events. Look at the implementation in App.tsx
            </IonContent>
        </IonPage >
    );
};

export default ScreenDefault;
