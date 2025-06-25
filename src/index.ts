import { Categories } from "./types";

export const getCategoryPath = (
  categories: Categories,
  categoryName: string
): string | null => {
  let path = null;

  for (const item of categories) {
    if (item.name === categoryName) {
      path = `/${item.name}`;
    }

    if (item.subcategories.length) {
      const subPath = getCategoryPath(item.subcategories, categoryName);
      if (subPath) {
        path = `/${item.name}${subPath}`;
      }
    }
  }
  return path;
};
