
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const ScreenTabsOne = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref='/screen-views' text="Screen Views" />
                    </IonButtons>
                    <IonTitle>Tab 1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
                This is tab 1 content
            </IonContent>
        </IonPage>
    );
};

export default ScreenTabsOne;
