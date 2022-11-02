import React from 'react';
import employeeData from '../../data/employee.data';

const OurTeam = () => {
	return (
		<section className='our-team'>
			<div className='container container-custom'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='sub-title_center'>
							<span>---- Our Team ----</span>
							<h2>Our Dedicated Doctors</h2>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='doctors-slider'>
							{employeeData.map((item, index) => (
								<div className='team-img_block yellow' key={index}>
									<div className='team-img-socila-block'>
										<img src={item.avatar} className='img-fluid' alt='#' />
										<ul className='social-icons'>
											<li>
												<a href={item.socials.facebook}>
													<i className='fab fa-facebook-f' />
												</a>
											</li>
											<li>
												<a href={item.socials.twitter}>
													<i className='fab fa-twitter' />
												</a>
											</li>
											<li>
												<a href={item.socials.instagram}>
													<i className='fab fa-instagram' />
												</a>
											</li>
											<li>
												<a href={item.socials.google}>
													<i className='fab fa-google-plus-g' />
												</a>
											</li>
										</ul>
									</div>
									<h4>{item.name}</h4>
									<p>{item.job_title}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurTeam;
