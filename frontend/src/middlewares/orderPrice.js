const orderPrice = (array) => {
  return Number(
    array.reduce((prev, item) => prev + item.price * item.qty, 0).toFixed(2)
  );
};
export default orderPrice;
