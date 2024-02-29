import {headerLogo} from "../assets/images/index.js";
import {hamburger} from "../assets/icons/index.js";
import {navLinks} from "../constants/index.js";
import React from "react";


export const Nav = () => {
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<header className='padding-x py-8 absolute z-10 w-full'>
			<nav className='flex justify-between items-center max-container relative'>
				<a href="">
					<img
						src={headerLogo}
						alt="Logo"
						width={130}
						height={29}/>
				</a>
				<ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
					{navLinks.map((link, index) => (
						<li key={index}>
							<a className='font-montserrat leading-normal text-lg text-slate-gray'
								 href={link.href}>{link.label}</a>
						</li>
					))}
				</ul>

				<div className={`${isOpen ? 'hidden' : ''} block lg:hidden cursor-pointer`}
						 onClick={() => setIsOpen((prev) => !prev)}>
					<img
						src={hamburger}
						alt="Hamburger"
						width={25}
						height={25}/>
				</div>

				{isOpen ? (
					<ul
						className={`flex-1 flex flex-col justify-center max-w-[200px] items-center gap-8 ${isOpen ? 'block' : 'hidden'} absolute right-1 top-5 bg-[#FF6452] p-[20px] rounded-[10px] lg:hidden`}>
						{navLinks.map((link, index) => (
							<li key={index}>
								<a onClick={() => setIsOpen(prev => !prev)}
									 className='font-montserrat leading-normal text-lg text-white'
									 href={link.href}>{link.label}</a>
							</li>
						))}
					</ul>
				) : (
					''
				)}

			</nav>
		</header>
	)
}

