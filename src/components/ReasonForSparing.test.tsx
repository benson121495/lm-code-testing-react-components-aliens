import userEvent from "@testing-library/user-event";
import { render, screen } from '@testing-library/react';
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