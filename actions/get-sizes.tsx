import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL, { method: "GET", cache: "no-store" });
  const result = await res.json();
  const data = await result.data;

  return data;
};

export default getSizes;
