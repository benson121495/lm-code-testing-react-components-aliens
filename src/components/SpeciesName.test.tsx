import userEvent from "@testing-library/user-event";
import { render, screen } from '@testing-library/react';
import SpeciesName, { interfaceSpeciesNameProps } from './SpeciesName'


test("Test the Species Name box must be present", () => {

    render(<SpeciesName speciesName='' onChangeSpeciesName={() => { }} />);
    const testLabelText = screen.getByText(/Species Name:/i);
    expect(testLabelText).toBeInTheDocument();

});

test("pass the Species Name into Props", () => {

    const testInterfaceSpeciesNameProps: interfaceSpeciesNameProps = {
        speciesName: "All are Humans",
        onChangeSpeciesName: () => { },
    };
    render(<SpeciesName{...testInterfaceSpeciesNameProps} />);
    expect(screen.getByDisplayValue(testInterfaceSpeciesNameProps.speciesName)).toBeInTheDocument();

});