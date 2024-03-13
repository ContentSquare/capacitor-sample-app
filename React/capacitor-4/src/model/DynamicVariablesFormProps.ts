/**
 * Dynamic variables form props
 */
export interface DynamicVariablesFormProps {
    /**
     * Value form input mode 
     */
    valueFormInputMode: 'text' | 'numeric';
    /**
     * Value form input type 
     */
    valueFormType: 'number' | 'text';
    /**
     * Action when form is submitted 
     */
    onFormSubmit: (ev: React.FormEvent<HTMLFormElement>) => void;
}