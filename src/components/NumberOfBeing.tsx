export interface interfaceNumberOfBeingsProps {

    numberOfBeings: string;
    onChangeNumberOfBeings: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

const NumberOfBeings: React.FC<interfaceNumberOfBeingsProps> = ({ numberOfBeings, onChangeNumberOfBeings }) => {

    return (
        <>
            <label htmlFor='numberOfBeings'>Number of beings: </label>
            <input id='idOfNumberOfBeings' type='text' value={numberOfBeings} onChange={onChangeNumberOfBeings} />
        </>

    );
}

export default NumberOfBeings; 