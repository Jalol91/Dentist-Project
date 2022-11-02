import React from 'react';
import AboutUs from '../../container/AboutUs';
import Blogs from '../../container/Blogs';
import Hero from '../../container/Hero';
import OurTeam from '../../container/OurTeam';
import Services from '../../container/Services';
import Testimonials from '../../container/Testimonials';
import WeBeliee from '../../container/WeBelieve';
import WhoWeAre from '../../container/WhoWeAre';
import WhyChoose from '../../container/WhyChoose';

const HomePage = () => {
	return (
		<div style={{ paddingBottom: '100px' }}>
			<Hero />
			<AboutUs />
			<Services />
			<WhyChoose />
			<WhoWeAre />
			<OurTeam />
			<WeBeliee />
			<Testimonials />
			{/* <Blogs /> */}
		</div>
	);
};

export default HomePage;
