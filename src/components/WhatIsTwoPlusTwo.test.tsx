
import { fireEvent, render, screen } from '@testing-library/react';
import WhatIsTwoPlusTwo, { interfaceWhatIsTwoPlusTwoProps } from './WhatIsTwoPlusTwo'

test("Given the required props , when the component is rendered, then the What is 2 + 2 label must be present", () => {

    render(<WhatIsTwoPlusTwo whatIsTwoPlusTwo="" onChangeWhatIsTwoPlusTwo={() => { }} />);
    const testLabelText = screen.getByText("What is 2 + 2 :");
    expect(testLabelText).toBeInTheDocument();

});

test("Given the required props , when the component is rendered, then the valid data must be present", () => {

    const testInterfaceWhatIsTwoPlusTwoProps: interfaceWhatIsTwoPlusTwoProps = {
        whatIsTwoPlusTwo: "Not 4",
        onChangeWhatIsTwoPlusTwo: () => { },
    };
    render(<WhatIsTwoPlusTwo{...testInterfaceWhatIsTwoPlusTwoProps} />);
    expect(screen.getByDisplayValue(testInterfaceWhatIsTwoPlusTwoProps.whatIsTwoPlusTwo)).toBeInTheDocument();

});

test("Given the required props , when the component is rendered, then it must provide two options", () => {

    render(<WhatIsTwoPlusTwo whatIsTwoPlusTwo="Not 4" onChangeWhatIsTwoPlusTwo={() => { }} />);
    const testTwoOptions = screen.getAllByRole("option");
    expect(testTwoOptions.length).toEqual(2);

});

test(`pass 4 then no return error message`, () => {

    const testonChangeWhatIsTwoPlusTwoEventHandler = jest.fn(event => event.target.value);
    const testInterfaceWhatIs2Plus2Props: interfaceWhatIsTwoPlusTwoProps = {
        whatIsTwoPlusTwo: "Not 4",
        onChangeWhatIsTwoPlusTwo: testonChangeWhatIsTwoPlusTwoEventHandler,
    };
    render(<WhatIsTwoPlusTwo {...testInterfaceWhatIs2Plus2Props} />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "4" } });
    expect(testonChangeWhatIsTwoPlusTwoEventHandler).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('"4" must be selected. Will display an error when select Not 4.', { exact: false })).not.toBeInTheDocument();

});

test(`pass not 4 then return error message`, () => {

    const testonChangeWhatIsTwoPlusTwoEventHandler = jest.fn(event => event.target.value);
    const testInterfaceWhatIs2Plus2Props: interfaceWhatIsTwoPlusTwoProps = {
        whatIsTwoPlusTwo: "Not 4",
        onChangeWhatIsTwoPlusTwo: testonChangeWhatIsTwoPlusTwoEventHandler,
    };
    render(<WhatIsTwoPlusTwo {...testInterfaceWhatIs2Plus2Props} />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "Not 4" } });
    expect(testonChangeWhatIsTwoPlusTwoEventHandler).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('"4" must be selected. Will display an error when select Not 4.', { exact: false })).toBeInTheDocument();

});