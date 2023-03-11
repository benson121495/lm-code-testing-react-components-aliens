import { render, screen } from '@testing-library/react';
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