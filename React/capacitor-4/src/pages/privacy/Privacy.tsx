import PrivacyCard from '../../components/privacy-card/PrivacyCard';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Privacy = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="Showcases" />
                    </IonButtons>
                    <IonTitle>Privacy</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <PrivacyCard />
            </IonContent>
        </IonPage>
    );
};

export default Privacy;
