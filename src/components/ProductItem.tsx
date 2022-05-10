import { memo } from "react";

interface ProductItemProps {
  product: {
    id: number;
    prince: number;
    title: string;
  };
}
function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.prince}</strong>
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
