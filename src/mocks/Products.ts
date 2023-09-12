import { type ProductItemType } from "@/ui/types";

export const products: ProductItemType[] = [
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
