import React from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import AboutUs from '../../container/AboutUs'
import OurTeam from '../../container/OurTeam'
import WhoWeAre from '../../container/WhoWeAre'

const AboutPage = () => {
	return (
		<div>
			<BreadCrumb
				title={'About'}
				text={'Lorem ipsum dolor sit ametco nsectetur adipisicing elitsed.'}
			/>
			<AboutUs />
			<WhoWeAre />
			<section className='space'>
				<div className='container container-custom'>
					<div className='row'>
						<div className='col-md-4'>
							<div className='mission-wrap'>
								<h3>Our Mission</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed
									do eius mod tempor incid idunt ut labore et dolore magna
									aliqua.
								</p>
								<a href='#'>Read More</a>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='mission-wrap'>
								<h3>Our Vision</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed
									do eius mod tempor incid idunt ut labore et dolore magna
									aliqua.
								</p>
								<a href='#'>Read More</a>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='mission-wrap'>
								<h3>Our Values</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed
									do eius mod tempor incid idunt ut labore et dolore magna
									aliqua.
								</p>
								<a href='#'>Read More</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<OurTeam />
		</div>
	)
}

export default AboutPage
