import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface interfaceSpeciesNameProps {

    speciesName: string;
    onChangeSpeciesName: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const SpeciesName: React.FC<interfaceSpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>('');
    const validate: (value: string) => string | undefined = (value) => {
        if ((value.length < 3 || value.length > 30) || (!(/^[a-zA-Z]*$/).test(value))) {
            return "No numbers or special characters allowed! Max Length is between 3 to 30."
        };

        return undefined;
    };
    return (
        <>
            <label htmlFor='speciesName'>Species Name: </label>
            <input id='idOfSpeciesName' type='text' value={speciesName} onChange={(event) => {
                const errorMessage = validate(event.target.value);
                setErrorMessage(errorMessage);
                onChangeSpeciesName(event);
            }
            }
            />
            < ErrorMessage errorMessage={errorMessage} />
        </>

    );
}

export default SpeciesName; 