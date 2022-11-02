import React from 'react'

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
							<div className='service-block yellow'>
								<img src='images/service-icon1.png' alt='#' />
								<h3>Dental Care</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
									do eius mod tempor incididunt ut labore{' '}
								</p>
								<a href='#' className='btn btn-dark'>
									READ MORE
								</a>
								<div className='service-bg-icon'>
									<img
										src='images/services-bg1.png'
										className='img-fluid'
										alt='#'
									/>
								</div>
							</div>
							<div className='service-block green'>
								<img src='images/service-icon2.png' alt='#' />
								<h3>Eye Care</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
									do eius mod tempor incididunt ut labore
								</p>
								<a href='#' className='btn btn-dark'>
									READ MORE
								</a>
								<div className='service-bg-icon'>
									<img
										src='images/services-bg2.png'
										className='img-fluid'
										alt='#'
									/>
								</div>
							</div>
							<div className='service-block blue'>
								<img src='images/service-icon3.png' alt='#' />
								<h3>Allergic Issue</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
									do eius mod tempor incididunt ut labore
								</p>
								<a href='#' className='btn btn-dark'>
									READ MORE
								</a>
								<div className='service-bg-icon'>
									<img
										src='images/services-bg3.png'
										className='img-fluid'
										alt='#'
									/>
								</div>
							</div>
							<div className='service-block green'>
								<img src='images/service-icon3.png' alt='#' />
								<h3>Allergic Issue</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
									do eius mod tempor incididunt ut labore
								</p>
								<a href='#' className='btn btn-dark'>
									READ MORE
								</a>
								<div className='service-bg-icon'>
									<img
										src='images/services-bg4.png'
										className='img-fluid'
										alt='#'
									/>
								</div>
							</div>
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
	)
}

export default Services
