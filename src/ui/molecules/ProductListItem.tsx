import { ProductItemImage } from "@/ui/atoms/ProductItemImage";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";
import { type ProductItemType } from "@/ui/types";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<li>
			<article>
				<ProductItemImage {...product.image} />
				<ProductItemDescription product={product} />
			</article>
		</li>
	);
};
