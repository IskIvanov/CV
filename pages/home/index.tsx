import Image from "next/image"
import TitleComponent from "../../src/components/timeline/title"
import timeline from "../../src/data/timeline"
import TimelineItem from "../../src/components/timeline/timeline-item"
import { Header } from "../../src/components/header"

export const Home = () => {
	return (
		<div className=" flax flex-col  max-w-3xl">
			<Header />
			<div className="">
				<p>A Software Engineer based in Amsterdam</p>
				<p className=" ">
					I build tools and applications for web and mobile.
					Shipping code to production since 2017, largly
					JavaScript and TypeScript based solutions.
				</p>
			</div>
			<div>
				<TitleComponent>Timeline
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
			{/* Buttons component */}
			<div className="flex flex-col items-center">
				<div className="flex flex-col item bg-slate-400 w-72 pt-2">
					<button>About Me</button>
					<button>Request my CV</button>
					<button>Get in touch!</button>
				</div>
			</div>
			{/* -------------------------------- */}
		</div>
	)
}

export default Home