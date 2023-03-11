import { useState } from 'react';
import SpeciesName from './speciesName';
import PlanetName from './planetName';
import NumberOfBeings from './numberOfBeing';
import WhatIsTwoPlusTwo from './whatIsTwoPlusTwo';
import ReasonForSparing from './ReasonForSparing';

import W12MHeader from './W12MHeader';

const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState<string>('Benson');
	const [planetName, setPlanetName] = useState<string>('Moon');
	const [numberOfBeings, setNumberOfBeings] = useState<string>('6761937187');
	const [whatIsTwoPlusTwo, setWhatIsTwoPlusTwo] = useState<string>('Not = 4');
	const [reasonForSparing, setReasonForSparing] = useState<string>('Just For Testing');

	const formSubmitter = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(`species Name: ${speciesName},
					 	planet Name: ${planetName},
					    number Of Beings:${numberOfBeings}, 
					    what Is 2 + 2  : ${whatIsTwoPlusTwo},
					    reason For Sparing: ${reasonForSparing}`);
	};

	return (
		<section className='w12MForm'>
			<form onSubmit={formSubmitter}>
				<W12MHeader />

				{<SpeciesName
					speciesName={speciesName}
					onChangeSpeciesName={(event: any) => setSpeciesName(event.target.value)}
				/>}

				<p></p>

				<PlanetName
					planetName={planetName}
					onChangePlanetName={(event: any) => setPlanetName(event.target.value)}
				/>

				<p></p>

				<NumberOfBeings
					numberOfBeings={numberOfBeings}
					onChangeNumberOfBeings={(event: any) => setNumberOfBeings(event.target.value)}
				/>

				<p></p>

				<WhatIsTwoPlusTwo
					whatIsTwoPlusTwo={whatIsTwoPlusTwo}
					onChangeWhatIsTwoPlusTwo={(event: any) => setWhatIsTwoPlusTwo(event.target.value)}
				/>
				<p></p>

				<ReasonForSparing
					reasonForSparing={reasonForSparing}
					onChangeReasonForSparing={(event: any) => setReasonForSparing(event.target.value)}
				/>
				<p></p>

				<button type='submit' >Submit Form</button>
			</form>
		</section>

	);
};

export default W12MForm;
