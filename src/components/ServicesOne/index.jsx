import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../BreadCrumb'

const ServicesOne = () => {
	const data = [
		{
			title: 'Dental',
			url: '/service',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eius mod tempor incididunt ut labore',
		},
		{
			title: 'Eye Care',
			url: '/service',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eius mod tempor incididunt ut labore',
		},
		{
			title: 'Allergic Issue',
			url: '/service',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eius mod tempor incididunt ut labore',
		},
		{
			title: 'Cardiology',
			url: '/service',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eius mod tempor incididunt ut labore',
		},
		{
			title: 'Neurology Surgery',
			url: '/service',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eius mod tempor incididunt ut labore',
		},
		{
			title: 'Allergic Issue',
			url: '/service',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eius mod tempor incididunt ut labore',
		},
	]
	return (
		<div>
			{/*==================== Header ====================*/}
			{/* top bar */}
			{/* <section>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='top-bar'>
								<div className='row'>
									<div className='col-lg-3 col-md-12'>
										<a className='navbar-brand' href='index.html'>
											<img src='images/logo.png' alt='#' />
										</a>
									</div>
									<div className='col-md-9 d-flex align-items-end'>
										<ul className='ml-auto'>
											<li>
												<img src='images/mail-icon.png' alt='#' />
												<div>
													<span>Mail us</span>
													<h4>info@medenin</h4>
												</div>
											</li>
											<li>
												<img src='images/call-icon.png' alt='#' />
												<div>
													<span>Mail us</span>
													<h4>info@medenin</h4>
												</div>
											</li>
											<li className='appointment-btn'>
												<a href='appointment.html' className='btn btn-primary'>
													Make Appointment
												</a>
												<i className='fas fa-search' />
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}
			{/*//End top bar */}

			{/* Sub header */}

			{/*//End Sub header */}
			{/*//End Header */}
			<BreadCrumb
				title={'Services'}
				text={'Lorem ipsum dolor sit ametco nsectetur adipisicing elitsed.'}
			/>
			{/*==================== Pricing ====================*/}
			<section className='space light'>
				<div className='container container-custom'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='sub-title_center'>
								<span>---- Our Services ----</span>
								<h2>High Quality Services for You</h2>
							</div>
						</div>
					</div>
					<div className='row'>
						{data.map((item, index) => (
							<div key={index} className='col-md-4'>
								<div className='service-block yellow'>
									<img src='images/service-icon1.png' alt='#' />
									<h3>{item.title}</h3>
									<p>{item.text}</p>
									<Link to={'/service'} className='btn btn-dark'>
										READ MORE
									</Link>
									<div className='service-bg-icon'>
										<img
											src='images/services-bg1.png'
											className='img-fluid'
											alt='#'
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/*//End Pricing */}
			{/*==================== Appointment ====================*/}
			<section className='space background-bg4'>
				<div className='container container-custom'>
					<div className='row'>
						<div className='col-md-12 col-lg-6'>
							<div className='appointment-form_wrap'>
								<div className='heading-style1'>
									<span>Online Booking</span>
									<h2>Make an Appointment</h2>
								</div>
								<form action='#'>
									<div className='row'>
										<div className='col-md-6'>
											<div className='form-group form-group-cutom'>
												<input
													type='email'
													className='form-control form-custom'
													placeholder='Enter Your Name'
												/>
												<i className='far fa-user' />
											</div>
										</div>
										<div className='col-md-6'>
											<div className='form-group form-group-cutom'>
												<input
													type='number'
													className='form-control form-custom'
													placeholder='Date and time'
												/>
												<i className='far fa-clock' />
											</div>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-6'>
											<div className='form-group form-group-cutom'>
												<input
													type='number'
													className='form-control form-custom'
													placeholder='Enter phone number'
												/>
												<i className='fas fa-phone' />
											</div>
										</div>
										<div className='col-md-6'>
											<div className='form-group form-group-cutom'>
												<input
													type='text'
													className='form-control form-custom'
													placeholder='Select location'
												/>
												<i className='fas fa-map-marker-alt' />
											</div>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-6'>
											<div className='form-group form-group-cutom'>
												<input
													type='text'
													className='form-control form-custom'
													placeholder='Choose department'
												/>
												<i className='far fa-circle' />
											</div>
										</div>
										<div className='col-md-6'>
											<div className='form-group form-group-cutom'>
												<input
													type='text'
													className='form-control form-custom'
													placeholder='Select doctor'
												/>
												<i className='far fa-user' />
											</div>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-12'>
											<div className='form-group form-group-cutom'>
												<label htmlFor='exampleFormControlTextarea1'>
													Your Message
												</label>
												<textarea
													className='form-control'
													id='exampleFormControlTextarea1'
													rows={3}
													defaultValue={''}
												/>
											</div>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-12'>
											<a href='#' className='btn btn-success'>
												BOOK NOW
											</a>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className='col-md-12 col-lg-6'>
							<div className='why-choose_block'>
								<div className='heading-style1 mb-0'>
									<span>Why Us</span>
									<h2>Why Choose Us</h2>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing <br />{' '}
										elit, sed do eius mod tempor inc ididuntut
									</p>
									<hr />
								</div>
								<div className='whychoose-wrap'>
									<img src='images/icon1.png' alt='#' />
									<div className='whychoose-text_block'>
										<h4>Fastest Growing Clinic</h4>
										<p>Excepteur sint occaecat cupidatat non proident, su</p>
									</div>
								</div>
								<div className='whychoose-wrap'>
									<img src='images/icon2.png' alt='#' />
									<div className='whychoose-text_block'>
										<h4>Free Ambulance Servcice</h4>
										<p>Ut enim ad minim veniam, quis nostrud exercitati</p>
									</div>
								</div>
								<div className='whychoose-wrap'>
									<img src='images/icon3.png' alt='#' />
									<div className='whychoose-text_block'>
										<h4>24/7 Working Time</h4>
										<p>Duis aute irure dolor in repr ehenderit in voluptate.</p>
									</div>
								</div>
								<div className='whychoose-wrap mb-0'>
									<img src='images/icon4.png' alt='#' />
									<div className='whychoose-text_block'>
										<h4>5 Star Customer Rating </h4>
										<p>Excepteur sint occaecat cupidatat non proident,</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*//End Appointment */}
			{/*==================== Pricing ====================*/}
			<section className='space'>
				<div className='container container-custom'>
					<div className='row'>
						<div className='col-md-6'>
							<div className='heading-style1'>
								<span>Our Pricing ----</span>
								<h2>Pricing &amp; Plans</h2>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='pricing-tab'>
								<ul className='nav nav-pills' id='pills-tab' role='tablist'>
									<li className='nav-item'>
										<a
											className='nav-link active'
											id='pills-home-tab'
											data-toggle='pill'
											href='#pills-home'
											role='tab'
											aria-controls='pills-home'
											aria-selected='true'>
											Monthly
										</a>
									</li>
									<li className='nav-item'>
										<a
											className='nav-link'
											id='pills-profile-tab'
											data-toggle='pill'
											href='#pills-profile'
											role='tab'
											aria-controls='pills-profile'
											aria-selected='false'>
											Yearly
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-12'>
							<div className='tab-content' id='pills-tabContent'>
								<div
									className='tab-pane fade show active'
									id='pills-home'
									role='tabpanel'
									aria-labelledby='pills-home-tab'>
									<ul className='pricing'>
										<li>
											<img
												src='images/pricing-icon1.png'
												className='img-fluid'
												alt='#'
											/>
											<h2>
												<span>$</span>22
											</h2>
											<h3>Single Package</h3>
											<p>
												Lorem ipsum dolor sit amet, conse ctetur adipisicing
												elit, sed do eius mod tempor incididunt ut
											</p>
											<a href='#' className='btn btn-primary'>
												Select Plan
											</a>
										</li>
										<li className='pricing-middle'>
											<img
												src='images/pricing-icon2.png'
												className='img-fluid'
												alt='#'
											/>
											<h2>
												<span>$</span>27
											</h2>
											<h3>Couple Package</h3>
											<p>
												Lorem ipsum dolor sit amet, conse ctetur adipisicing
												elit, sed do eius mod tempor incididunt ut
											</p>
											<a href='#' className='btn btn-success'>
												Select Plan
											</a>
											<div className='pricing-badge'>
												<img src='images/pricing-badge.png' alt='#' />
											</div>
										</li>
										<li>
											<img
												src='images/pricing-icon3.png'
												className='img-fluid'
												alt='#'
											/>
											<h2>
												<span>$</span>33
											</h2>
											<h3>Family Package</h3>
											<p>
												Lorem ipsum dolor sit amet, conse ctetur adipisicing
												elit, sed do eius mod tempor incididunt ut
											</p>
											<a href='#' className='btn btn-primary'>
												Select Plan
											</a>
										</li>
									</ul>
								</div>
								<div
									className='tab-pane fade'
									id='pills-profile'
									role='tabpanel'
									aria-labelledby='pills-profile-tab'>
									<ul className='pricing'>
										<li>
											<img
												src='images/pricing-icon1.png'
												className='img-fluid'
												alt='#'
											/>
											<h2>
												<span>$</span>22
											</h2>
											<h3>Single Package</h3>
											<p>
												Lorem ipsum dolor sit amet, conse ctetur adipisicing
												elit, sed do eius mod tempor incididunt ut
											</p>
											<a href='#' className='btn btn-primary'>
												Select Plan
											</a>
										</li>
										<li className='pricing-middle'>
											<img
												src='images/pricing-icon1.png'
												className='img-fluid'
												alt='#'
											/>
											<h2>
												<span>$</span>22
											</h2>
											<h3>Single Package</h3>
											<p>
												Lorem ipsum dolor sit amet, conse ctetur adipisicing
												elit, sed do eius mod tempor incididunt ut
											</p>
											<a href='#' className='btn btn-success'>
												Select Plan
											</a>
											<div className='pricing-badge'>
												<img src='images/pricing-badge.png' alt='#' />
											</div>
										</li>
										<li>
											<img
												src='images/pricing-icon1.png'
												className='img-fluid'
												alt='#'
											/>
											<h2>
												<span>$</span>22
											</h2>
											<h3>Single Package</h3>
											<p>
												Lorem ipsum dolor sit amet, conse ctetur adipisicing
												elit, sed do eius mod tempor incididunt ut
											</p>
											<a href='#' className='btn btn-primary'>
												Select Plan
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*//End Pricing */}
			{/*==================== Testimonial Style 2 ====================*/}
			<div className='light'>
				<div className='container container-custom'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='testi-slider-style2'>
								<div className='testimonial-style2'>
									<img src='images/doctors-img1.jpg' alt='#' />
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
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit,
										sed do eius mod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud
										exercitationLorem ipsum dolor sit amet, consectetur
										adipisicing elit, sed do eius mod tempor incididunt ut
										labore et dolore magna aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation..
									</p>
									<span>Mary Jane (ceo)</span>
								</div>
								<div className='testimonial-style2'>
									<img src='images/doctors-img1.jpg' alt='#' />
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
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit,
										sed do eius mod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud
										exercitationLorem ipsum dolor sit amet, consectetur
										adipisicing elit, sed do eius mod tempor incididunt ut
										labore et dolore magna aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation..
									</p>
									<span>Mary Jane (ceo)</span>
								</div>
								<div className='testimonial-style2'>
									<img src='images/doctors-img1.jpg' alt='#' />
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
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit,
										sed do eius mod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud
										exercitationLorem ipsum dolor sit amet, consectetur
										adipisicing elit, sed do eius mod tempor incididunt ut
										labore et dolore magna aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation..
									</p>
									<span>Mary Jane (ceo)</span>
								</div>
								<div className='testimonial-style2'>
									<img src='images/doctors-img1.jpg' alt='#' />
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
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit,
										sed do eius mod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud
										exercitationLorem ipsum dolor sit amet, consectetur
										adipisicing elit, sed do eius mod tempor incididunt ut
										labore et dolore magna aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation..
									</p>
									<span>Mary Jane (ceo)</span>
								</div>
								<div className='testimonial-style2'>
									<img src='images/doctors-img1.jpg' alt='#' />
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
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit,
										sed do eius mod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud
										exercitationLorem ipsum dolor sit amet, consectetur
										adipisicing elit, sed do eius mod tempor incididunt ut
										labore et dolore magna aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation..
									</p>
									<span>Mary Jane (ceo)</span>
								</div>
							</div>
							<hr />
							<div className='testi-slider-style2-nav'>
								<div>
									<img
										src='images/client-logo1.png'
										className='img-fluid'
										alt='#'
									/>
								</div>
								<div>
									<img
										src='images/client-logo2.png'
										className='img-fluid'
										alt='#'
									/>
								</div>
								<div>
									<img
										src='images/client-logo1.png'
										className='img-fluid'
										alt='#'
									/>
								</div>
								<div>
									<img
										src='images/client-logo4.png'
										className='img-fluid'
										alt='#'
									/>
								</div>
								<div>
									<img
										src='images/client-logo5.png'
										className='img-fluid'
										alt='#'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*//End Testimonial Style 2 */}
			{/*==================== Counter ====================*/}
			<section className='counter'>
				<div className='container container-custom'>
					<div className='row'>
						<div className='col-sm-4 col-md-3 col-lg-3'>
							<div className='counter-block'>
								<img src='images/counter1.png' alt='#' />
								<div className='counter-text'>
									<h2>60+</h2>
									<p>Expert Doctors</p>
								</div>
							</div>
						</div>
						<div className='col-sm-4 col-md-3 col-lg-3'>
							<div className='counter-block'>
								<img src='images/counter2.png' alt='#' />
								<div className='counter-text'>
									<h2>1000+</h2>
									<p>Happy Patients</p>
								</div>
							</div>
						</div>
						<div className='col-sm-4 col-md-3 col-lg-3'>
							<div className='counter-block'>
								<img src='images/counter3.png' alt='#' />
								<div className='counter-text'>
									<h2>150+</h2>
									<p>Award Winner</p>
								</div>
							</div>
						</div>
						<div className='col-sm-12 col-md-3 col-lg-3 d-flex align-items-center justify-content-end'>
							<div className='counter-btn_block'>
								<a href='#' className='btn btn-success'>
									BOOK NOW
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*//End Counter */}
			{/*==================== Footer ====================*/}

			{/*//End Footer */}
			{/* Optional JavaScript */}
			{/* jQuery first, then Popper.js, then Bootstrap JS */}
			{/* Slick Slider Js */}
			{/* Script Js */}
		</div>
	)
}

export default ServicesOne
