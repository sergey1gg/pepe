export const addToCart = (
  product: any, // Замените `any` на конкретный тип продукта
  color: string,
  quantity: number,
  size: string
) => {
  const cartItem = {
    product,
    color: color,
    quantity: quantity,
    size
  };

  const cart: any[] = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push(cartItem);
  localStorage.setItem('cart', JSON.stringify(cart));
};
