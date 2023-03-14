import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen } from '@testing-library/react';
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

test(`input the true value will not be return error message`, async () => {

    const testonChangeSpeciesNameEventHandler = jest.fn(event => event.target.value);
    const testInterfaceSpeciesNameProps: interfaceSpeciesNameProps = {
        speciesName: "Human",
        onChangeSpeciesName: testonChangeSpeciesNameEventHandler,
    };
    render(<SpeciesName {...testInterfaceSpeciesNameProps} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    await userEvent.type(screen.getByRole("textbox"), "Earthlings");
    expect(screen.queryByText('No numbers or special characters allowed! Max Length is between 3 to 30.', { exact: false })).not.toBeInTheDocument();

});

test(`input fault short value then return error message `, () => {

    const testonChangeSpeciesNameEventHandler = jest.fn(event => event.target.value);
    const testInterfaceSpeciesNameProps: interfaceSpeciesNameProps = {
        speciesName: "",
        onChangeSpeciesName: testonChangeSpeciesNameEventHandler,
    };
    render(<SpeciesName {...testInterfaceSpeciesNameProps} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "hi" } });
    expect(screen.queryByText('No numbers or special characters allowed! Max Length is between 3 to 30.', { exact: false })).toBeInTheDocument();

});

test(`input fault long value then return error message `, () => {

    const testonChangeSpeciesNameEventHandler = jest.fn(event => event.target.value);
    const testInterfaceSpeciesNameProps: interfaceSpeciesNameProps = {
        speciesName: "",
        onChangeSpeciesName: testonChangeSpeciesNameEventHandler,
    };
    render(<SpeciesName {...testInterfaceSpeciesNameProps} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "peter paker is spider man but everyone are forget him" } });
    expect(screen.queryByText('No numbers or special characters allowed! Max Length is between 3 to 30.', { exact: false })).toBeInTheDocument();

});