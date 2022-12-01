import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';

const ScreenTabsThree = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton routerLink='/screen-views' routerDirection='root'>
                        <IonIcon icon={arrowBackOutline} />
                        Screen views
                    </IonButton>
                    <IonTitle>Tab 3</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 3</IonTitle>
                    </IonToolbar>
                </IonHeader>
                This is tab 3 content
            </IonContent>
        </IonPage>
    );
};


export default ScreenTabsThree;

