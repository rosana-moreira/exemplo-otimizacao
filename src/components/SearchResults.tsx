import { ProductItem } from "./ProductItem";
import { useMemo } from "react";
interface SearchResultsProps {
  results: Array<{
    id: number;
    prince: number;
    title: string;
  }>;
}
export default function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.prince;
    }, 0);
  }, [results]);
  return (
    <div>
      <h2>{totalPrice}</h2>
      {results.map((product) => {
        // eslint-disable-next-line react/jsx-key
        return <ProductItem product={product} />;
      })}
    </div>
  );
}
