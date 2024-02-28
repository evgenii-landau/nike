import {headerLogo} from "../assets/images/index.js";
import {hamburger} from "../assets/icons/index.js";
import {navLinks} from "../constants/index.js";


export const Nav = () => (
	<header className='padding-x py-8 absolute z-10 w-full'>
		<nav className='flex justify-center items-center max-container'>
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
		</nav>
	</header>
)

