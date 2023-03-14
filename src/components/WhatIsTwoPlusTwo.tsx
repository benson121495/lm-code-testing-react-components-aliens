import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface interfaceWhatIsTwoPlusTwoProps {

    whatIsTwoPlusTwo: string;
    onChangeWhatIsTwoPlusTwo: (event: React.ChangeEvent<HTMLSelectElement>) => void;

}

const WhatIsTwoPlusTwo: React.FC<interfaceWhatIsTwoPlusTwoProps> = ({ whatIsTwoPlusTwo, onChangeWhatIsTwoPlusTwo }) => {

    const [errorMessage, setErrorMessage] = useState<string | undefined>('');
    const validate: (value: string) => string | undefined = (value) => {
        if (value === "Not 4") {
            return ' "4" must be selected. Will display an error when select Not 4.'
        };

        return undefined;
    };

    return (
        <>
            <label htmlFor='whatIsTwoPlusTwo'>What is 2 + 2 : </label>
            <select id='idwhatIsTwoPlusTwo' value={whatIsTwoPlusTwo} onChange={(event) => {
                const errorMessage = validate(event.target.value);
                setErrorMessage(errorMessage);
                onChangeWhatIsTwoPlusTwo(event);
            }
            }
            >
                <option value="Not 4">Not 4</option>
                <option value="4">4</option>
            </select>
            < ErrorMessage errorMessage={errorMessage} />

        </>
    );
}

export default WhatIsTwoPlusTwo; 