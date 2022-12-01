
import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';

const ScreenTabsOne = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton routerLink='/screen-views' routerDirection='root'>
                        <IonIcon icon={arrowBackOutline} />
                        Screen views
                    </IonButton>
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
