import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface interfaceReasonForSparingProps {

    reasonForSparing: string;
    onChangeReasonForSparing: (event: React.ChangeEvent<HTMLInputElement>) => void;

}



const ReasonForSparing: React.FC<interfaceReasonForSparingProps> = ({ reasonForSparing, onChangeReasonForSparing }) => {
   
    const [errorMessage, setErrorMessage] = useState<string | undefined>('');
    const validate: (value: string) => string | undefined = (value) => {
        if ((value.length < 2 || value.length >= 200)) {
            return "Reason for sparing: Must be between 2 and 200 characters."
        };

        return undefined;
    };
    return (

        <>
            <label htmlFor='reasonForSparing'>Reason for sparing: </label>
            <input id='idOfReasonForSparing' type='text' value={reasonForSparing} onChange={(event) => {
                const errorMessage = validate(event.target.value);
                setErrorMessage(errorMessage);
                onChangeReasonForSparing(event);
            }
            }
            />
            < ErrorMessage errorMessage={errorMessage} />
        </>

    );
}

export default ReasonForSparing; 