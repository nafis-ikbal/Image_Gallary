import SearchBox from "./SearchBox";

export default function Header({ resultsObjs, keywords, setKeywords }) {
  return(
    <div className="flex flex-col items-center py-4">
      <h1 className="text-5xl font-[suse] tracking-wider underline 
        decoration-wavy decoration-3 decoration-rose-400  underline-offset-14">
        Image Gallary
      </h1>

      <SearchBox resultsObj={resultsObjs} keyword={keywords} setKeyword={setKeywords}/>
    </div>
  );
}