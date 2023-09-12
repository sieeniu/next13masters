import { type ProductItemType } from "@/ui/types";
import { formatPrice } from "@/ui/utils";

type ProductItemDescriptionProps = {
	product: ProductItemType;
};

export const ProductItemDescription = ({
	product,
}: ProductItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
					{product.name}
				</h3>
				<p className="text-sm text-gray-500 dark:text-gray-300">
					<span className="sr-only">Category:</span>
					{product.category}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900 dark:text-gray-100">
				<span className="sr-only">Price:</span>
				{formatPrice(product.price)}
			</p>
		</div>
	);
};
