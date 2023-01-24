import Image from "next/image"

export const Header = () => {
	return (
		<div className="relative flex w-full bg-grey shadow-md rounded-xl shadow-lg flex items-center space-x-4 p-8 mt-16">
			<p className=" font-extrabold text-4xl">Hey I’m Iskren</p>
			<div className=" w-24 h-24 bg-white absolute right-6 rounded-full bg-[#C3C5C7]">
				<Image alt="BGFlag" className=" absolute bottom-0" src="/images/bg-flag.svg" width={25} height={25} />
				<Image alt="Avatar" src="/images/avatar.png" width={100} height={100} />
			</div>
			<Image alt="Hi" src="/images/wave.svg" width={70} height={70} />
		</div>
	)
}