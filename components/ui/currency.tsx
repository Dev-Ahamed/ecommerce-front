export const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "LKR",
});

interface CurrencyProps {
  value: string;
}

export const Currency = ({ value }: CurrencyProps) => {
  return <div className="font-semibold">{value}</div>;
};
