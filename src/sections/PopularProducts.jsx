import {products} from "../constants/index.js";
import {PopularProductCard} from "../components/PopularProductCard.jsx";

export const PopularProducts = () => (
	<section id='products' className='max-container nax-sm:mt-12'>
		<div className='flex flex-col justify-start gap-5'>
			<h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-coral-red'>Popular</span> Products</h2>
			<p className='lg:max-w-lg font-montserrat text-slate-gray'>
				Experience top-notch quality and style with por sought-after selections. Discover a world of comfort, design,
				and value
			</p>
		</div>

		<div className='mt-16 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
			{products.map((product) => (
				<PopularProductCard key={product.name} {...product}/>
			))}
		</div>
	</section>
)
