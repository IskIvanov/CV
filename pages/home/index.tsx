import Image from "next/image";
import { HomeComponent } from "../../src/components/home-component"

// TODO: Remove hardcoded values to a data object.

export const Home = () => {
	return (
		<div className="relative flex flex-col space-y-72">
			<div className="flex flex-col items-center justify-center">
				<HomeComponent />
			</div>
			<div className="relative">
				<div className=" absolute bottom-40 w-48 right-12 text-white ">I am open to freelance gigs! Contact me today</div>
				<Image className="z-10 absolute bottom-6 right-0" alt="dogImage" src="/images/dog.png" width={120} height={120} />
				<footer className="z-0 absolute w-full bottom-0 mt-24 bg-[#D9D9D9] text-[#222C34] p-4 text-center space-x-10">
					<span>2023 © Ivanov Dev</span>
					<span>KvK: 84439726 </span>
					<span>BTW: NL 003963491 B 16</span>
					<span>BANK: NL61 ABNA 0877 0563 90</span>
				</footer>
			</div>
		</div>
	)
}

export default Home