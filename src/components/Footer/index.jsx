import React from 'react'

const Footer = () => {
	return (
		<footer>
			<div className='container container-custom'>
				<div className='row'>
					<div className='col-sm-12 col-md-12 col-lg-4'>
						<div className='foot-contact-block'>
							<img src='images/foot-logo.png' className='img-fluid' alt='#' />
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
	)
}

export default Footer
