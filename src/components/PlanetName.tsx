import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface interfaceSPlanetNameProps {

    planetName: string;
    onChangePlanetName: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

const PlanetName: React.FC<interfaceSPlanetNameProps> = ({ planetName, onChangePlanetName }) => {

    const [errorMessage, setErrorMessage] = useState<string | undefined>('');
    const validate: (value: string) => string | undefined = (value) => {
        if ((value.length < 2 || value.length > 40) || (!(/^[a-zA-Z0-9]*$/).test(value))) {
            return "Do not have the special Characters . The maximun length are 40 ."
        };

        return undefined;
    };

    return (
        <>
            <label htmlFor='planetName'>Planet Name: </label>
            <input id='idOfPlanetName' type='text' value={planetName} onChange={(event) => {
                const errorMessage = validate(event.target.value);
                setErrorMessage(errorMessage);
                onChangePlanetName(event);
            }
            }
            />

            < ErrorMessage errorMessage={errorMessage} />
        </>

    );
}

export default PlanetName; 