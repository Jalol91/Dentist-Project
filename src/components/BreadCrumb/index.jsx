import React from 'react'

const BreadCrumb = ({ title, text }) => {
	return (
		<section className='space sub-header'>
			<div className='container container-custom'>
				<div className='row'>
					<div className='col-md-6'>
						<div className='sub-header_content'>
							<p className='text-uppercase'>{title}</p>
							<h3>{text}</h3>
							<span>
								<i>Home / {title}</i>
							</span>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='sub-header_main'>
							<h2>{title}</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BreadCrumb
