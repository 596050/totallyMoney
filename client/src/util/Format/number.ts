export const formatCurrency = (
  value: number,
  locale = "en-GB",
  currency = "GBP",
  options?: Intl.NumberFormatOptions
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    ...options,
  }).format(value);
};
