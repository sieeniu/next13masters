import Image from "next/image";

type ProductItemImageProps = { src: string; alt: string };

export const ProductItemImage = ({
	src,
	alt,
}: ProductItemImageProps) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md bg-slate-200 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700">
			<Image
				width={320}
				height={320}
				alt={alt}
				src={src}
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};
