import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface interfaceNumberOfBeingsProps {

    numberOfBeings: string;
    onChangeNumberOfBeings: (event: React.ChangeEvent<HTMLInputElement>) => void;

}


const NumberOfBeings: React.FC<interfaceNumberOfBeingsProps> = ({ numberOfBeings, onChangeNumberOfBeings }) => {


    const [errorMessage, setErrorMessage] = useState<string | undefined>('');
    const validate: (value: string) => string | undefined = (value) => {
        if (!(Number(value) > 999999999) || (!(/^[0-9]*$/).test(value))) {
            return "Number of beings: Numbers ONLY & must > 1,000,000,000."
        };

        return undefined;
    };

    return (
        <>
            <label htmlFor='numberOfBeings'>Number of beings: </label>
            <input id='idOfNumberOfBeings' type='text' value={numberOfBeings} onChange={(event) => {
                const errorMessage = validate(event.target.value);
                setErrorMessage(errorMessage);
                onChangeNumberOfBeings(event);
            }
            }
            />
            < ErrorMessage errorMessage={errorMessage} />
        </>

    );
}

export default NumberOfBeings; 