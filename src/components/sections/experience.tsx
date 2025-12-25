import { experiences } from "@/constants";
import { Timeline } from "../common/timeline";

const Experiences = () => {
	return (
		<div className="experience" id="experience">
			<Timeline data={experiences} />
		</div>
	);
};

export default Experiences;
