import { useEffect, useState } from "react";
import { getData } from "../api/UnplashData";

export default function HomeImgGallary() {
  const [randomImages, setRandomImages] = useState([]);

  //get random image 1st time rendering
  useEffect(() => {
    async function GetRandomImages() {
      const params = {per_page: 24};

      try {
        const res = await getData.getRandomImages({params});
        setRandomImages(res.data);
      } catch (err) {
        throw err;
      }
    }

    GetRandomImages();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {randomImages.map((item, idx) => {
          return (
            <a href={item.links.html} target="_blank" key={idx}>
              <img src={item.urls.small} 
                className="w-full h-65 object-cover cursor-pointer 
                hover:shadow-xl/30 hover:opacity-50"
              />
            </a>
          );
        })}
    </div>
  );
}