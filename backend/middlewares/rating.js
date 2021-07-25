export function getReviewsCount(product) {
  return product.reviews.length;
}

export function getRating(product) {
  const { reviews } = product;
  const reviewCount = getReviewsCount(product);
  return reviewCount === 0
    ? 0
    : reviews.reduce((acc, item) => acc + item.stars, 0) / reviewCount;
}
