import React from 'react';

const AboutInfo = () => {
	return (
		<div className='row'>
			<div className='col-md-12'>
				{/* About */}
				<div className='about-video_block'>
					<div className='row'>
						<div className='col-md-12 col-lg-6'>
							<a
								href='https://www.youtube.com/watch?v=pBFQdxA-apI'
								className='video-play-img popup-youtube'
							>
								<img
									src={
										'https://demo.web3canvas.com/themeforest/medenin/images/about-img.jpg'
									}
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
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
									do eius mod tempor incididunt ut labore et dolore magna
									aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
								</p>
								<p>
									Sed do eius mod tempor incididunt ut labore et dolore magna
									aliqua. Ut enim ad minim veniam, quis nostru
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
	);
};

export default AboutInfo;
