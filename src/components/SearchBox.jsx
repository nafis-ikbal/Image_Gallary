import Input from "./Input";
import SearchButton from "./button/SearchButton";
import { getData } from "../api/UnplashData";

export default function SearchBox({ resultsObj, keyword, setKeyword }) { //resultsObj = results

  async function SearchImage() {
    const params = {
      page: 1,
      query: keyword,
    };

    try {
      if (keyword) {  //if user search for image
        let res = await getData.getImages({params});
        let results = res.data.results;
        resultsObj(results); //this is setResultsImages() function
      }
    } catch (err) {
      throw err;
    }
  }

  function handleInputChange(value) {
    setKeyword(value);
  }

  return(
    <div className="mt-6 p-4 flex">
      <Input value={keyword} onChange={handleInputChange}/>

      <SearchButton handleClick={SearchImage}/>
    </div>
  );
}