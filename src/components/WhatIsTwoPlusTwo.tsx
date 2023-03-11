interface interfaceWhatIsTwoPlusTwoProps {

    whatIsTwoPlusTwo: string;

    onChangeWhatIsTwoPlusTwo: (event: React.ChangeEvent<HTMLSelectElement>) => void;

}

const WhatIsTwoPlusTwo: React.FC<interfaceWhatIsTwoPlusTwoProps> = ({ whatIsTwoPlusTwo, onChangeWhatIsTwoPlusTwo }) => (

    <>
        <label htmlFor='whatIs2Plus2'>What is 2 + 2 : </label>
        <select id='idwhatIs2Plus2' value={whatIsTwoPlusTwo} onChange={onChangeWhatIsTwoPlusTwo}>
            <option value="Not 4">Not 4</option>
            <option value="4">4</option>
        </select>    </>

);

export default WhatIsTwoPlusTwo; 