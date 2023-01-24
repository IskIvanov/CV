import TitleComponent from "./timeline/title"
import timeline from "../data/timeline"
import TimelineItem from "./timeline/timeline-item"

export const TimelineComponent = () => {
	return (
		<div className=" pt-32 relative" >
			<TitleComponent>
				<h1 className="flex absolute top-20 left-4 w-32 mb-5 text-xl bg-[#B5B8BB] p-4 text-[#2D3134] rounded-xl">Timeline</h1>
				{timeline.map((item, index) => (
					<TimelineItem
						key={index}
						year={item.year}
						title={item.title}
						duration={item.duration}
						location={item.location}
						details={item.details}
					/>
				))}
			</TitleComponent>
		</div>
	)
}

export default TimelineComponent;