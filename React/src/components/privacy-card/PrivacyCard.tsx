import { ContentsquarePlugin } from '@contentsquare/capacitor-plugin';
import { IonToggleCustomEvent } from '@ionic/core';
import { IonCard, IonItem, IonLabel, IonToggle, ToggleChangeEventDetail } from '@ionic/react';
import { useState } from 'react';

// This showcases how to use privacy-related APIs.
// You are responsible for creating the UI asking the user for his consent, and then calling the appropriate Contentsquare function.
const PrivacyCard = () => {

  const [isChecked, setIsChecked] = useState(localStorage.getItem('userConsent') === 'true');

   // We call the SDK optIn/optOut methods and store locally if the user has accepted the Privacy Policy.
  const optIn = () => {
    ContentsquarePlugin.optIn();
    localStorage.setItem('userConsent', 'true');
    setIsChecked(true);
  }
  const optOut = () => {
    ContentsquarePlugin.optOut();
    localStorage.removeItem('userConsent');
    setIsChecked(false);
  }

  const toggleAcceptPolicy = (e: IonToggleCustomEvent<ToggleChangeEventDetail>) => {
    const isChecked = e.detail.checked;
    isChecked ? optIn() : optOut();
  }

  return (
    <IonCard>
      <IonItem>
        <IonLabel>Accept Privacy Policy</IonLabel>
        <IonToggle slot='end' checked={isChecked} onIonChange={(e) => toggleAcceptPolicy(e)} />
      </IonItem>
    </IonCard>
  );
};

export default PrivacyCard;
