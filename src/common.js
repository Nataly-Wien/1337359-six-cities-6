export const toUpperCaseFirst = (word) => word[0].toUpperCase() + word.slice(1);

export const ratingStyle = (rating) => {
  return {width: `${Math.round(rating) * 20}%`};
};
