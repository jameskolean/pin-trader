const numberFormat = new Intl.NumberFormat(['en-US'], {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'symbol',
});
export const formatUSD = cents => {
  const price = (cents / 100).toFixed(2);
  return numberFormat.format(price);
};
