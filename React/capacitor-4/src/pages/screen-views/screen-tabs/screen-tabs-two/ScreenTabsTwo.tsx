import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const ScreenTabsTwo = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref='/screen-views' text="Screen Views" />
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
