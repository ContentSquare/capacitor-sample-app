import { ContentsquarePlugin, DynamicVarItem } from '@contentsquare/capacitor-plugin';
import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import DynamicVariablesForm from '../../components/dynamic-variables-form/DynamicVariablesForm';
import './DynamicVariables.css'

const DynamicVariables = () => {

    const [present] = useIonToast();

    /**
     * This function showcases how to use dynamic variables to gather additional data about the session
     * @param event Submitted form
     * @param type Indication to send string or numeric dynamic variable
     */
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>, type: "int" | "string") => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const keyVal = data.get("keyField")?.toString();
        const valueVal = data.get("valueField")?.toString();

        if (keyVal && valueVal) {
            const dynamicVarItem: DynamicVarItem = {
                dynVarKey: keyVal,
                dynVarValue: type === "string" ? valueVal : parseInt(valueVal)
            }
            ContentsquarePlugin.sendDynamicVar(dynamicVarItem)
                .then(_ => {
                    console.log(`${dynamicVarItem} sent successfully`);
                })
                .catch(e => console.log(e));

            event.currentTarget.reset();
            present({
                message: `Dynamic variable (with ${type} value) sent successfully`,
                duration: 2500,
                position: 'bottom'
            });
        }
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
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Dynamic variables</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        This class showcases how to use dynamic variables to gather additional data about the session.
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Dynamic Var with string value</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <DynamicVariablesForm
                            valueFormInputMode="text"
                            valueFormType="text"
                            onFormSubmit={(ev) => handleFormSubmit(ev, "string")}
                        ></DynamicVariablesForm>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Dynamic Var with int value</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <DynamicVariablesForm
                            valueFormInputMode="numeric"
                            valueFormType="number"
                            onFormSubmit={(ev) => handleFormSubmit(ev, "int")}
                        ></DynamicVariablesForm>
                    </IonCardContent>

                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default DynamicVariables;
