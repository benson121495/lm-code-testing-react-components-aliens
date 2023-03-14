import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen } from '@testing-library/react';
import ReasonForSparing, { interfaceReasonForSparingProps } from './ReasonForSparing'


test("Test the Reson of sparing", () => {

    render(<ReasonForSparing reasonForSparing="" onChangeReasonForSparing={() => { }} />);
    const testLabelText = screen.getByText(/Reason for sparing:/i);
    expect(testLabelText).toBeInTheDocument();

});

test("Pass the Reason of Sparing value into Props", () => {

    const testInterfaceReasonForSparingProps: interfaceReasonForSparingProps = {
        reasonForSparing: "They are very nice!",
        onChangeReasonForSparing: () => { },
    };
    render(<ReasonForSparing{...testInterfaceReasonForSparingProps} />);
    expect(screen.getByDisplayValue(testInterfaceReasonForSparingProps.reasonForSparing)).toBeInTheDocument();

});

test(`input value then not return error message`, () => {

    const testonChangeReasonForSparingEventHandler = jest.fn(event => event.target.value);
    const testInterfaceReasonForSparingProps: interfaceReasonForSparingProps = {
        reasonForSparing: "",
        onChangeReasonForSparing: testonChangeReasonForSparingEventHandler,
    };
    render(<ReasonForSparing {...testInterfaceReasonForSparingProps} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "They are nice! They give advice to me !) " } });
    expect(screen.queryByText('Reason for sparing: Must be between 4 and 200 characters.', { exact: false })).not.toBeInTheDocument();

});

test(`input fault value then return error message `, () => {

    const testonChangeReasonForSparingEventHandler = jest.fn(event => event.target.value);
    const testInterfaceReasonForSparingProps: interfaceReasonForSparingProps = {
        reasonForSparing: "",
        onChangeReasonForSparing: testonChangeReasonForSparingEventHandler,
    };
    render(<ReasonForSparing {...testInterfaceReasonForSparingProps} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "No" } });
    expect(screen.queryByText('Reason for sparing: Must be between 4 and 200 characters.', { exact: false })).toBeInTheDocument();

});