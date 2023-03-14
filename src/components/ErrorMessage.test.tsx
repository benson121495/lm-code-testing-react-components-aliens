import { render, screen } from "@testing-library/react";
import ErrorMessage, { interfaceErrorMessageProps } from "./ErrorMessage";



test("Test the Output with the error message", () => {

    const testInterfaceErrorMessageProps: interfaceErrorMessageProps = {
        errorMessage: 'An unexpected error occured'
    };
    render(<ErrorMessage {...testInterfaceErrorMessageProps} />);
    expect(screen.getByText("" + testInterfaceErrorMessageProps.errorMessage)).toBeInTheDocument();

});
