import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import { useRef } from 'react';

const ScreenModal = () => {

    const modal = useRef<HTMLIonModalElement>(null);

    function onWillDismiss(_ev: CustomEvent<OverlayEventDetail>) { }

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
                <IonButton id="open-modal">
                    Open
                </IonButton>

                <IonModal ref={modal} trigger="open-modal" onWillDismiss={onWillDismiss}>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Modal Screen</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        <p>This is the modal screen. When it's closed, the opener screen will also send its screen name.</p>
                        <IonButton onClick={() => modal.current?.dismiss()} expand="full">Close</IonButton>
                    </IonContent>
                </IonModal>
            </IonContent>
        </IonPage>
    );
};

export default ScreenModal;
