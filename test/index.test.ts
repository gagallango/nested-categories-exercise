import { getCategoryPath } from "../src/index";
import { categories } from "./categories.mock";

test("Get route for category 4", () => {
  const path = getCategoryPath(categories, "category4");
  expect(path).toBe("/category1/category3/category4");
});

test("Get route for category 2", () => {
  const path = getCategoryPath(categories, "category2");
  expect(path).toBe("/category1/category2");
})

test("Get route for category 5", () => {
  const path = getCategoryPath(categories, "category5");
  expect(path).toBe("/category5");
});