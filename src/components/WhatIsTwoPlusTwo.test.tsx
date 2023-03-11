
import { render, screen } from '@testing-library/react';
import WhatIsTwoPlusTwo , {interfaceWhatIsTwoPlusTwoProps} from './WhatIsTwoPlusTwo'

test("Given the required props , when the component is rendered, then the What is 2 + 2 label must be present", () => {

    render(<WhatIsTwoPlusTwo whatIsTwoPlusTwo = "" onChangeWhatIsTwoPlusTwo = { () => {} } />);
    const testLabelText = screen.getByText("What is 2 + 2 :");
    expect(testLabelText).toBeInTheDocument();

});

test("Given the required props , when the component is rendered, then the valid data must be present",()=>{

    const testInterfaceWhatIsTwoPlusTwoProps:interfaceWhatIsTwoPlusTwoProps = {
        whatIsTwoPlusTwo:"Not 4",
        onChangeWhatIsTwoPlusTwo:() => {},
    };
    render(<WhatIsTwoPlusTwo{ ... testInterfaceWhatIsTwoPlusTwoProps } />);
    expect(screen.getByDisplayValue(testInterfaceWhatIsTwoPlusTwoProps.whatIsTwoPlusTwo)).toBeInTheDocument();

});

test("Given the required props , when the component is rendered, then it must provide two options",()=>{

    render(<WhatIsTwoPlusTwo whatIsTwoPlusTwo="Not 4" onChangeWhatIsTwoPlusTwo={ () => {} } />);
    const testTwoOptions =  screen.getAllByRole("option");
    expect(testTwoOptions.length).toEqual(2);

});