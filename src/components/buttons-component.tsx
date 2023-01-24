import Image from "next/image"

// TODO: For every text separate into additional component, find correct css to meet the design requirements.
// TODO: Add all the colors into tailwind.config.js theme.
// TODO: Change Image for the component 

export const ButtonsComponent = () => {
	return (
		<div className="flex flex-col items-center">
			<div className="flex flex-col relative space-y-5 item w-72 pt-2">
				<div className=" bg-[#B9BBBF] rounded-lg relative">
					<Image alt="AboutMeImage" src="/images/about_me.png" width={150} height={150} />
				</div>
				<div className="flex border-[#222C34] border-2 justify-center bor absolute top-0 left-56 p-2 bg-[#D9D9D9] rounded-full w-36">
					<button className=" text-[#222C34] font-black text-lg" >About Me</button>
				</div>
				<div className=" bg-[#B9BBBF] rounded-lg rounded-lg relative">
					<button className="absolute right-1 top-0">Read my blog</button>
					<Image alt="ReadBlogImage" src="/images/read_my_blog.png" width={150} height={150} />
				</div>
				<div className=" bg-[#B9BBBF] rounded-lg relative">
					<button className="absolute right-1 top-0">Request my CV</button>
					<Image alt="RequestCV" src="/images/request_cv.png" width={150} height={150} />
				</div>
				<div className=" bg-[#B9BBBF] rounded-lg relative">
					<button className="absolute right-1 top-0">Get in touch!</button>
					<Image className="pt-4" alt="GetInTouch" src="/images/get_in_touch.png" width={300} height={300} />
				</div>
			</div>
		</div>
	)
}



export default ButtonsComponent;