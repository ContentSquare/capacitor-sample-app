import { IonModal, IonHeader, IonToolbar, IonButton, IonTitle, IonContent, IonItem, IonLabel } from "@ionic/react"
import { ContentsquarePlugin } from '@contentsquare/capacitor-plugin';


interface GdprModalProps {
    isOpen: boolean;
    onDismissModal: VoidFunction
}
const GdrpModal: React.FC<GdprModalProps> = (props) => {

    const handleAcceptTerm = () => {
        // We call the optIn() method of the SDK and store the value locally
        ContentsquarePlugin.optIn();
        localStorage.setItem("userConsent", "true");
        props.onDismissModal();
    }

    const handleRejectTerm = () => {
        // We call the optOut() method of the SDK and delete the value locally
        ContentsquarePlugin.optOut();
        localStorage.removeItem("userConsent");
        props.onDismissModal();
    }

    return (
        <IonModal isOpen={props.isOpen}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Privacy Policy</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <p className="ion-padding-horizontal">Contentsquare collects usage data on your app.
                    By default, the SDK will consider every new user to be opted-out. To start tracking, the SDK Opt-in API must be
                    called.<br /><br />You are responsible for creating the UI asking the user for his consent and allowing him to manage his privacy
                    settings and then calling the appropriate Contentsquare following functions (opt-in, opt-out, forget me...).<br /><br />
                    The user can change his preferences at any time in the Privacy page.</p>

                <IonItem>
                    <IonLabel class="ion-text-wrap">Do you accept the terms and conditions?</IonLabel>
                    <IonButton color="success" expand="block" onClick={handleAcceptTerm}>Accept</IonButton>
                </IonItem>
                <IonItem>
                    <IonLabel class="ion-text-wrap">If you reject the Privacy Policy, Contentsquare SDK features will be
                        disabled. You can accept the policy in the "Privacy" page</IonLabel>
                    <IonButton color="warning" expand="block" onClick={handleRejectTerm}>Reject</IonButton>
                </IonItem>
            </IonContent >
        </IonModal >
    )
}

export default GdrpModal;