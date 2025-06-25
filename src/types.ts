export type Category = {
  name: string;
  subcategories: Category[];
};

export type Categories = Category[];
