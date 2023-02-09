import Image from "next/image"

// TODO: For every text separate into additional component, find correct css to meet the design requirements.
// TODO: Add all the colors into tailwind.config.js theme.
// TODO: Change Image for the component 
type ButtonsComponentProps = {
	imageSrc: string;
	imageAlt: string;
	imageHeight: number;
	imageWidth: number;
	buttonText: string;
	textWidth: string;
}

// Add interpolation string to the className

export const ButtonComponent = ({ imageSrc, imageAlt, imageHeight, imageWidth, buttonText, textWidth }: ButtonsComponentProps) => {
	return (
		<div className="flex flex-col items-center">
			<div className="flex flex-col relative space-y-5 item w-72 pt-2">
				<div className=" bg-[#B9BBBF] rounded-lg relative">
					<Image alt={imageAlt} src={imageSrc} width={imageWidth} height={imageHeight} />
				</div>

				<div className={`flex border-[#222C34] border-2 justify-center absolute bottom-0 left-56 p-1 bg-[#D9D9D9] rounded-full ${textWidth}`}>
					<button className=" text-[#222C34] font-black text-lg" >{buttonText}</button>
				</div>
			</div>
		</div>
	)
}



export default ButtonComponent;