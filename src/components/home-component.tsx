import Image from "next/image"
import { Header } from "./header"
import TimelineComponent from "./timeline-component"
import ButtonComponent from './buttons-component';
import EmailDialog from './email-dialog';
import Link from 'next/link';

// TODO: Implement a router to redirect to different pages of the app
// TODO: Develop a footer component

export const HomeComponent = () => {
	return (
		<div className="flax flex-col max-w-3xl">
			<Header />
			{/* TODO: Add alignement */}
			{/* TODO: Abstract component and used in Home, About and Contact Me pages.  */}
			<div className="flex flex-col items-center h-44 pt-6 bg-[#EEEEEE] rounded-xl text-[#2A383D] font-semibold mt-12">
				<p className=" text-xl font-extrabold">A Software Engineer based in Amsterdam</p>
				<p className="m-5 ">
					I build tools and applications for web and mobile.
					Shipping code to production since 2017, largly
					JavaScript and TypeScript based solutions.
				</p>
			</div>
			{/* Center this div with tailwind css */}
			{/* TODO: Build responsive and move to a separate component. */}
			<div className="relative left-20 top-3 max-w-xl">
				<div className="flex flex-row flex-wrap justify-center space-x-10 h-10 border-2 border-[#293032] absolute bottom-0 rounded-xl bg-[#D2BFA8] w-full items-center">
					<Image alt="bol.com" src="/images/bol.svg" width={75} height={75} />
					<Image alt="Accenture" src="/images/accenture.svg" width={75} height={75} />
					<Image alt="Circularise" src="/images/circularise.svg" width={75} height={75} />
				</div>
			</div>
			<TimelineComponent />
			<div className="flex flex-col space-y-8">
				<Link href="/blog">
					<ButtonComponent imageAlt="Read my blog" imageSrc="/images/request_cv.png" imageHeight={150} imageWidth={150} textWidth="w-48" buttonText="Read my blog" />
				</Link>
				<Link href="/about">
					<ButtonComponent imageAlt="About Me" imageSrc="/images/about_me.png" imageHeight={150} imageWidth={150} textWidth="w-48" buttonText="About Me" />
				</Link>
				<EmailDialog />
				<Link href="/contact">
					<ButtonComponent imageAlt="Get in touch" imageSrc="/images/read_my_blog.png" imageHeight={150} imageWidth={150} textWidth="w-48" buttonText="Get in touch!" />
				</Link>
			</div>
		</div>
	)
}

export default HomeComponent;