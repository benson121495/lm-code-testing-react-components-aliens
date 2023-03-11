interface interfaceSpeciesNameProps {

    speciesName: string;

    onChangeSpeciesName: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const SpeciesName: React.FC<interfaceSpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => (

    <>

        <label htmlFor='speciesName'>Species Name: </label>

        <input id='idOfSpeciesName' type='text' value={speciesName} onChange={onChangeSpeciesName} />

    </>

);

export default SpeciesName; 