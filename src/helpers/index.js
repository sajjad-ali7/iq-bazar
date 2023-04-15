export const getAllProducts = (currentPage = 1) => {
  return `;limit=20&page=${currentPage}&search=type.slug:makeup`;
};

export const onSearch = (searchValue, currentPage = 1) => {
  return `searchJoin=and&with=type%3Bauthor&limit=30&page=${currentPage}&language=en&search=type.slug:makeup%3Bname:${searchValue}%3Bstatus:publish`;
};

export const onCategoriesSelect = (category, currentPage = 1) => {
  return `searchJoin=and&with=type%3Bauthor&limit=30&page=${currentPage}&language=en&search=type.slug:makeup%3Bcategories.slug:${category}%3Bstatus:publish`;
};
