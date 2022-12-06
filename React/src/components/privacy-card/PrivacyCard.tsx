import { ContentsquarePlugin } from '@contentsquare/capacitor-plugin';
import { IonToggleCustomEvent } from '@ionic/core';
import { IonCard, IonItem, IonLabel, IonToggle, ToggleChangeEventDetail } from '@ionic/react';
import { useState } from 'react';


const PrivacyCard = () => {

  const [isChecked, setIsChecked] = useState(localStorage.getItem('userConsent') === 'true');

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
