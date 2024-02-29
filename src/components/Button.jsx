export const Button = ({iconUrl, label, backgroundColor, textColor, borderColor, fullWidth}) => {
	return (
		<button className={`flex justify-center items-center gap-2 px-8 py-4 border font-montserrat text-lg leading-none
		${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : `bg-coral-red rounded-full text-white border-coral-red ${fullWidth && 'w-full'}`}`}>
			{label}

			{iconUrl && <img src={iconUrl} alt="arrow right icon" className='ml-2 rounded-full w-5 h-5'/>}
		</button>
	)
}
