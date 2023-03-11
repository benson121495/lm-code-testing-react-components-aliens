interface interfaceSPlanetNameProps {

    planetName: string;

    onChangePlanetName: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

const PlanetName: React.FC<interfaceSPlanetNameProps> = ({ planetName, onChangePlanetName }) => (

    <>

        <label htmlFor='planetName'>Planet Name: </label>

        <input id='idOfPlanetName' type='text' value={planetName} onChange={onChangePlanetName} />

    </>

);

export default PlanetName; 