import React from 'react';
import AboutInfo from '../../components/AboutInfo';
import BreadCrumb from '../../components/BreadCrumb';
import MissionCard from '../../components/MissionCard';
import AboutUs from '../../container/AboutUs';
import OurTeam from '../../container/OurTeam';
import WhoWeAre from '../../container/WhoWeAre';
import missionData from '../../data/mission.data';

const AboutPage = () => {
	return (
		<div>
			<BreadCrumb
				title={'About'}
				text={'Lorem ipsum dolor sit ametco nsectetur adipisicing elitsed.'}
			/>
			{/* <AboutUs /> */}
			<div
				className='container container-custom'
				style={{ marginTop: '100px' }}
			>
				<AboutInfo />
			</div>
			<WhoWeAre reverse={true} />
			<section className='space'>
				<div className='container container-custom'>
					<div className='row'>
						{missionData.map((item, index) => (
							<div key={index} className='col-md-4'>
								<MissionCard title={item.title} text={item.text} />
							</div>
						))}
					</div>
				</div>
			</section>
			<OurTeam />
		</div>
	);
};

export default AboutPage;
