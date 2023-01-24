import Image from "next/image"
import { Header } from "./header"
import TimelineComponent from "./timeline-component"
import ButtonComponent from './buttons-component';
import EmailDialog from './email-dialog';

// TODO: Implement a router to redirect to different pages of the app
// TODO: Develop a footer component

export const HomeComponent = () => {
	return (
		<div className="flax flex-col max-w-3xl">
			<Header />
			{/* TODO: Add alignement */}
			<div className="flex flex-col items-center h-44 pt-6 bg-[#EEEEEE] rounded-xl text-[#2A383D] font-semibold mt-12">
				<p className=" text-xl font-extrabold">A Software Engineer based in Amsterdam</p>
				<p className="m-5 ">
					I build tools and applications for web and mobile.
					Shipping code to production since 2017, largly
					JavaScript and TypeScript based solutions.
				</p>
			</div>
			{/* Center this div with tailwind css */}
			{/* TODO: Build responsive */}
			<div className="relative left-20 top-3 max-w-xl">
				<div className="flex flex-row flex-wrap justify-center space-x-10 h-10 border-2 border-[#293032] absolute bottom-0 rounded-xl bg-[#D2BFA8] w-full items-center">
					<Image alt="bol.com" src="/images/bol.svg" width={75} height={75} />
					<Image alt="Accenture" src="/images/accenture.svg" width={75} height={75} />
					<Image alt="Circularise" src="/images/circularise.svg" width={75} height={75} />
				</div>
			</div>
			<TimelineComponent />
			<div className="flex flex-col space-y-8">
				<ButtonComponent imageAlt="Read my blog" imageSrc="/images/request_cv.png" imageHeight={150} imageWidth={150} textWidth="w-48" buttonText="Read my blog" />
				<ButtonComponent imageAlt="About Me" imageSrc="/images/about_me.png" imageHeight={150} imageWidth={150} textWidth="w-48" buttonText="About Me" />
				<ButtonComponent imageAlt="Request my CV" imageSrc="/images/get_in_touch.png" imageHeight={300} imageWidth={300} textWidth="w-48" buttonText="Request my CV" />
				<EmailDialog />
			</div>
		</div>
	)
}

export default HomeComponent;