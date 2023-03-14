import { fireEvent, render, screen } from '@testing-library/react';
import PlanetName, { interfaceSPlanetNameProps } from './PlanetName';

test("Test the Planet", () => {

    render(<PlanetName planetName="" onChangePlanetName={() => { }} />);
    const testLabelText = screen.getByText(/Planet Name:/i);
    expect(testLabelText).toBeInTheDocument();

});

test("Pass the Planet Name into Props ", () => {

    const testInterfaceSPlanetNameProps: interfaceSPlanetNameProps = {
        planetName: "Earth",
        onChangePlanetName: () => { },
    };
    render(<PlanetName{...testInterfaceSPlanetNameProps} />);
    expect(screen.getByDisplayValue(testInterfaceSPlanetNameProps.planetName)).toBeInTheDocument();

});

test(`Test the input form with no error message`, () => {

    const testonChangePlanetNameEventHandler = jest.fn(event => event.target.value);
    const testInterfaceSPlanetNameProps: interfaceSPlanetNameProps = {
        planetName: "",
        onChangePlanetName: testonChangePlanetNameEventHandler,
    };
    render(<PlanetName {...testInterfaceSPlanetNameProps} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "Gaia" } });
    expect(screen.queryByText('Do not have the special Characters . The maximun length are 40 ', { exact: false })).not.toBeInTheDocument();
});

test(`Test the input with error message`, () => {

    const testonChangePlanetNameEventHandler = jest.fn(event => event.target.value);
    const testInterfaceSPlanetNameProps: interfaceSPlanetNameProps = {
        planetName: "",
        onChangePlanetName: testonChangePlanetNameEventHandler,
    };
    render(<PlanetName {...testInterfaceSPlanetNameProps} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "w" } });
    expect(screen.queryByText('Do not have the special Characters . The maximun length are 40', { exact: false })).toBeInTheDocument();

});