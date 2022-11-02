import React from 'react'

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
				<div className='row'>
					<div className='col-md-12'>
						{/* About */}
						<div className='about-video_block'>
							<div className='row'>
								<div className='col-md-12 col-lg-6'>
									<a
										href='https://www.youtube.com/watch?v=pBFQdxA-apI'
										className='video-play-img popup-youtube'>
										<img
											src='images/about-img.jpg'
											className='img-fluid w-100'
											alt='#'
										/>
										<div className='video-play-btn'>
											<div className='video-play-icon'>
												<i className='fas fa-play' />
											</div>
											<span>PLAY VIDEO</span>
										</div>
									</a>
								</div>
								<div className='col-md-12 col-lg-6'>
									<div className='video-play-text'>
										<h2>Short Story About Mededin Clinic.</h2>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit,
											sed do eius mod tempor incididunt ut labore et dolore
											magna aliqua. Ut enim ad minim veniam, quis nostrud
											exercitation.
										</p>
										<p>
											Sed do eius mod tempor incididunt ut labore et dolore
											magna aliqua. Ut enim ad minim veniam, quis nostru
											<a href='#'>Readmore</a>
										</p>
										<div className='row'>
											<div className='col-md-6'>
												<div className='facilities blue'>
													<h3>1000+</h3>
													<span>Happy Patients</span>
												</div>
											</div>
											<div className='col-md-6'>
												<div className='facilities green'>
													<h3>215+</h3>
													<span>Expert Doctors</span>
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='col-md-6'>
												<div className='facilities yellow'>
													<h3>315+</h3>
													<span>Hospital Rooms</span>
												</div>
											</div>
											<div className='col-md-6'>
												<div className='facilities gray'>
													<h3>106+</h3>
													<span>Award Winner</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/*//End About */}
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
