import Image from "next/image"
import { Header } from "./header"
import TimelineComponent from "./timeline-component"

export const HomeComponent = () => {
	return (
		<div className="flax flex-col max-w-3xl">
			<Header />
			<div className="flex flex-col items-center h-44 pt-6 bg-[#EEEEEE] rounded-xl text-[#2A383D] font-semibold mt-12">
				<p className=" text-xl font-extrabold">A Software Engineer based in Amsterdam</p>
				<p className="m-5 ">
					I build tools and applications for web and mobile.
					Shipping code to production since 2017, largly
					JavaScript and TypeScript based solutions.
				</p>
			</div>
			{/* Center this div with tailwind css */}

			<div className="relative left-20 top-3 max-w-xl">
				<div className="flex flex-row flex-wrap justify-center space-x-10 h-10 border-2 border-[#293032] absolute bottom-0 rounded-xl bg-[#D2BFA8] w-full items-center">
					<Image alt="bol.com" src="/images/bol.svg" width={75} height={75} />
					<Image alt="Accenture" src="/images/accenture.svg" width={75} height={75} />
					<Image alt="Circularise" src="/images/circularise.svg" width={75} height={75} />
				</div>
			</div>
			<TimelineComponent />
			{/* Buttons component */}
			<div className="flex flex-col items-center">
				<div className="flex flex-col  space-y-5 item bg-slate-400 w-72 pt-2">
					<button>About Me</button>
					<button>Read my blog</button>
					<button>Request my CV</button>
					<button>Get in touch!</button>
				</div>
			</div>
			{/* -------------------------------- */}
		</div>
	)
}

export default HomeComponent;