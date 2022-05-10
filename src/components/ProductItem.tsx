interface ProductItemProps {
  product: {
    id: number;
    prince: number;
    title: string;
  };
}
export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.prince}</strong>
    </div>
  );
}
