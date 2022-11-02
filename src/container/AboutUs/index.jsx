import React from 'react';
import AboutInfo from '../../components/AboutInfo';

const AboutUs = () => {
	return (
		<section className='about-section'>
			<div className='container container-custom'>
				<div className='row'>
					<div className='col-md-12'>
						{/* booking form */}
						<ul className='booking-form'>
							<li>
								<input
									type='text'
									className='form-control'
									placeholder='Enter Your Name'
								/>
								<i className='fas fa-user' />
							</li>
							<li>
								<input
									type='text'
									className='form-control'
									placeholder='Select Your Location'
								/>
								<i className='fas fa-map-marker-alt' />
							</li>
							<li>
								<select className='custom-select form-control'>
									<option selected>Select a Service</option>
									<option value={1}>One</option>
									<option value={2}>Two</option>
									<option value={3}>Three</option>
								</select>
							</li>
							<li className='form-btn'>
								<a href='#' className='btn btn-success'>
									BOOK NOW
								</a>
							</li>
						</ul>
						{/*//End booking form */}
					</div>
				</div>
				<div className='row space'>
					{/* Service Icon */}
					<div className='col-md-4'>
						<div className='service-thumbnail d-flex flex-fill'>
							<img
								src='images/service-thumbnail01.png'
								className='img-fluid'
								alt='#'
							/>
							<div className='service-thumbnail_text'>
								<h4>Specialised Service</h4>
								<p>Lorem ipsum dolor sit</p>
							</div>
						</div>
					</div>
					{/* Service Icon 02 */}
					<div className='col-md-4'>
						<div className='service-thumbnail d-flex flex-fill'>
							<img
								src='images/service-thumbnail02.png'
								className='img-fluid'
								alt='#'
							/>
							<div className='service-thumbnail_text'>
								<h4>24/7 Advanced Care</h4>
								<p>Lorem ipsum dolor sit</p>
							</div>
						</div>
					</div>
					{/* Service Icon 03 */}
					<div className='col-md-4'>
						<div className='service-thumbnail border-0 d-flex flex-fill'>
							<img
								src='images/service-thumbnail03.png'
								className='img-fluid'
								alt='#'
							/>
							<div className='service-thumbnail_text'>
								<h4>Get Result Online</h4>
								<p>Lorem ipsum dolor sit</p>
							</div>
						</div>
					</div>
					{/*//End Service Icon */}
				</div>
				<AboutInfo />
			</div>
		</section>
	);
};

export default AboutUs;
