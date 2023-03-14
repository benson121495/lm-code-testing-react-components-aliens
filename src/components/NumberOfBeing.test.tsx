import { fireEvent, render, screen } from '@testing-library/react';
import NumberOfBeings, { interfaceNumberOfBeingsProps } from './NumberOfBeing';

test("Test the Number of Beings field", () => {

    render(<NumberOfBeings numberOfBeings="" onChangeNumberOfBeings={() => { }} />);
    const testLabelText = screen.getByText(/Number Of Beings:/i);
    expect(testLabelText).toBeInTheDocument();

});

test("Pass the valut in to Props", () => {

    const testInterfaceSNumberOfBeingsProps: interfaceNumberOfBeingsProps = {
        numberOfBeings: "4757575783",
        onChangeNumberOfBeings: () => { },
    };
    render(<NumberOfBeings{...testInterfaceSNumberOfBeingsProps} />);
    expect(screen.getByDisplayValue(testInterfaceSNumberOfBeingsProps.numberOfBeings)).toBeInTheDocument();

});

test(`Test the vailed error message`, () => {

    const testonChangeNumberOfBeingsEventHandler = jest.fn(event => event.target.value);
    const testInterfaceSNumberOfBeingsProps: interfaceNumberOfBeingsProps = {
        numberOfBeings: "",
        onChangeNumberOfBeings: testonChangeNumberOfBeingsEventHandler,
    };
    render(<NumberOfBeings {...testInterfaceSNumberOfBeingsProps} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "1000234567" } });
    expect(screen.queryByText('Number of beings: Numbers ONLY & must > 1,000,000,000.', { exact: false })).not.toBeInTheDocument();

});

test(`Test the vailed error message`, () => {

    const testonChangeNumberOfBeingsEventHandler = jest.fn(event => event.target.value);
    const testInterfaceSNumberOfBeingsProps: interfaceNumberOfBeingsProps = {
        numberOfBeings: "",
        onChangeNumberOfBeings: testonChangeNumberOfBeingsEventHandler,
    };
    render(<NumberOfBeings {...testInterfaceSNumberOfBeingsProps} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "123" } });
    expect(screen.queryByText('Number of beings: Numbers ONLY & must > 1,000,000,000.', { exact: false })).toBeInTheDocument();

});