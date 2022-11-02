import React from 'react';
import ServiceCard from '../../components/ServiceCard';
import serviceData from '../../data/service.data';

const Services = () => {
	return (
		<section className='space light'>
			<div className='container container-custom'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='heading-style1'>
							<span>Our Services</span>
							<h2>High Quality Services for You</h2>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='service-slider'>
							{serviceData.map((item, index) => (
								<ServiceCard item={item} key={index} />
							))}
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<p className='text-center service-help_link'>
							Contact us for better help and services.
							<a href='#'>Let’s get started</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
