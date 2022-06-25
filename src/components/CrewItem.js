import React from 'react';

const CrewItem = (props) => {
	const crews = props.crew.map((item) => {
		return (
			<li key={item.id} className={`crew-item ${item.layout}`}>
				<figure className='crew-item-image-wrap'>
					<img
						src={require(`../images/${item.image}`)}
						alt={item.alt}
						className='crew-item-image'
					/>
				</figure>
				<div className='crew-item-info'>
					<div className='crew-item-name'>
						<strong>Name:</strong> {item.name}
					</div>
					<div className='crew-item-position'>
						<strong>Position:</strong> {item.position}
					</div>
					<div className='crew-item-description'>{item.description}</div>
				</div>
			</li>
		);
	});

	return <>{crews}</>;
};

export default CrewItem;
