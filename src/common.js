export const toUpperCaseFirst = (word) => word[0].toUpperCase() + word.slice(1);

export const ratingStyle = (rating) => {
  return {width: `${Math.round(rating) * 20}%`};
};

export const getPoints = (hotels = []) => hotels.map((item) => ({id: item.id, location: item.location, title: item.title}));
