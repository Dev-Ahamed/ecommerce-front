import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL, { method: "GET", cache: "no-store" });
  const result = await res.json();
  const data = await result.data;

  return data;
};

export default getColors;
