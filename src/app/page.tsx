import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: 1,
		name: "Strawberry Yogurt",
		price: 5.99,
		category: "Yogurt",
		image: {
			src: "/strawberry-yogurt.jpg",
			alt: "Strawberry Yogurt",
		},
	},
	{
		id: 2,
		name: "Banana Pineapple",
		price: 5.49,
		category: "Juice",
		image: {
			src: "/banana-pineapple.jpg",
			alt: "Banana Pineapple",
		},
	},
	{
		id: 3,
		name: "Melon Peach",
		price: 6.29,
		category: "Juice",
		image: {
			src: "/melon-peach.jpg",
			alt: "Melon Peach",
		},
	},
	{
		id: 4,
		name: "Spinach Orange Pineapple",
		price: 6.99,
		category: "Juice",
		image: {
			src: "/spinach-orange-pineapple.jpg",
			alt: "Spinach Orange Pineapple",
		},
	},
];

export default function Home() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl md:max-w-5xl lg:max-w-6xl">
			<ProductList products={products} />
		</section>
	);
}
