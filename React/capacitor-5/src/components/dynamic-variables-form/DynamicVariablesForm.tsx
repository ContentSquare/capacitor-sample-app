import { DynamicVariablesFormProps } from "../../model/DynamicVariablesFormProps";
import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";

const DynamicVariablesForm: React.FC<DynamicVariablesFormProps> = (props) => {
    return (
        <form onSubmit={(ev) => props.onFormSubmit(ev)}>
            <IonItem counter={true}>
                <IonLabel position="floating">Key</IonLabel>
                <IonInput
                    placeholder="Enter key"
                    maxlength={20}
                    autocomplete="off"
                    inputmode="text"
                    name='keyField'
                    required
                ></IonInput>
            </IonItem>
            <IonItem counter={true}>
                <IonLabel position="floating">Value</IonLabel>
                <IonInput
                    placeholder="Enter value"
                    maxlength={20}
                    autocomplete="off"
                    inputmode={props.valueFormInputMode}
                    type={props.valueFormType}
                    name='valueField'
                    required
                ></IonInput>
            </IonItem>
            <IonButton type='submit'>Send</IonButton>
        </form>
    );
};

export default DynamicVariablesForm;