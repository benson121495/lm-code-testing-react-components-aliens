import { render, screen } from '@testing-library/react';
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