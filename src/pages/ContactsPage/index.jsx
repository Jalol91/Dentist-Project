import React from 'react'
import BreadCrumb from '../../components/BreadCrumb'

const ContactsPage = () => {
	return (
		<div>
			<BreadCrumb
				title={'Contact Us'}
				text={'Lorem ipsum dolor sit ametco nsectetur adipisicing elitsed.'}
			/>

			<div>
				{/*==================== Contact Us ====================*/}
				<section className='space'>
					<div className='container container-custom '>
						<div className=' row'>
							<div className='col-md-8'>
								<div className='map-img-wrap'>
									<img
										src='images/contact-map.png'
										className='img-fluid'
										alt='#'
									/>
									<ul>
										<li>
											<i className='fas fa-map-marker-alt' />
										</li>
										<li>
											<i className='fas fa-map-marker-alt' />
										</li>
										<li>
											<i className='fas fa-map-marker-alt' />
										</li>
										<li>
											<i className='fas fa-map-marker-alt' />
										</li>
									</ul>
								</div>
							</div>
							<div className='col-md-4'>
								<div className='contact-box'>
									<p>
										Lorem ipsum dolor sit amet consect etur adipi sicing elit,
										sed do eiusm
									</p>
									<hr />
									<div className='contact-title'>
										<h4>Contact Information</h4>
										<i className='fas fa-phone-volume' />
										<div className='contact-title_icon'>
											<p>Phone</p>
											<h6>+123 456 7890</h6>
										</div>
									</div>
									<div className='contact-title'>
										<i className='fas fa-envelope' />
										<div className='contact-title_icon'>
											<p>Email</p>
											<h6>info@example.com</h6>
										</div>
									</div>
									<hr />
								</div>
								<div className='contact-box'>
									<div className='contact-title'>
										<h4>Head Office</h4>
										<i className='fas fa-map-marker-alt' />
										<div className='contact-title_icon'>
											<p>Location</p>
											<h6>
												2663 Lodgeville Road <br />
												Milliapolis, Minnasotta <br />
												55402, USA
											</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*//End Contact Us */}
				{/*==================== Map ====================*/}
				<section>
					<iframe
						width='100%'
						height={450}
						id='gmap_canvas'
						src='https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed'
						frameBorder={0}
						scrolling='no'
						marginHeight={0}
						marginWidth={0}
					/>
					<div className='container container-custom'>
						<div className='row'>
							<div className='col-md-7 offset-md-5 col-lg-6 offset-lg-6'>
								<div className='get-in-touch'>
									<img
										src='images/contact-form-bg.png'
										className='img-fluid get-in-bg'
										alt='#'
									/>
									<h3>Get in Touch with Us</h3>
									<form
										action='https://api.web3forms.com/submit'
										method='POST'
										id='form'>
										{/* REQUIRED: Your Access key here. Don't worry this can be public */}
										{/* Create your Access key here: https://web3forms.com/ */}
										<input
											type='hidden'
											name='apikey'
											defaultValue='YOUR_ACCESS_KEY_HERE'
										/>
										<div className='row'>
											<div className='col-md-6'>
												<div className='form-group'>
													<input
														type='text'
														className='form-control'
														name='first name'
														placeholder='First Name'
														required
													/>
													<i className='far fa-user' />
												</div>
											</div>
											<div className='col-md-6'>
												<div className='form-group'>
													<input
														type='text'
														className='form-control'
														name='last name'
														placeholder='Last Name'
														required
													/>
													<i className='far fa-user' />
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='col-md-6'>
												<div className='form-group'>
													<input
														type='email'
														className='form-control'
														name='email address'
														placeholder='Your Email'
														required
													/>
													<i className='far fa-envelope' />
												</div>
											</div>
											<div className='col-md-6'>
												<div className='form-group'>
													<input
														type='number'
														className='form-control'
														name='phone number'
														placeholder='Your Phone Number'
														required
													/>
													<i className='fas fa-phone' />
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='col-md-12'>
												<div className='form-group textarea-icon'>
													<textarea
														className='form-control'
														name='message'
														required
														placeholder='Your Message'
														id
														rows={3}
														defaultValue={''}
													/>
													<i className='far fa-envelope' />
													<button type='submit' className='btn btn-primary'>
														BOOK NOW
													</button>
												</div>
											</div>
										</div>
										<div id='result' className='text-white' />
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*//End Map */}
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
				<footer>
					<div className='container container-custom'>
						<div className='row'>
							<div className='col-sm-12 col-md-12 col-lg-4'>
								<div className='foot-contact-block'>
									<img
										src='images/foot-logo.png'
										className='img-fluid'
										alt='#'
									/>
									<p>
										Lorem ipsum dolor sit amet, consect <br /> etur adipisicing
										elit, sed do eius mod <br />
										tempor incididunt ut labore et dolore
										<br /> magna aliqua. Ut enim ad minim
									</p>
									<a href='tel:31234567890'>
										<h4>
											<i className='fas fa-phone' />
											3123 456 7890
										</h4>
									</a>
									<a href='mailto:info@mededin.com'>
										<h4>
											<i className='far fa-envelope' />
											info@mededin.com
										</h4>
									</a>
								</div>
							</div>
							<div className='col-sm-6 col-md-4 col-lg-2 offset-lg-1'>
								<div className='foot-link-box'>
									<h4>Quick Links</h4>
									<ul>
										<li>
											<a href='#'>
												<i className='fas fa-angle-double-right' />
												About Us
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fas fa-angle-double-right' />
												Our Mission
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fas fa-angle-double-right' />
												Our Services
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fas fa-angle-double-right' />
												Blogs &amp; News
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fas fa-angle-double-right' />
												Contact Us
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fas fa-angle-double-right' />
												Faq
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-sm-6 col-md-4 col-lg-2'>
								<div className='foot-link-box'>
									<h4>Our Services</h4>
									<ul>
										<li>
											<a href='#'>
												<i className='fas fa-angle-double-right' />
												Pediatrics
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fas fa-angle-double-right' />
												Dermatology
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fas fa-angle-double-right' />
												Cardiology
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fas fa-angle-double-right' />
												Psychological
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fas fa-angle-double-right' />
												Surgery
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fas fa-angle-double-right' />
												Family Medicine
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-md-4 col-lg-2 offset-lg-1'>
								<div className='foot-link-box footlink-box_btn'>
									<a href='#' className='btn btn-outline-success'>
										Find a Doctor
									</a>
									<a href='#' className='btn btn-outline-success'>
										Career
									</a>
									<a href='#' className='btn btn-outline-success'>
										Newsletter
									</a>
									<ul>
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
												<i className='fab fa-linkedin' />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-12'>
								<div className='copyright'>
									<p>© Medenin 2020 Allright Reserved</p>
									<a href='#' id='scroll'>
										<i className='fas fa-angle-double-up' />
									</a>
								</div>
							</div>
						</div>
					</div>
				</footer>
				{/*//End Footer */}
				{/* Optional JavaScript */}
				{/* jQuery first, then Popper.js, then Bootstrap JS */}
				{/* Script Js */}
			</div>
		</div>
	)
}

export default ContactsPage
