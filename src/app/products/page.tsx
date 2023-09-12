import { ProductList } from "@/ui/organisms/ProductList";
import { products } from "@/mocks/Products";

export default function Products() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl md:max-w-5xl lg:max-w-6xl">
			<ProductList products={products} />
		</section>
	);
}
