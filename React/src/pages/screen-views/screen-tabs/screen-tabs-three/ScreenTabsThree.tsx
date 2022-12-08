import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const ScreenTabsThree = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref='/screen-views' text="Screen Views" />
                    </IonButtons>
                    <IonTitle>Tab 3</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
                This is tab 3 content
            </IonContent>
        </IonPage>
    );
};


export default ScreenTabsThree;

