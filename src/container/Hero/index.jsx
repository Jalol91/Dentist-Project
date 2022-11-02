import React from 'react';
import { Link } from 'react-router-dom';
import heroSliderData from '../../data/hero-slider.data';
const Hero = () => {
	return (
		<div className='container'>
			<div className='banner-slider'>
				{heroSliderData.map((item, index) => (
					<div key={index} className='banner'>
						<div className='row'>
							<div className='col-12 col-md-6 col-lg-5 d-flex align-items-center'>
								{/* Slider Title */}
								<div className='main-title'>
									<span>{item.titleTop}</span>
									<h1>{item.title}</h1>
									<p>{item.text}</p>
									<Link to='/appointment' className='btn btn-primary'>
										Make Appointment
									</Link>
									<a
										href='https://www.youtube.com/watch?v=pBFQdxA-apI'
										className='play-btn popup-youtube'
									>
										<i className='fas fa-play' />
									</a>
								</div>
								{/*//End Slider Title */}
							</div>
							<div className='col-12 col-md-6 col-lg-7 d-flex align-items-end'>
								<div className='anim-container flex-fill'>
									<svg
										className='circle-svg'
										width='100%'
										height='100%'
										viewBox='0 0 754 733'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											className='big-circle'
											opacity='0.071'
											fillRule='evenodd'
											clipRule='evenodd'
											d='M377 29C563.12 29 714 179.879 714 366C714 552.119 563.12 702.999 377 702.999C190.88 702.999 40 552.119 40 366C40 179.879 190.88 29 377 29Z'
											fill='#4D72D0'
										/>
										<path
											className='small-circle'
											opacity='0.051'
											fillRule='evenodd'
											clipRule='evenodd'
											d='M376.471 120.995C512.043 120.995 621.947 230.898 621.947 366.471C621.947 502.043 512.043 611.946 376.471 611.946C240.898 611.946 130.995 502.043 130.995 366.471C130.995 230.898 240.898 120.995 376.471 120.995Z'
											fill='#4D72D0'
										/>
									</svg>
									<img
										src={item.image}
										className='img-fluid animated-hero'
										alt='hero'
									/>
									<ul className='main-slider-social'>
										<li>
											<a href='#'>
												<i className='fab fa-facebook-f' />
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fab fa-twitter' />
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fab fa-instagram' />
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fab fa-google-plus-g' />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Hero;
