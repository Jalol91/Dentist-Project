import React from 'react'
import BreadCrumb from '../BreadCrumb'

const PricingOne = () => {
	return (
		<div>
			<BreadCrumb
				title={'Pricing'}
				text={'Lorem ipsum dolor sit ametco nsectetur adipisicing elitsed'}
			/>
			<section className='space'>
				<div className='container container-custom'>
					<div className='row'>
						<div className='col-md-6'>
							<div className='heading-style1'>
								<span>Our Services</span>
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
		</div>
	)
}

export default PricingOne
