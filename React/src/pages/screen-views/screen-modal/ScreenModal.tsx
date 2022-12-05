import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { sendScreenName } from '../../../App';
import { useRef } from 'react';

const ScreenModal = () => {

    const modal = useRef<HTMLIonModalElement>(null);

    // When the user close the modal, this screen sends its name again
    const onWillDismiss = () => {
        sendScreenName("/screen-views/screen-modal");
    }

    // When the user opens the modal, we send the screen name of the modal
    const presentModal = () => {
        sendScreenName("/screen-views/screen-modal/modal");
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="Screen Views" />
                    </IonButtons>
                    <IonTitle>Modal</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <p>Tapping the Open Modal button will present a modal. When the modal opens it sends a screen view, and when it's closed, this screen will also send a screen view.</p>
                <IonButton id="open-modal" onClick={presentModal}>
                    Open
                </IonButton>
                <IonModal ref={modal} trigger="open-modal" onWillDismiss={onWillDismiss}>
                    <IonContent className="ion-padding">
                        <p>This is the modal screen. When it's closed, the opener screen will also send its screen name.</p>
                        <IonButton onClick={() => modal.current?.dismiss()}>Close</IonButton>
                    </IonContent>
                </IonModal>
            </IonContent>
        </IonPage>
    );
};

export default ScreenModal;
