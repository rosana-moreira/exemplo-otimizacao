import { ProductItem } from "./ProductItem";
import { useMemo } from "react";
interface SearchResultsProps {
  results: Array<{
    id: number;
    prince: number;
    title: string;
  }>;
  onAddToWishlist: (id: number) => void;
}
export default function SearchResults({
  results,
  onAddToWishlist,
}: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.prince;
    }, 0);
  }, [results]);
  return (
    <div>
      <h2>{totalPrice}</h2>
      {results.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishlist={onAddToWishlist}
          />
        );
      })}
    </div>
  );
}
