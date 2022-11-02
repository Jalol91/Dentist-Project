import React from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import ServiceCard from '../../components/ServiceCard';
import ServicesOne from '../../components/ServicesOne';
import serviceData from '../../data/service.data';

const ServicesPage = () => {
	return (
		<div>
			<BreadCrumb title='Services' text='asdfasdf a;sdfja' />
			<div
				className='container container-custom'
				style={{ padding: '100px 0px' }}
			>
				<div className='row'>
					{serviceData.map((item, index) => (
						<div className='col-md-4' key={index}>
							<ServiceCard item={item} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ServicesPage;
