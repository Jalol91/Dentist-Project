const MissionCard = ({ title, text }) => {
	return (
		<div className='mission-wrap'>
			<h3>{title}</h3>
			<p>{text}</p>
		</div>
	);
};

export default MissionCard;
