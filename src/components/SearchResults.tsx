import ProductItem from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    prince: number;
    title: string;
  }>;
}
export default function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {results.map((product) => {
        // eslint-disable-next-line react/jsx-key
        return <ProductItem product={product} />;
      })}
    </div>
  );
}
