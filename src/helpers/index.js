export const getAllProducts = (currentPage = 1) => {
  return `;limit=20&page=${currentPage}&search=type.slug:makeup`;
};

export const onSearch = (searchValue, currentPage = 1) => {
  return `searchJoin=and&with=type%3Bauthor&limit=30&page=${currentPage}&language=en&search=type.slug:makeup%3Bname:${searchValue}%3Bstatus:publish`;
};

export const onCategoriesSelect = (category, currentPage = 1) => {
  return `searchJoin=and&with=type%3Bauthor&limit=30&page=${currentPage}&language=en&search=type.slug:makeup%3Bcategories.slug:${category}%3Bstatus:publish`;
};

export const storage = {
  get: (name) => localStorage.getItem(name),
  set: (name, value) => localStorage.setItem(name, value),
  parsedGet: (name) => JSON.parse(localStorage.getItem(name)),
};

export const addItems = (arrayName, product, amount) => {
  const oldArray = JSON.parse(storage.get(arrayName));
  const filteredArr = oldArray.filter((item) => item.id !== product.id);

  if (filteredArr.length === 0) {
    storage.set(arrayName, JSON.stringify([{ ...product, amount }]));
    return [{ ...product, amount }].sort((a, b) => a.id - b.id);
  } else {
    storage.set(
      arrayName,
      JSON.stringify([...filteredArr, { ...product, amount }])
    );
    return [...filteredArr, { ...product, amount }].sort((a, b) => a.id - b.id);
  }
};

export const removeItems = (arrayName, product, amount) => {
  const newArray = storage
    .parsedGet(arrayName)
    .filter((el) => el.id !== product.id);

  if (amount === 0) {
    storage.set(arrayName, JSON.stringify(newArray));
    return newArray.sort((a, b) => a.id - b.id);
  } else {
    storage.set(
      arrayName,
      JSON.stringify([...newArray, { ...product, amount }])
    );

    return [...newArray, { ...product, amount }];
  }
};

export const calcTotalPrice = (itemsArr = []) => {
  return itemsArr
    ?.map((el) => el.amount * el.price)
    ?.reduce((prev, next) => prev + next, 0);
};

export const priceFormatter = (price) => {
  const { format } = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  if (price === 0) return format(price);
  if (!price) return "$0";
  else return format(price).slice(0, -3);
};
