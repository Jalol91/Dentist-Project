import React from 'react';

const ServiceCard = ({ item }) => {
	return (
		<div className={`service-block ${item.bg_color}`}>
			<img src={item.image} alt='#' />
			<h3>{item.title}</h3>
			<p>{item.text}</p>

			<div className='service-bg-icon'>
				<img src={item.bg_image} className='img-fluid' alt='#' />
			</div>
		</div>
	);
};

export default ServiceCard;
