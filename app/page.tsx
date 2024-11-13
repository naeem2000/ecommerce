import { getData } from './components/actions/data.actions';
import Image from 'next/image';

export default async function Home() {
	const response = await getData();
	return (
		<main>
			<div className='flex items-start justify-start'>
				{response.items.map((items, index) => {
					return (
						<div className='mr-20' key={index}>
							<Image
								src={`https:${items.fields.productImage.fields.file.url}`}
								width={300}
								height={300}
								alt='awe'
							/>
							<p>
								<strong>Product name:</strong> {items.fields.productName}
							</p>
							<p>
								<strong>Product price:</strong> R{items.fields.price}
							</p>
							<p>
								<strong>Product type:</strong> {items.fields.productType}
							</p>
							<p>
								<strong>Product description:</strong> {items.fields.description}
							</p>
						</div>
					);
				})}
			</div>
		</main>
	);
}
