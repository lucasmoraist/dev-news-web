import { getImage } from "@/api/image/getImage";
import { useEffect, useState } from "react";

export function useImage(imageBanner: string) {
  const [image, setImage] = useState<string>();

  useEffect(() => {
    async function fetchData() {
      const res = await getImage(imageBanner);
      setImage(res);
    }

    fetchData();
  }, []);

  return image;
}
