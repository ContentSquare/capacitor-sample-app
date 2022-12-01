import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';

const ScreenTabsTwo = () => {
    return (
        <IonPage>
            <IonHeader >
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton routerLink='/screen-views' routerDirection='root'>
                            <IonIcon icon={arrowBackOutline} />
                            Screen views
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Tab 2</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
                This is tab 2 content
            </IonContent>
        </IonPage>
    );
};

export default ScreenTabsTwo;
