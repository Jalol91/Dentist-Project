import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
	const data = [
		{
			title: 'Home',
			url: '/',
		},
		{
			title: 'Services',
			url: '/service',
		},
		{
			title: 'Pricing',
			url: '/pricing',
		},
		{
			title: 'About',
			url: '/about',
		},
		{
			title: 'Contact',
			url: '/contact',
		},
	]
	return (
		<nav>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						{/* Nav menu */}
						<nav className='navbar navbar-expand-lg navbar-light'>
							<Link className='navbar-brand' to='/'>
								<img src='images/logo.png' alt='#' />
							</Link>
							<button
								className='navbar-toggler nav-custome1'
								type='button'
								data-toggle='collapse'
								data-target='#navbarSupportedContent'
								aria-controls='navbarSupportedContent'
								aria-expanded='false'
								aria-label='Toggle
                                  navigation'>
								<span className='navbar-toggler-icon' />
							</button>
							<div
								className='collapse navbar-collapse'
								id='navbarSupportedContent'>
								<ul className='navbar-nav ml-auto'>
									{data.map((item, index) => (
										<li key={index} className='nav-item'>
											<Link
												to={item.url}
												className='nav-link dropdown-toggle'
												role='button'>
												{item.title}
												<i className='fas fa-plus' />{' '}
											</Link>
										</li>
									))}
									{/* <li>
										<ul className='cart-seperate'>
											<li className='nav-item'>
												<a className='nav-link' href='#'>
													<i className='fas fa-search fa-top-search' />
												</a>
											</li>
											<li className='nav-item'>
												<a className='nav-link' href='#'>
													<i className='fas fa-shopping-cart fa-top-search' />
													<span>2</span>
												</a>
											</li>
										</ul>
									</li> */}
									<li className='nav-item'>
										<Link
											className='nav-link btn btn-outline-primary appointment-btn-top'
											to='/appointment'>
											Appointment
										</Link>
									</li>
								</ul>
							</div>
						</nav>
						{/*//End Nav menu */}
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
