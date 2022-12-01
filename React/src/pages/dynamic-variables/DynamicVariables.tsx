import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import DynamicVariablesForm from '../../components/dynamic-variables-form/DynamicVariablesForm';

const DynamicVariables = () => {

    const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const keyVal = data.get("keyField");
        const valueVal = data.get("valueField");
        console.log('keyVal : ', keyVal);
        console.log('valueVal : ', valueVal);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="Showcases" />
                    </IonButtons>
                    <IonTitle>Dynamic Variables</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" >
                <IonCard className="ion-padding" >
                    <IonCardContent>
                        <IonCardTitle>This class showcases how to use dynamic variables to gather additional data about the session.</IonCardTitle>
                    </IonCardContent>
                </IonCard>
                <IonCard className="ion-padding">
                    <IonCardTitle>Dynamic Var with string value</IonCardTitle>
                    <IonCardContent>
                        <DynamicVariablesForm
                            valueFormInputMode="text"
                            valueFormType="text"
                            onFormSubmit={(ev) => handleFormSubmit(ev)}
                        ></DynamicVariablesForm>
                    </IonCardContent>
                </IonCard>

                <IonCard className="ion-padding">
                    <IonCardTitle>Dynamic Var with int value</IonCardTitle>
                    <IonCardContent>
                        <DynamicVariablesForm
                            valueFormInputMode="numeric"
                            valueFormType="number"
                            onFormSubmit={(ev) => handleFormSubmit(ev)}
                        ></DynamicVariablesForm>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default DynamicVariables;
