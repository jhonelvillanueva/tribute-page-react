import React from 'react';
import './Crew.css';
import { crew } from './helper';
import CrewItem from './CrewItem';

const Crew = () => {
	return (
		<div className='crew'>
			<div className='crew-container'>
				<div className='crew-wrapper'>
					<ul className='crew-items'>
						<CrewItem crew={crew} />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Crew;
