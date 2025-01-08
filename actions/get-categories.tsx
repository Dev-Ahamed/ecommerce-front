import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL, { method: "GET", cache: "no-store" });
  const result = await res.json();
  const data = await result.data;

  return data;
};

export default getCategories;
