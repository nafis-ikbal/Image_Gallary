import { useEffect, useState } from "react";
import ShowMoreButton from "./button/ShowMoreButton";
import { getData } from "../api/UnplashData";

export default function SearchImgGallary({ images, srcValue, setImages }) { //srcValue = input value
  const [currPage, setCurrPage] = useState(1);  //access current page
  const [totalPage, setTotalPage] = useState(0); //total available page

  useEffect(() => {
    async function getTotalPage() {
      const params = {page: currPage, query: srcValue,};

      try {
        const response = await getData.getImages({params});
        setTotalPage(response.data.total_pages);
        setCurrPage(1);  //reset current page when new keyword
      } catch (error) {
        throw error;
      }
    }

    if (srcValue) {
      getTotalPage();
    }
  }, [srcValue]);

  async function SearchMoreImgs() {
    const nextPage = currPage + 1;
    const params = {page: nextPage, query: srcValue,};

    try {
      const response = await getData.getImages({params});
      setImages([...images, ...response.data.results]); //append to previous images
      setCurrPage(nextPage);
    }catch (error) {
        throw error;
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((item, idx) => {
          return (
            <a href={item.links.html} target="_blank" key={idx}>
              <img src={item.urls.small} 
                className="w-full h-67 object-cover cursor-pointer 
                hover:shadow-xl/30 hover:opacity-50"
              />
            </a>
          );
        })}
      </div>

      {currPage < totalPage && images.length > 0 && (
        <div className="my-7 flex justify-center">
          <ShowMoreButton onMore={SearchMoreImgs}/>
        </div>
      )}
    </>
  );
}