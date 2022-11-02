import React from 'react';
import testimonialsData from '../../data/testimonials.data';

const Testimonials = () => {
	return (
		<section className='testimonial pb-0'>
			<div className='container container-custom'>
				<div className='col-md-12'>
					<div className='heading-style1'>
						<span>Testimonials</span>
						<h2>What Our Clients Say</h2>
					</div>
					<div className='testi-slider'>
						{testimonialsData.map((item, index) => (
							<div key={index} className='testimonial-wrap'>
								<img
									src={item.image}
									className='img-fluid testi-img-icon'
									alt='#'
								/>
								<ul>
									<li>
										<i className='fas fa-star' />
									</li>
									<li>
										<i className='fas fa-star' />
									</li>
									<li>
										<i className='fas fa-star' />
									</li>
									<li>
										<i className='fas fa-star' />
									</li>
									<li>
										<i className='fas fa-star' />
									</li>
								</ul>
								<p>{item.text}</p>
								<span className='testi-name'>{item.name}</span>
								<div className='testi-styled-bg'>
									<img
										src='images/testi-side-img_05.png'
										className='img-fluid'
										alt='#'
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
