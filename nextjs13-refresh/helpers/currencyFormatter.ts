const currencyFormatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
  currencyDisplay: 'symbol',
});

export default currencyFormatter;
