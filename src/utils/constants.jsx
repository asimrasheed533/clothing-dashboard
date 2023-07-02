import axios from "./axios";

let categories = [];

axios.get("categories").then((res) => {
  categories = res.data.map((item) => ({
    label: item.name,
    value: item._id,
  }));
});

export { categories };

const getCategoryName = (id) => {
  const category = categories.find((item) => item.value === id);
  return category ? category.label : "";
};

export { getCategoryName };
