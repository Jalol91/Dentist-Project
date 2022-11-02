import React from 'react'

const Blogs = () => {
	return (
		<section className='space'>
			<div className='container container-custom'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='sub-title_center'>
							<span>
								<i>---- Blog ----</i>
							</span>
							<h2>Latest News &amp; Events</h2>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='blog-wrap'>
							<div className='blog-row-block'>
								<div className='row'>
									<div className='col-md-3'>
										<div className='blog-img'>
											<img
												src='images/blog-img1.jpg'
												className='img-fluid'
												alt='#'
											/>
										</div>
									</div>
									<div className='col-md-6 d-flex align-items-center'>
										<div className='blog-content'>
											<span>January 12 2019 | By Admin</span>
											<h3>
												Finding meaning in the intersection <br /> between
												marriage and medicine...
											</h3>
										</div>
									</div>
									<div className='col-md-3 d-flex align-items-center'>
										<div className='blog-read-more'>
											<p>
												<i className='far fa-eye' />
												233 <span>|</span> <i className='far fa-comment' />
												33
											</p>
											<a href='#' className='btn btn-primary'>
												READ MORE
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='blog-row-block'>
								<div className='row'>
									<div className='col-md-3'>
										<div className='blog-img'>
											<img
												src='images/blog-img2.jpg'
												className='img-fluid'
												alt='#'
											/>
										</div>
									</div>
									<div className='col-md-6 d-flex align-items-center'>
										<div className='blog-content'>
											<span>January 12 2019 | By Admin</span>
											<h3>
												Telemedicine overprescribes antib iotics:
												<br /> Are you really receiving...
											</h3>
										</div>
									</div>
									<div className='col-md-3 d-flex align-items-center'>
										<div className='blog-read-more'>
											<p>
												<i className='far fa-eye' />
												233 <span>|</span> <i className='far fa-comment' />
												33
											</p>
											<a href='#' className='btn btn-primary'>
												READ MORE
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='blog-row-block'>
								<div className='row'>
									<div className='col-md-3'>
										<div className='blog-img'>
											<img
												src='images/blog-img3.jpg'
												className='img-fluid'
												alt='#'
											/>
										</div>
									</div>
									<div className='col-md-6 d-flex align-items-center'>
										<div className='blog-content'>
											<span>January 12 2019 | By Admin</span>
											<h3>
												23-year-old woman with 2 weeks of painful <br /> lumps
												on her legs and..
											</h3>
										</div>
									</div>
									<div className='col-md-3 d-flex align-items-center'>
										<div className='blog-read-more'>
											<p>
												<i className='far fa-eye' />
												233 <span>|</span> <i className='far fa-comment' />
												33
											</p>
											<a href='#' className='btn btn-primary'>
												READ MORE
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='blog-row-block'>
								<div className='row'>
									<div className='col-md-3'>
										<div className='blog-img'>
											<img
												src='images/blog-img4.jpg'
												className='img-fluid'
												alt='#'
											/>
										</div>
									</div>
									<div className='col-md-6 d-flex align-items-center'>
										<div className='blog-content'>
											<span>January 12 2019 | By Admin</span>
											<h3>
												Keep insulting doctors, and good luck <br /> finding a
												physician in 10 days...
											</h3>
										</div>
									</div>
									<div className='col-md-3 d-flex align-items-center'>
										<div className='blog-read-more'>
											<p>
												<i className='far fa-eye' />
												233 <span>|</span> <i className='far fa-comment' />
												33
											</p>
											<a href='#' className='btn btn-primary'>
												READ MORE
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='text-center mt-5'>
							<a href='#' className='btn btn-outline-primary'>
								View All Blogs
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Blogs
